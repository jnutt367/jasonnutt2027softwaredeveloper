#!/usr/bin/env node
/* ============================================================
   THE LIVING VINE — refresh engine
   ------------------------------------------------------------
   Fills ../stats.json from the automatable sources:
     · GitHub public API        (HOURLY class — repo/follower counts,
                                 latest push, flagship + portfolio repos)
     · Word of God Risen repo   (COMPUTE class — books, cross-refs,
                                 covers, sitemap size, commit count,
                                 counted locally, never fetched)
     · YouTube Data API v3      (DAILY class — one channels.list call =
                                 1 quota unit; OAuth held in the yt-seo
                                 workspace, PKCE refresh-token exchange)
     · Hooks directory          (COMPUTE class — watcher count)

   FAILURE LAW (the dossier's, non-negotiable): if any source fails,
   that datum keeps its last verified value AND its old stamp. This
   script never zeroes, never blanks, never guesses. STAMP / STATIC
   blocks (Trailhead, films, compliance, credentials, learning) are
   owned by the verified propagation duty and are never touched here.

   Run:  node scripts/refresh-stats.mjs [--dry]
   Env overrides (defaults are this machine's workspace layout):
     VINE_STATS   path to stats.json      (default: ../stats.json)
     WOGR_DIR     Word of God Risen repo  (default: ~/workspace/word-of-god-risen)
     YT_DIR       yt-seo workspace        (default: ~/workspace/yt-seo)
     HOOKS_DIR    hooks scripts dir       (default: ~/hooks/scripts)
   A Judah-side cron drives this later (GitHub/WOGR hourly, YouTube
   once daily); a commit of stats.json is the deploy trigger.
   ============================================================ */
import { readFileSync, writeFileSync, readdirSync, existsSync, statSync } from "node:fs";
import { execFileSync } from "node:child_process";
import { homedir } from "node:os";
import { join, dirname } from "node:path";
import { fileURLToPath } from "node:url";

const HERE = dirname(fileURLToPath(import.meta.url));
const STATS_PATH = process.env.VINE_STATS || join(HERE, "..", "stats.json");
const WOGR_DIR = process.env.WOGR_DIR || join(homedir(), "workspace", "word-of-god-risen");
const YT_DIR = process.env.YT_DIR || join(homedir(), "workspace", "yt-seo");
const HOOKS_DIR = process.env.HOOKS_DIR || join(homedir(), "hooks", "scripts");
const DRY = process.argv.includes("--dry");
const TODAY = new Date().toISOString().slice(0, 10);
const CHANNEL_ID = "UC1ryMv3ldYCOgshChVrqZNQ";

const stats = JSON.parse(readFileSync(STATS_PATH, "utf8"));
const log = [];
const ok = (m) => log.push("  ✓ " + m);
const keep = (m) => log.push("  – kept last verified value: " + m);

function datum(id) { return stats.data.find((d) => d.id === id); }
function setVal(id, value, display) {
  const d = datum(id);
  if (!d) return;
  // Monotonic guard: counts that can only grow must never shrink on a fetch.
  if (typeof d.value === "number" && typeof value === "number" && value < d.value) {
    keep(`${id} — source returned ${value}, below stamped ${d.value} (bad data or a real event; a human hears about it first)`);
    return false;
  }
  d.value = value; d.display = display; d.updated_at = TODAY;
  return true;
}
const fmt = (n) => n.toLocaleString("en-US");
async function getJSON(url, headers = {}) {
  const r = await fetch(url, { headers: { "User-Agent": "living-vine-refresh", ...headers } });
  if (!r.ok) throw new Error(`HTTP ${r.status} for ${url}`);
  return r.json();
}

/* ---------------- GitHub (public API, unauthenticated) ---------------- */
async function refreshGitHub() {
  try {
    const u = await getJSON("https://api.github.com/users/jnutt367");
    if (setVal("gh_repos", u.public_repos, fmt(u.public_repos))) ok(`GitHub public repos → ${u.public_repos}`);
    if (setVal("gh_followers", u.followers, fmt(u.followers))) ok(`GitHub followers → ${u.followers}`);
    const ev = await getJSON("https://api.github.com/users/jnutt367/events/public?per_page=30");
    const push = ev.find((e) => e.type === "PushEvent");
    if (push) {
      const day = push.created_at.slice(0, 10);
      const nice = new Date(push.created_at).toLocaleDateString("en-US", { month: "short", day: "numeric", year: "numeric", timeZone: "America/New_York" });
      if (setVal("gh_activity", day, nice)) ok(`GitHub latest push → ${nice}`);
    }
    const p = await getJSON("https://api.github.com/repos/jnutt367/jasonnutt2027softwaredeveloper");
    const pday = p.pushed_at.slice(0, 10);
    const pnice = new Date(p.pushed_at).toLocaleDateString("en-US", { month: "short", day: "numeric", year: "numeric", timeZone: "America/New_York" });
    if (setVal("portfolio_deploy", pday, pnice)) ok(`Portfolio last deploy → ${pnice}`);
  } catch (e) { keep(`GitHub (${e.message})`); }
}

/* ---------------- Word of God Risen (compute from the repo) ---------------- */
function refreshWOGR() {
  try {
    const booksTs = readFileSync(join(WOGR_DIR, "data", "books.ts"), "utf8");
    // Distinct entry slugs only — the BookMeta interface also contains
    // the literal text "slug:", so count unique quoted entry slugs.
    const books = new Set([...booksTs.matchAll(/slug:\s*'([^']+)'/g)].map((m) => m[1])).size;
    if (books > 0 && setVal("wogr_books", books, fmt(books))) ok(`WOGR books → ${books}`);
    if (books > 0 && setVal("wogr_covers", books, fmt(books))) ok(`WOGR covers (one per book) → ${books}`);

    const xr = JSON.parse(readFileSync(join(WOGR_DIR, "data", "cross-refs.json"), "utf8"));
    let entries = 0; for (const k in xr) entries += Array.isArray(xr[k]) ? xr[k].length : 1;
    if (entries > 0 && setVal("wogr_crossrefs", entries, fmt(entries))) ok(`WOGR cross-references → ${fmt(entries)} across ${fmt(Object.keys(xr).length)} verse keys`);

    const commits = parseInt(execFileSync("git", ["-C", WOGR_DIR, "rev-list", "--count", "HEAD"], { encoding: "utf8" }).trim(), 10);
    if (commits > 0 && setVal("wogr_commits", commits, fmt(commits))) ok(`WOGR commits → ${commits}`);

    // Sitemap count: only recomputed when a built sitemap is on disk;
    // otherwise the last build's count stands (dossier: recompute at deploy).
    const candidates = [join(WOGR_DIR, ".next", "server", "app", "sitemap.xml", "body"), join(WOGR_DIR, ".next", "server", "app", "sitemap.xml"), join(WOGR_DIR, "out", "sitemap.xml")];
    const sm = candidates.find((c) => { try { return existsSync(c) && statSync(c).isFile(); } catch { return false; } });
    if (sm) {
      const urls = (readFileSync(sm, "utf8").match(/<loc>/g) || []).length;
      if (urls > 0 && setVal("wogr_pages", urls, fmt(urls))) ok(`WOGR sitemap URLs → ${fmt(urls)}`);
    } else keep("wogr_pages — no built sitemap on disk; last build's count stands");
  } catch (e) { keep(`WOGR compute (${e.message})`); }
}

/* ---------------- YouTube (held OAuth, 1 quota unit) ---------------- */
async function refreshYouTube() {
  try {
    const tokens = JSON.parse(readFileSync(join(YT_DIR, "tokens.json"), "utf8"));
    const oauth = JSON.parse(readFileSync(join(YT_DIR, "oauth_state.json"), "utf8"));
    // The client secret is NEVER stored on this machine (Jason's standing
    // choice — see yt-seo/refresh_once.py, secret via stdin only). So:
    // 1) try the stored access token; 2) if rejected and YT_CLIENT_SECRET
    //    is in the environment, do the refresh-token exchange; 3) else keep.
    let access = tokens.access_token;
    let probe = await fetch(`https://www.googleapis.com/youtube/v3/channels?part=statistics&id=${CHANNEL_ID}`, { headers: { Authorization: `Bearer ${access}` } });
    if (probe.status === 401) {
      const secret = process.env.YT_CLIENT_SECRET;
      if (!secret) throw new Error("stored access token expired and YT_CLIENT_SECRET is not set (secret is never stored on this machine, by design) — run yt-seo/refresh_once.py");
      const body = new URLSearchParams({ client_id: oauth.client_id, client_secret: secret, refresh_token: tokens.refresh_token, grant_type: "refresh_token" });
      const tr = await fetch("https://oauth2.googleapis.com/token", { method: "POST", body });
      if (!tr.ok) throw new Error(`token exchange HTTP ${tr.status}`);
      const tj = await tr.json();
      access = tj.access_token;
      if (!DRY) { tokens.access_token = tj.access_token; tokens.expires_in = tj.expires_in; writeFileSync(join(YT_DIR, "tokens.json"), JSON.stringify(tokens, null, 2)); }
      probe = await fetch(`https://www.googleapis.com/youtube/v3/channels?part=statistics&id=${CHANNEL_ID}`, { headers: { Authorization: `Bearer ${access}` } });
    }
    if (!probe.ok) throw new Error(`channels.list HTTP ${probe.status}`);
    const ch = await probe.json();
    const s = ch.items?.[0]?.statistics;
    if (!s) throw new Error("no statistics in response");
    if (setVal("yt_subs", +s.subscriberCount, fmt(+s.subscriberCount))) ok(`YouTube subscribers → ${fmt(+s.subscriberCount)}`);
    if (setVal("yt_views", +s.viewCount, fmt(+s.viewCount))) ok(`YouTube views → ${fmt(+s.viewCount)}`);
    if (setVal("yt_videos", +s.videoCount, fmt(+s.videoCount))) ok(`YouTube videos → ${fmt(+s.videoCount)}`);
  } catch (e) { keep(`YouTube (${e.message})`); }
}

/* ---------------- Automations (hooks directory) ---------------- */
function refreshHooks() {
  try {
    const n = readdirSync(HOOKS_DIR).filter((f) => f.endsWith(".sh")).length;
    if (n > 0 && setVal("automations", n, fmt(n))) ok(`Automated watchers → ${n}`);
  } catch (e) { keep(`hooks count (${e.message})`); }
}

console.log(`Living Vine refresh — ${TODAY}${DRY ? " (dry run)" : ""}`);
await refreshGitHub();
refreshWOGR();
await refreshYouTube();
refreshHooks();
if (!DRY) writeFileSync(STATS_PATH, JSON.stringify(stats, null, 2) + "\n");
console.log(log.join("\n"));
console.log(DRY ? "Dry run — stats.json not written." : `stats.json written → ${STATS_PATH}`);

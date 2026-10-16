#!/usr/bin/env node
/**
 * Renders public/logo.png (horizontal, for JSON-LD `logo`),
 * public/logo-mark.png and public/og-image.png (social share card) from the live Logo component, so the bitmap always
 * matches the site and uses the self-hosted Fraunces/Manrope fonts.
 * Usage: start the app (npm run start), then `npm run logo` (BASE_URL optional).
 */
import { chromium } from "playwright-core";

const base = process.env.BASE_URL ?? "http://localhost:3000";
// Uses CHROMIUM_PATH if set, otherwise your installed Google Chrome.
const browser = await chromium.launch(
  process.env.CHROMIUM_PATH ? { executablePath: process.env.CHROMIUM_PATH } : { channel: "chrome" },
);
const page = await browser.newPage({ deviceScaleFactor: 2 });
await page.goto(base + "/", { waitUntil: "networkidle" });
await page.evaluate(() => document.fonts.ready);

// Reuse the header logo markup, scaled up on a transparent canvas.
await page.evaluate(() => {
  const logo = document.querySelector('header a[href="/"] > span');
  const mark = logo.querySelector("svg").cloneNode(true);
  document.body.innerHTML = "";
  document.body.style.cssText = "display:block;background:transparent;margin:0";
  document.documentElement.style.background = "transparent";
  const wrap = document.createElement("div");
  wrap.id = "logo";
  wrap.style.cssText = "display:block;width:max-content;padding:8px;zoom:3";
  wrap.appendChild(logo);
  const markWrap = document.createElement("div");
  markWrap.id = "mark";
  markWrap.style.cssText = "display:block;width:max-content;line-height:0";
  mark.setAttribute("width", "256");
  mark.setAttribute("height", "256");
  markWrap.appendChild(mark);
  document.body.append(wrap, markWrap);
});
await page.locator("#logo").screenshot({ path: "public/logo.png", omitBackground: true });
await page.locator("#mark").screenshot({ path: "public/logo-mark.png", omitBackground: true });

// 1200x630 Open Graph / Twitter share image.
const og = await browser.newPage({ viewport: { width: 1200, height: 630 }, deviceScaleFactor: 1 });
await og.goto(base + "/", { waitUntil: "networkidle" });
await og.evaluate(() => document.fonts.ready);
await og.evaluate(() => {
  // The footer renders the light-on-dark variant of the logo.
  const logo = document.querySelector('footer a[href="/"] > span').cloneNode(true);
  document.body.innerHTML = "";
  document.body.style.cssText = "display:block;margin:0";
  const card = document.createElement("div");
  card.id = "og";
  card.className = "texture-concrete";
  card.style.cssText =
    "width:1200px;height:630px;box-sizing:border-box;padding:72px 80px;display:flex;flex-direction:column;justify-content:space-between;color:#f6f1e8";
  const top = document.createElement("div");
  top.style.cssText = "zoom:2";
  top.appendChild(logo);
  const h = document.createElement("div");
  h.style.cssText = "font-family:var(--font-display);font-size:68px;line-height:1.05;font-weight:600;max-width:1040px";
  h.textContent = "Concrete built for the high desert.";
  const sub = document.createElement("div");
  sub.style.cssText = "margin-top:20px;font-size:26px;color:#d9d0c1";
  sub.textContent = "Driveways · Stamped concrete · Slabs & foundations · Retaining walls — Albuquerque metro, NM";
  const bottom = document.createElement("div");
  bottom.append(h, sub);
  const bar = document.createElement("div");
  bar.style.cssText = "position:absolute;left:0;right:0;bottom:0;height:10px;background:#b0512b";
  card.style.position = "relative";
  card.append(top, bottom, bar);
  document.body.appendChild(card);
});
await og.locator("#og").screenshot({ path: "public/og-image.png" });
await browser.close();
console.log("Wrote public/logo.png, public/logo-mark.png and public/og-image.png");

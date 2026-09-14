import puppeteer from 'puppeteer';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const url   = process.argv[2] || 'http://localhost:3000';
const label = process.argv[3] ? `-${process.argv[3]}` : '';
const width = process.argv[4] ? parseInt(process.argv[4], 10) : 1440;
const dir   = path.join(__dirname, 'temporary screenshots');

if (!fs.existsSync(dir)) fs.mkdirSync(dir, { recursive: true });

let n = 1;
while (fs.existsSync(path.join(dir, `screenshot-${n}${label}.png`))) n++;
const outPath = path.join(dir, `screenshot-${n}${label}.png`);

const browser = await puppeteer.launch({ headless: 'new', args: ['--no-sandbox'] });
const page = await browser.newPage();
await page.setViewport({ width, height: 900, deviceScaleFactor: 1, isMobile: width < 768 });
await page.goto(url, { waitUntil: 'networkidle2', timeout: 30000 });
// Force all fade-up elements visible for screenshot, and make lazy images eager so a
// full-page capture never paints an empty frame for an image that hadn't decoded yet.
await page.evaluate(() => {
  document.querySelectorAll('.fade-up').forEach(el => el.classList.add('visible'));
  document.querySelectorAll('img[loading="lazy"]').forEach(img => { img.loading = 'eager'; });
});
// Auto-scroll to the bottom so lazy-loaded (loading="lazy") images below the initial
// viewport are actually fetched and rendered, then return to the top so the full-page
// capture is complete and correctly positioned.
await page.evaluate(async () => {
  await new Promise((resolve) => {
    let y = 0;
    const step = 400;
    const timer = setInterval(() => {
      window.scrollBy(0, step);
      y += step;
      if (y >= document.body.scrollHeight) { clearInterval(timer); resolve(); }
    }, 60);
  });
});
// Let the images kicked off by the scroll settle (network idle), then wait for them to
// decode — bounded, so a hung/rate-limited image can never stall the capture.
await page.waitForNetworkIdle({ idleTime: 500, timeout: 15000 }).catch(() => {});
// Wait until every image has actually loaded (bounded), then decode them all (bounded).
await page.waitForFunction(
  () => [...document.images].every((img) => img.complete && img.naturalWidth > 0),
  { timeout: 15000 }
).catch(() => {});
await Promise.race([
  page.evaluate(() => Promise.all([...document.images].map((img) => img.decode().catch(() => {})))),
  new Promise((r) => setTimeout(r, 8000)),
]);
// Return to the top INSTANTLY (pages set scroll-behavior:smooth; a smooth scroll can still be
// in flight when the capture fires, which offsets fixed elements and leaves the nav in its
// scrolled state). Then wait until scrollY is actually 0 before capturing.
await page.evaluate(() => window.scrollTo({ top: 0, left: 0, behavior: 'instant' }));
await page.waitForFunction(() => window.scrollY === 0, { timeout: 3000 }).catch(() => {});
await new Promise(r => setTimeout(r, 650));
await page.screenshot({ path: outPath, fullPage: true });
await browser.close();

console.log(`Screenshot saved: ${outPath}`);

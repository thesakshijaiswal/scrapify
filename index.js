const puppeteer = require("puppeteer");
(async () => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  await page.goto(
    "https://360.articulate.com/review/content/f01749e5-807f-4656-a484-cc216ad22af2/review"
  );
})();

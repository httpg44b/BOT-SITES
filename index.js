require('dotenv').config();
const puppeteer = require('puppeteer');

(async () => {
  const browser = await puppeteer.launch({
      headless: false,
  });
  const page = await browser.newPage();
  await page.goto('https://unsplash.com');

  //ACESSA A PÁGINA DE LOGIN
  await page.click('[href="/login"]');

  await page.type('[name="user[email]"]', process.env.UNSPLASH_EMAIL)
  await page.type('#user_password', process.env.UNSPLASH_PASSWORD)

  //Clicar no botão para fazer LOGIN
  await page.click('[type="submit"]');

  await page.waitForNavigation();

  //Acessar essa página:
  await page.goto('https://unsplash.com/photos/U0AUg5gted4');

  await page.click('[title="Like"]');

  //await browser.close();
})();
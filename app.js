const puppeteer = require('puppeteer');
const schedule = require('node-schedule');
const dayjs = require('./time.js')

const scheduleCronstyle = () => {
  schedule.scheduleJob('0 30 7 * * *', () => {
    (async () => {
      const browser = await puppeteer.launch()
      const page = await browser.newPage()
      await page.goto('https://w1.v2dns.xyz/auth/login')
      await page.focus('#email')
      await page.keyboard.sendCharacter('chc2075983104@163.com')
      await page.focus('#passwd')
      await page.keyboard.sendCharacter('emmmm000')
      await page.click('#login')
      page.on('load', async function () {
        await page.evaluate(async () => {
          const btn = await document.querySelector('#checkin')
          btn.click()
        });
        console.log(dayjs() + '\t已签到');
        await browser.close()
      })

    })()
  })
}

scheduleCronstyle()
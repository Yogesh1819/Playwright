import {test,expect} from '@playwright/test';

test ('Handle Keyboard', async({page})=>
{
    page.goto('https://testautomationpractice.blogspot.com/')
   
    await page.locator('//input[@id="email"]').fill('Test')

    await page.keyboard.press('Control+A')
    await page.keyboard.press('Control+C')

    await page.keyboard.down('Tab')
    await page.keyboard.up('Tab')

    await page.keyboard.press('Control+V')

  await page.pause()
})
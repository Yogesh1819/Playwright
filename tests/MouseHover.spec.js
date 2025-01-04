const {test,expect}=require('@playwright/test')

test('Mouse Hover', async({page})=>
{

    await page.goto('https://testautomationpractice.blogspot.com/')

    const button=await page.locator('//button[@class="dropbtn"]')

    await button.hover();
    await page.pause();
})
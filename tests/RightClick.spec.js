const{test,expect}=require('@playwright/test')

test('Handle double click', async({page})=>
{

    await page.goto('https://testautomationpractice.blogspot.com/')

    const click= page.locator("//button[text()='Copy Text']")

    await click.dblclick();

    const text= page.locator('//input[@id="field2"]')

    await expect(text).toHaveValue('Hello World!')
    
    await page.pause()
})
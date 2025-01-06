const{test,expect}=require('@playwright/test')

test('Practice Test Case', async({page})=>
{

    await page.goto('https://testautomationpractice.blogspot.com/')

    const Title=await page.locator('//h1[@class="title"]').textContent();

    await expect(Title).toContain('Automation Testing Practice')
    console.log('Test Passed Successfully')
}
)
const {test,expect}=require('@playwright/test')

let page;
test.beforeAll('Launch The Browser', async({browser})=>
{

    const context=await browser.newContext()

    page = await context.newPage();
   await page.goto('https://app.datainspiredliving.co.uk/')
   await page.locator('//input[@name="username"]').fill('test1hccadmin1@arthtechltd.com')
   await page.locator('//input[@name="password"]').fill('Pass@123')
   await page.locator("//button[text()='Sign in']").click()
 
   console.log('Login Successfully')

   await page.locator("(//p[text()='Home'])[2]").click()
    await page.locator('//button[@class="MuiButtonBase-root MuiIconButton-root MuiIconButton-sizeMedium css-1zbqai"]').click()
})

test('Verify second heading', async()=>
{
    
    const Heading=await page.locator('//button[@name="allResidents"]')
    await expect(Heading).toHaveText('All Residents')

    await page.waitForTimeout(2000)

    console.log('Heading is', await Heading.textContent())
})

test('Create Practitioner Account', async()=>
{
   await page.locator("//p[text()='Accounts']").click()
   await page.locator("//p[text()='Practitioners']").click()

   await page.locator('//button[@name="newButton"]').click()

   await page.locator('//input[@name="firstName"]').fill('Yogesh')
   await page.locator('//input[@name="lastName"]').fill('Tejinkar')
   await page.locator('//input[@name="contactNumber"]').fill('8766523456')
   await page.locator('//input[@name="email"]').fill('abcd@gmail.com')

   await page.waitForTimeout(4000)

   await page.locator('//button[@name="cancel"]').click()
   await page.locator('//button[@name="yes"]').click()

   await page.waitForTimeout(4000)

})

test.afterAll('Logout From Application', async()=>
{
    await page.locator("//button[text()='Logout']").click()
    console.log('Logout Successfully')

})
import {test,expect} from '@playwright/test';

// Below Program is for beforeEach And afterEach Hooks

let page;
test.beforeEach('Login Into The Application', async({browser})=>
{
  page=await browser.newPage()

  await page.goto('https://app.datainspiredliving.co.uk/')

  await page.locator('//input[@name="username"]').fill('test1hccadmin1@arthtechltd.com')
  await page.locator('//input[@name="password"]').fill('Pass@123')
  await page.locator("//button[text()='Sign in']").click()

  console.log('Login Successfully')

  await page.locator("(//p[text()='Home'])[2]").click()
  await page.locator('//button[@class="MuiButtonBase-root MuiIconButton-root MuiIconButton-sizeMedium css-1zbqai"]').click()
})

test('Verify Heading', async()=>
{
    
    const Heading=await page.locator('//h1[@class="MuiTypography-root MuiTypography-body1 css-6bjit3"]')

    await expect(Heading).toHaveText('Residents')
 // await page.waitForTimeout(2000);
    await page.waitForTimeout(2000);

    console.log('This is Headig',await Heading.textContent())
})

test('Go To Practitior Account', async()=>
{
    await page.locator("//p[text()='Accounts']").click()
    await page.locator("//p[text()='Residents']").click()
})

test.afterEach('Logout From Application', async()=>
{
    await page.locator("//button[text()='Logout']").click()
    console.log('Logout Successfully')

})



const{test,expect}=require('@playwright/test')

test('Take the screenshot', async({page})=>
{

    await page.goto('https://app.datainspiredliving.co.uk/')

    await page.locator('//input[@name="username"]').fill('test1hccadmin1@arthtechltd.com')
   await page.locator('//input[@name="password"]').fill('Pass@123')
   await page.locator("//button[text()='Sign in']").click()
   await page.locator('//input[@name="search"]').fill('Test12')
   await page.locator('//button[@name="viewResident"]').click()
 
    await page.waitForTimeout(10000)
    // Below is normal screenshot
  //  await page.screenshot({path:'test/Screenshot/scren.png'})

    // Below is full page screenshot
   // await page.screenshot({path:'test/Screenshot/'+Date.now()+'Yogehh.png',fullPage:true})

    // Below is specific webelement/locator screenshot
    await page.locator('(//div[@class="MuiBox-root css-12e2ngj"])[1]').screenshot({path:'test/Screenshot/topology.png'})

    
})
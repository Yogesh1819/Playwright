const{test,expect}=require('@playwright/test')

test('Create Referral', async({page})=>
{
    await page.goto('https://app.datainspiredliving.co.uk/')
   await page.locator('//input[@name="username"]').fill('test1hccadmin1@arthtechltd.com')
   await page.locator('//input[@name="password"]').fill('Pass@123')
   await page.locator("//button[text()='Sign in']").click()
 
   console.log('Login Successfully')

   await page.locator("(//p[text()='Home'])[2]").click()
    await page.locator('//button[@class="MuiButtonBase-root MuiIconButton-root MuiIconButton-sizeMedium css-1zbqai"]').click()

    await page.locator('//button[@name="createANewReferral"]').click()

    await page.locator('//input[@name="residentID"]').fill('12345')
    await page.locator('//input[@name="dateOfBirth"]').fill('2024-12-12')
    await page.locator('//input[@name="firstName"]').fill('Yogesh')
    await page.locator('//input[@name="lastName"]').fill('Tejinkar')
    await page.locator('//input[@name="postcode"]').fill('AL100LJ')
  //await page.locator('//input[@class="MuiInputBase-input MuiInput-input MuiInputBase-inputSizeSmall MuiInputBase-inputAdornedStart MuiInputBase-inputAdornedEnd MuiAutocomplete-input MuiAutocomplete-inputFocused css-xah6dk"]').click()
   
    await page.locator('(//div[@class="MuiAutocomplete-endAdornment css-2iz2x6"])[1]').click()
    await page.waitForTimeout(2000)
    await page.locator('//li[@class="MuiAutocomplete-option MuiBox-root css-18id24k"]').filter({hasText:'United States'}).click()
  //  await page.locator('//li[@class="MuiAutocomplete-option MuiBox-root css-18id24k"]').filter({ hasText: 'Albania' })
  //  .click();
  await page.waitForTimeout(2000)
  await page.locator('//input[@name="contactNumber"]').fill('7824336460')
  await page.locator('//input[@id="address"]').fill('33 Market Place,Hatfield State-Hertfordshire')
 // await page.locator('//input[@name="priority"]').click()
 // await page.locator('//li[@role="option"]').filter({hasText:'Priority'}).click()
 await page.locator('//input[@name="priority"]').click()
 await page.locator("//li[text()='Priority']").click()
  await page.locator('(//input[@name="hasPet"])[1]').click()
  await page.locator('(//input[@name="equipmentConsentForm"])[2]').isChecked()
  await page.locator('//button[@name="next"]').click()

  // Tiles Selection 
  await page.locator("//p[text()='Topology']/parent::div/parent::div/child::div[2]/child::span").click()
  await page.locator("//p[text()='Light']/parent::div/parent::div/child::div[2]/child::span").click()
  await page.locator("//p[text()='Activity']/parent::div/parent::div/child::div[2]/child::span").click()
  await page.locator("//p[text()='Temperature']/parent::div/parent::div/child::div[2]/child::span").click()
  await page.locator("//p[text()='Tickets']/parent::div/parent::div/child::div[2]/child::span").click()
  await page.locator("//p[text()='Mobility']/parent::div/parent::div/child::div[2]/child::span").click()
  await page.locator("//p[text()='Self Care']/parent::div/parent::div/child::div[2]/child::span").click()
  await page.locator("//p[text()='Toilet']/parent::div/parent::div/child::div[3]/child::span").click()
  await page.locator("//p[text()='Medication']/parent::div/parent::div/child::div[3]/child::span").click()
  await page.locator("//p[text()='Sleep']/parent::div/parent::div/child::div[3]/child::span").click()
  await page.locator("//p[text()='Falls']/parent::div/parent::div/child::div[3]/child::span").click()
  await page.locator('//button[@name="next"]').click()
  // Resident Environments
  await page.locator('//input[@name="nextOfKinName"]').fill('Voilet Trent')
 // await page.locator('//input[@class="MuiInputBase-input MuiInput-input MuiInputBase-inputSizeSmall MuiInputBase-inputAdornedStart MuiInputBase-inputAdornedEnd MuiAutocomplete-input MuiAutocomplete-inputFocused css-xah6dk"]').click()
 // await page.locator('//li[@class="MuiAutocomplete-option MuiBox-root css-18id24k"]').filter({hasText:'United Kingdom'}).click()
  await page.locator('//input[@name="nextOfKinContactNumber"]').fill('7586326221')
  await page.locator('//input[@name="nextOfKinEmail"]').fill('voilettrent@gmail.com')
  await page.locator('//input[@name="installer"]').click()
  await page.locator('//li[@class="MuiAutocomplete-option"]').filter({hasText:'Test1 Installer1'}).click()
  await page.locator('(//input[@class="MuiInputBase-input MuiOutlinedInput-input MuiInputBase-inputSizeSmall MuiInputBase-inputAdornedEnd MuiAutocomplete-input MuiAutocomplete-inputFocused css-1olk5o8"])[2]').click()
  await page.locator('//li[@role="option"]').filter({hasText:'Transgender Male'}).click()


    await page.pause()
    
})
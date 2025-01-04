const{test,expect}=require('@playwright/test')

// Upload Single File
test('Upload One File', async({page})=>
{
    await  page.goto('https://testautomationpractice.blogspot.com/')

    
    await page.locator('//input[@id="singleFileInput"]').setInputFiles('tests/Files/Yogesh_Tejinkar.pdf')
    await page.locator("//button[text()='Upload Single File']").click();


    await page.pause();
})

// Upload Multiple File
test.only('Upload Multiple File', async({page})=>
{

      await page.goto('https://testautomationpractice.blogspot.com/')

      await page.locator('//input[@id="multipleFilesInput"]').setInputFiles(['tests/Files/Playwright_Notes.docx','tests/Files/Yogesh_Tejinkar.pdf']);
      await page.locator("//button[text()='Upload Multiple Files']").click()

      await page.pause();

})


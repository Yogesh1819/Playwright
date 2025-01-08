const{test,expect}=require('@playwright/test')
const { Responders } = require('../Pages/Responders')
const { LoginPage } = require('../Pages/LoginPage')

test('Execute Test', async({page})=>
{

    const Obj1=new LoginPage(page)
    await Obj1.goto()
    await Obj1.loginapplication('test1hccadmin1@arthtechltd.com','Pass@123')
    await Obj1.LockMenu()
    const Obj=new Responders(page)

    await Obj.CreateResponder('Dennis', 'Smithers','7586326121','dennissmithers@arthtechltd.com')
    await page.waitForTimeout(5000)
    console.log('Responder Account Created Successfully')
    await Obj.EditResponder('Dennis','Test11','Emergency11')
    await page.waitForTimeout(5000)
    console.log('Responder Account Edited Successfully')

    await Obj.DeleteRespond('Test11')
    await page.pause();
    await page.waitForTimeout(5000)
    console.log('Responder Account Deleted Successfully')
})
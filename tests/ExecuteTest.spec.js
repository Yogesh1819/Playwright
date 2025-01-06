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

    await Obj.CreateResponder('Yogesh', 'Tejinkar','1234567890','Yog@gmail.com')
})
const{test,expect}=require('@playwright/test')
const { LoginPage } = require('../Pages/LoginPage')

test('Practice Test Case', async({page})=>
{

    const Obj=new LoginPage(page)
    await Obj.goto()
    await Obj.loginapplication('test1hccadmin1@arthtechltd.com','Pass@123')

    await Obj.LockMenu();
}
)
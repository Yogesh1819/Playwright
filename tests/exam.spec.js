const {test,expect}=require('@playwright/test')
const { LoginPage } = require('../Pages/LoginPage')

test('Test', async({page})=>
{

    const obj=new LoginPage(page);
    await obj.goto();
    await obj.loginapplication('test1hccadmin1@arthtechltd.com', 'Pass@123');
    await obj.LockMenu();
    await page.pause();
})
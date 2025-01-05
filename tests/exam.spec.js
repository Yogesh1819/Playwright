const {test,expect}=require('@playwright/test')
const { LoginPage } = require('../Pages/LoginPage');
const { Practitioner } = require('../Pages/Practitioner');

test('Test', async({page})=>
{

    const obj=new LoginPage(page);
    await obj.goto();
    await obj.loginapplication('test1hccadmin1@arthtechltd.com', 'Pass@123');
    await obj.LockMenu();
    const Obj1=new Practitioner(page);
   await Obj1.CreatePrcatitioner('Quincy','Benson','7387225564','quincybenson@arthtechltd.com');
   await page.waitForTimeout(3000);
   await Obj1.DeletePractitioner('Quincy');

    await page.pause();
})
import {test,expect} from '@playwright/test';
import { Installers } from '../Pages/Installers';
import { LoginPage } from '../Pages/LoginPage';

test('Installer Test Script', async({page})=>
{

    const AB=new LoginPage(page)
    await AB.goto()
    await AB.loginapplication('test1hccadmin1@arthtechltd.com','Pass@123')
    await AB.LockMenu()

    const Obj=new Installers(page)
    // Create Parent Installer
 //   await Obj.CreateParentInstaller('Jacob','Johns','7586326221','jacobjohns@arthtechltd.com')
  //  await page.waitForTimeout(5000)
    // Create Child Installer
    await Obj.CreateChildInstaller('Jacob','Johns','7586326221','jacobjohns@arthtechltd.com')
    // Delete Installer
   // await Obj.DeleteInstaller('Jacob')
    await page.pause()
})
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
    await Obj.CreateParentInstaller('Jacob','Johns','7586326221','jacobjohns@arthtechltd.com')

    // Create Child Installer
    await Obj.CreateChildInstaller('Mathew','Newbold','7824336460','mathewnewbold@arthtechltd.com')
    
    // Delete Child Installer
    await Obj.DeleteChildInstaller('Jacob')
    
    // Delete Parent Installer
    await Obj.DeleteInstaller('Jacob')
    await page.pause()
})

/*
test.describe('Installer Group', async()=>
{
  test('Create Parent Instaler', async({page})=>
  {
    const login=new LoginPage(page)
    await login.goto()
    await login.loginapplication('test1hccadmin1@arthtechltd.com','Pass@123')
    await login.LockMenu()
    const Obj=new Installers(page)
    Obj.CreateParentInstaller 
  })

  test('Create Child Installer', async({page})=>
  {
    const Obj=new Installers(page)
    await Obj.CreateChildInstaller('Mathew','Newbold','7824336460','mathewnewbold@arthtechltd.com')
  })
  
})*/
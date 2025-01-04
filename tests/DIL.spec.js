import{test,expect} from '@playwright/test';
import { LoginPage } from '../Pages/LoginPage';




test('Test', async({page})=>
{
  const obj=new LoginPage();
  await obj.ApplicationUrl();
});
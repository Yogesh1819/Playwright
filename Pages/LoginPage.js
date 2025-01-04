const {expect}=require('@playwright/test');

exports.LoginPage=
class LoginPage
{
    constructor(page)
    {
        this.page=page;
        this.Username='//input[@name="username"]';
        this.Password='//input[@name="password"]';
        this.login="//button[text()='Sign in']";
        this.home="(//p[text()='Home'])[2]";
        this.lock='//button[@class="MuiButtonBase-root MuiIconButton-root MuiIconButton-sizeMedium css-1zbqai"]';

    }

    async goto()
    {
        await this.page.goto('https://app.datainspiredliving.co.uk/')
    }

    async loginapplication(username, password)
    {
        await this.page.locator(this.Username).fill(username);
        await this.page.locator(this.Password).fill(password);
        await this.page.locator(this.login).click();
    }
    
    async LockMenu()
    {
     await this.page.locator(this.home).click()
     await this.page.locator(this.lock).click()
    }


}
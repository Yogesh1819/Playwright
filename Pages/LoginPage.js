exports.LoginPage=
class LoginPage {
    constructor(page) {
        this.page=page;

        
    } 

    async ApplicationUrl()
    {
        await this.page.goto('https://testautomationpractice.blogspot.com/')
        
    }
}
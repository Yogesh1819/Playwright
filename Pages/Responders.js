const{expect}=require('@playwright/test')

exports.Responders=
class Responders
{
    constructor(page)
    {
        this.page=page;
        this.Account="//p[text()='Accounts']";
        this.Responder="//p[text()='Responders']"
        this.NewBtn='//button[@name="newButton"]'
        this.Heading1="//h2[text()='Add Responder']"
        this.Fname='//input[@name="firstName"]'
        this.Lname='//input[@name="lastName"]'
        this.Contact='//input[@name="contactNumber"]'
        this.Email='//input[@name="email"]'
        this.ResponderType='(//input[@name="responderGroup"])[1]'
        this.ResponderRole='(//input[@name="responderRole"])[1]'
        this.Notification='//input[@name="notificationNotice.sms"]'
    }

    async CreateResponder(FirstName,LastName,ContactNumber,ResponderEmail)
    {
        await this.page.locator(this.Account).click();
        await this.page.locator(this.Responder).click();
        await this.page.locator(this.NewBtn).click();
        const Heading=await this.page.locator(this.Heading1).textContent();
         await expect(Heading).toContain('Add Responder')
         await this.page.locator(this.Fname).fill(FirstName)
         await this.page.locator(this.Lname).fill(LastName)
         await this.page.locator(this.Contact).fill(ContactNumber)
         await this.page.locator(this.Email).fill(ResponderEmail)
      //  const Type= await this.page.locator(this.ResponderType);
         if(await this.page.locator(this.ResponderType).isChecked())
         {
            await expect(await this.page.locator(this.ResponderType)).toBeTruthy()
            
         }
         else 
         {
            await expect(await this.page.locator(this.ResponderType)).toBeFalsy()
         }
         console.log('Test script Done Successfully')
    }

}
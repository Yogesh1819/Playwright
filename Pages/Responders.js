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
        this.ResponderRole2='(//input[@name="responderRole"])[2]'
        this.AssignLeadResponder='//input[@name="assignedResponder"]'
        this.ParentResponderList='//li[@class="MuiAutocomplete-option"]'
        this.Notification='//input[@name="notificationNotice.sms"]'
        this.Save='//button[@name="save"]'
        this.CreatedMsg="//div[text()='Responder is created successfully.']"
        this.Edit='//button[@name="pencilIcon"]'
        this.UpdatedMsg="//div[text()='Responder is updated successfully.']"
        this.search='//input[@name="search"]'
        this.ExpandArrow='//div[@class="MuiBox-root css-1n9wuna"]'
        this.DeleteResponder='//button[@name="deleteButton"]'
        this.DeleteBtn2='(//button[@name="deleteButton"])[2]'
        this.Yes='//button[@name="yes"]'
        this.DeletedMsg="//div[text()='Responder deleted successfully.']"
    }

    // Create The Responder
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
   

        // Check if ResponderType is selected
        if (await this.page.locator(this.ResponderType).isChecked()) 
         {
         await expect(this.page.locator(this.ResponderType)).toBeChecked();
         }
         else 
         {
         await expect(this.page.locator(this.ResponderType)).not.toBeChecked();
         }

     // Check if ResponderRole is selected
       if (await this.page.locator(this.ResponderRole).isChecked())
       {
         await expect(this.page.locator(this.ResponderRole)).toBeChecked();
       } 
       else 
       {
         console.log('ResponderRole checkbox is not selected.');
         await expect(this.page.locator(this.ResponderRole)).not.toBeChecked();
       }

       // Check if SMS Notification checkbox selected

       if(await this.page.locator(this.Notification).isChecked())
       {
         await expect(await this.page.locator(this.Notification)).toBeChecked();
         await this.page.locator(this.Notification).uncheck();
         console.log('SMS is unselected')
       }
       else
       {
         console.log("SMS check box is not selected")
         await expect(await this.page.locator(this.Notification)).not.toBeChecked()
       }

       await this.page.locator(this.Save).click();
       const Message=await this.page.locator(this.CreatedMsg).textContent();
       expect(Message).toContain('Responder is created successfully.')

    }


    async CreateChildEmgResponder(FirstName,LastName,ContactNumber,ResponderEmail)
    {
      const ParentResponder='Dennis Smithers'
      await this.page.locator(this.Account).click()
      await this.page.locator(this.Responder).click()
       await this.page.locator(this.NewBtn).click()
       await this.page.locator(this.Fname).fill(FirstName)
       await this.page.locator(this.Lname).fill(LastName)
       await this.page.locator(this.Contact).fill(ContactNumber)
       await this.page.locator(this.Email).fill(ResponderEmail)

         // Check if ResponderType is selected
       if(await this.page.locator(this.ResponderType).isChecked())
       {
         expect(await this.page.locator(this.ResponderType)).toBeChecked()
       }
       else
       {
        expect(await this.page.locator(this.ResponderType)).not.toBeChecked()
       }
       
       // Check if ResponderRole is selected
       if(await this.page.locator(this.ResponderRole).isChecked())
       {
          await this.page.locator(this.ResponderRole2).click()
       }
    
       await this.page.locator(this.AssignLeadResponder).click()
       await this.page.locator(this.ParentResponderList).filter({hasText:ParentResponder}).click()

       if (await this.page.locator(this.Notification).isChecked())
       {
          expect(await this.page.locator(this.Notification)).toBeTruthy()
       }
       else
       {
        await this.page.locator(this.Notification).click()
       }

       await this.page.locator(this.Save).click()
       const Message=await this.page.locator(this.CreatedMsg).textContent()
       expect(Message).toContain('Responder is created successfully.')

       this.page.waitForTimeout(5000)
       
    }

    async EditResponder(SFirstName,FirstName,LastName)
     {
      await this.page.locator(this.search).fill(SFirstName)
      await this.page.locator(this.Edit).click()
      await this.page.locator(this.Fname).fill(FirstName)
      await this.page.locator(this.Lname).fill(LastName)
      await this.page.locator(this.Save).click()
      const Message=await this.page.locator(this.UpdatedMsg).textContent()
      await expect(Message).toContain('Responder is updated successfully.')
      /*
      await this.page.locator(this.search).fill(SSFirstName)
      await this.page.locator(this.Edit).click()
      await this.page.locator(this.Fname).fill(RFirstName)
      await this.page.locator(this.Lname).fill(RLastName)
      await this.page.locator(this.Save).click()
      const Message2=await this.page.locator(this.UpdatedMsg).textContent()
      await expect(Message2).toContain('Responder is updated successfully.')
   */

     }
     
     async DeleteChildResponder(FirstName)
     {
      await this.page.locator(this.search).fill(FirstName)
      await this.page.locator(this.ExpandArrow).click()
      await this.page.locator(this.DeleteBtn2).click()
      await this.page.locator(this.Yes).click()
      const Message=await this.page.locator(this.DeletedMsg).textContent()
     expect(Message).toContain('Responder deleted successfully.')
     }
    // Delete the Created responder
    async DeleteRespond(FirstName)
    {
      await this.page.locator(this.search).fill(FirstName)
      await this.page.locator(this.DeleteResponder).click()
      await this.page.locator(this.Yes).click()
      const Message=await this.page.locator(this.DeletedMsg).textContent()
      await expect(Message).toContain('Responder deleted successfully.')
    }
   

}
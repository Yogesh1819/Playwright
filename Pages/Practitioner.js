const {expect}=require('@playwright/test')

exports.Practitioner=
class Practitioner
{
constructor (page)
{
    this.page=page;
    this.Account="//p[text()='Accounts']";
    this.Practitioner="//p[text()='Practitioners']";
    this.New='//button[@name="newButton"]'
    this.Heading1="//h2[text()='Add Practitioner']"
    this.FName='//input[@name="firstName"]'
    this.LName='//input[@name="lastName"]'
    this.CountryCode='(//div[@class="MuiAutocomplete-endAdornment css-2iz2x6"])[1]';
    this.SelectCountry='//li[@class="MuiAutocomplete-option MuiBox-root css-18id24k"]';
    this.ContactNumber='//input[@name="contactNumber"]'
    this.Email='//input[@name="email"]'
    this.Save='//button[@name="save"]';
    this.PractCreatedMsg='//div[text()="Practitioner is created successfully."]';
    this.Search='//input[@name="search"]';
    this.DeleteBtn='//button[@name="deleteButton"]';
    this.DeleteYes='//button[@name="yes"]';
    this.DeleteMsg="//div[text()='Practitioner deleted successfully.']";
}

async CreatePrcatitioner(FirstName, LastName,Contact,Enteremail)
{
 await this.page.locator(this.Account).click();
 await this.page.locator(this.Practitioner).click();
 await this.page.locator(this.New).click()
 const heading=await this.page.locator(this.Heading1).textContent();
 await expect(heading).toContain('Add Practitioner');
 console.log(heading);
 await this.page.locator(this.FName).fill(FirstName);
 await this.page.locator(this.LName).fill(LastName);
// await this.page.locator(this.CountryCode).click();
// await this.page.waitForTimeout(3000);
 //await this.page.locator(this.SelectCountry).filter({hasText:'United States'}).click();
 await this.page.locator(this.ContactNumber).fill(Contact);
 await this.page.locator(this.Email).fill(Enteremail);
 await this.page.locator(this.Save).click()
 const Message=await this.page.locator(this.PractCreatedMsg).textContent();
 await expect(Message).toContain('Practitioner is created successfully.');
 console.log(Message);
   
}

async DeletePractitioner(FirstName,)
{
  await this.page.locator(this.Search).fill(FirstName)
  await this.page.locator(this.DeleteBtn).click()
  await this.page.locator(this.DeleteYes).click();
  const DeleteMessage=await this.page.locator(this.DeleteMsg).textContent();
  await expect(DeleteMessage).toContain('Practitioner deleted successfully.')
  console.log(DeleteMessage)
}

}
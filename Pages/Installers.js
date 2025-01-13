const{expect}=require('@playwright/test')

exports.Installers=
class Installers
{
  constructor(page)
  {
    this.page=page;
    this.Account="//p[text()='Accounts']";
    this.Installer="//p[text()='Third party installers']"
    this.NewBtn='//button[@name="newButton"]'
    this.Heading1="//h2[text()='Add Third party installer']"
    this.Heading2="//h2[text()='Update Third party installer']"
    this.Fname='//input[@name="firstName"]'
    this.Lname='//input[@name="lastName"]'
    this.Contact='//input[@name="contactNumber"]'
    this.email='//input[@name="email"]'
    this.Role='(//input[@name="responderRole"])[1]'
    this.Lead='//input[@name="assignedResponder"]'
    this.CreateMsg="//div[text()='Third party installer is created successfully.']"
    this.UpdateMsg='//div[text()="Third party installer is updated successfully."]'
    this.DeleteMsg="//div[text()='Third party installer deleted successfully.']"
    this.Edit='//button[@name="pencilIcon"]'
    this.DeleteBtn='//button[@name="deleteButton"]'
    this.Yes='//button[@name="yes"]'
    this.Save='//button[@name="save"]'
    this.Search='//input[@name="search"]'
  }

  async CreateParentInstaller(FirstName,LastName,ContactNumber,InstallerEmail)
  {
    await this.page.locator(this.Account).click()
    await this.page.locator(this.Installer).click()
    await this.page.locator(this.NewBtn).click()
    const Head=await this.page.locator(this.Heading1).textContent();
    expect(Head).toContain('Add Third party installer')
    await this.page.locator(this.Fname).fill(FirstName)
    await this.page.locator(this.Lname).fill(LastName)
    await this.page.locator(this.Contact).fill(ContactNumber)
    await this.page.locator(this.email).fill(InstallerEmail)
    if(await this.page.locator(this.Role).isChecked())
    {
      console.log('Installer is selected as a Lead Installer')
    }
    else
    {
      console.log('Installer role is not selected')
    }
    await this.page.locator(this.Save).click()
    const Message=await this.page.locator(this.CreateMsg).textContent();
    expect(Message).toContain('Third party installer is created successfully.')
  }

  async DeleteInstaller(FirstName)
  {
     await this.page.locator(this.Search).fill(FirstName)
     await this.page.locator(this.DeleteBtn).click()
     await this.page.locator(this.Yes).click()
     const Message=await this.page.locator(this.DeleteMsg).textContent();
     expect(Message).toContain('Third party installer deleted successfully.')
  }
}
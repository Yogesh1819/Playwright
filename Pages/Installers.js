const{expect}=require('@playwright/test')

exports.Installers=
class Installers
{
  constructor(page)
  {
    this.page=page;
    this.Installer="//p[text()='Third party installers']"
    this.NewBtn='//button[@name="newButton"]'
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
  }
}
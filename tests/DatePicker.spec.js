import {test,expect} from '@playwright/test';

test('Handle Date', async({page})=>
{

await page.goto('https://testautomationpractice.blogspot.com/')

const Yog='Jan'
const tej='2027'

await page.locator('//input[@id="txtDate"]').click();

while(true)
{
const currentYear=await page.$$('.ui-datepicker-year option')  
const currentmonth=await page.$$('.ui-datepicker-month option ')

for ( const year of currentYear)
{
   const Yea= await year.textContent()
   if ( Yea.includes(tej))
   {
      await page.selectOption('//select[@class="ui-datepicker-year"]',Yea)
   }
}

}
await page.pause()
/*
for ( let month of currentmonth)
{
   console.log(await month.textContent())
   const AA=await month.textContent()

   if ( AA.includes(Yog))
   {
    //await month.selectOption({label:'Yog'})
    await page.selectOption('//select[@class="ui-datepicker-month"]',AA)
   }

   await page.pause()
}
*/

// .ui-datepicker-month option 

})
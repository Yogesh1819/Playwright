const{test,expect} = require('@playwright/test')

test('Handle Date', async({page})=>
{
  

    await page.goto('https://testautomationpractice.blogspot.com/')

    const Yog='Feb'
    const tej='2034'
    const Date='19'
    
    await page.locator('//input[@id="txtDate"]').click();
/*
    while(true)
    {
        
const currentYear=await page.$$('.ui-datepicker-year option')  
const currentmonth=await page.$$('.ui-datepicker-month option')
   for (let year of currentYear)
   {
      const Ye=await year.textContent()
      if(Ye.includes(tej))
      {
         await page.selectOption('//select[@class="ui-datepicker-year"]',Ye)
         break;

      }
   }

    }
   */

    const AA=await page.locator('//select[@class="ui-datepicker-month"]').textContent()
    const BB = await page.locator('//select[@class="ui-datepicker-year"]').textContent()
    
    if ( AA.includes(Yog))
    {
        await page.locator('//select[@class="ui-datepicker-month"]').selectOption({label:Yog})
    }

    if (BB.includes(tej))
    {
        await page.locator('//select[@class="ui-datepicker-year"]').selectOption({label:tej})
    }
 
    const CaptureDate = await page.$$('//a[@class="ui-state-default"]')

    for( let dt of CaptureDate)
    {
        const getdate= await dt.textContent()
        if (getdate == Date)
        {
             await dt.click()
        }
    }

    console.log('Script done')
     await page.pause()

     /*
  const CaptureDate=await page.$$('//a[@class="ui-state-default"]')

     for (let dt of CaptureDate)
     {
        const RecieveDate=await dt.textContent();

        if(RecieveDate == Date)
        {
           await dt.click();
        }
     }
   

     */
})
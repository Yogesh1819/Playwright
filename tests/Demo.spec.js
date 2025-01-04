const{test,expect}=require('@playwright/test')

test('Screenshot Test Case', async({page})=>
{
   await page.goto('https://www.flipkart.com/')

  // await page.screenshot({path:'Screenshot/abc.png'})
 //  await page.screenshot({path:'Screenshot/'+ Date.now()+'Full.png',fullPage:true})

   await page.locator('(//div[@class="zlQd20 _1eDlvI"])[1]').screenshot({path:'Screenshot/flip.png'})

})
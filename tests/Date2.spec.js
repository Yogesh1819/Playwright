import {test,expect} from '@playwright/test';

test('Handle Date', async({page})=>
{

    await page.goto('https://app.datainspiredliving.co.uk/')

    const Year='2022'
    const Month='Sep'
    const Date='19'

    await page.locator('//input[@name="username"]').fill('test1hccadmin1@arthtechltd.com')
    await page.locator('//input[@name="password"]').fill('Pass@123')
    await page.locator('//button[text()="Sign in"]').click();
    await page.locator("(//p[text()='Home'])[2]").click();
    await page.locator('//button[@class="MuiButtonBase-root MuiIconButton-root MuiIconButton-sizeMedium css-1zbqai"]').click();

    await page.locator('//input[@name="search"]').fill('Test12 Resident12')
    await page.locator('//button[@name="viewResident"]').click();

    await page.locator("//p[text()='activity']").click();
    await page.locator('(//button[@name="rangeSelector"])[1]').click();

    await page.locator('//div[@class="MuiPickersFadeTransitionGroup-root css-1bx5ylf"]').click();

   
    const FetchYear=await page.$$('//button[@class="PrivatePickersYear-yearButton css-14mbw78"]')
   
    for ( let Ye of FetchYear)
    {
        const GetYear=await Ye.textContent()
        if (GetYear == Year)
        {
            await Ye.click()
            break;
        }
    }
    const FetchMonth= await page.$$('//button[@class="MuiTypography-root MuiTypography-subtitle1 PrivatePickersMonth-root css-d7gysf"]')
    for ( let mon of FetchMonth)
    {
        const GetMonth=await mon.textContent()
        if ( GetMonth == Month)
        {
            await mon.click()
            break;
        }
    }

    const FetchDate= await page.$$('//button[@class="MuiButtonBase-root MuiPickersDay-root css-1x314s9"]')

    for (let dt of FetchDate)
    {
        const GetDate=await dt.textContent()
        if( GetDate == Date)
        {
            await dt.click()
            break;
        }
    }

    await page.pause();
    

    

})
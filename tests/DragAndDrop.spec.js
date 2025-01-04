const{test,expect}=require('@playwright/test')

test('Handle Drag And Drop', async({page})=>
{

    await page.goto('https://testautomationpractice.blogspot.com/')

    const Drag= page.locator('//div[@id="draggable"]')
    const Drop = await page.locator('//div[@id="droppable"]')


    await Drag.hover()
    await page.mouse.down()
    await Drop.hover()
    await page.mouse.up()

  //  await Drag.dragTo(Drop)

    await page.pause()
})
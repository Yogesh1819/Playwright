const{test,expect}=require('@playwright/test')

test('Test1@Sanity', async({page})=>
{
  console.log('This is sanity test case 1...')
})

test('Test2@Sanity', async({page})=>
    {
      console.log('This is sanity test case 2...')
    })

    test('Test3@Regression', async({page})=>
        {
          console.log('This is regression test case 1...')
        })

        test ('Test4@Sanity@Regression', async({page})=>
        {
         console.log('This is both sanity and regression test case')
        })

        test('Test5@Smoke', async({page})=>
        {
         console.log('This is smoke test case 1..')
        })

        test('Test6@Sanity@Regression@Smoke', async({page})=>
        {
         console.log('This is a combination of sanity smoke regression test case')
        })
import{test,expect}from '@playwright/test';
/*
test('Test case', async({page})=>
{
  console.log('This is Test case 1..')  
})

test.skip('Test Case 2', async({page})=>
{
  console.log('This is test case 2..')
})
*/

test('Test CAse 3', async({page,browserName})=>
{

  test.fixme()
   if (browserName=='firefox')
   {
    test.fail()
   }
   console.log('verifyong skip test case')
})
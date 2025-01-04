import{test,expect} from '@playwright/test';

test.beforeAll('Before All', async()=>
{
  console.log('Before All..')
})

test.afterAll('After All', async()=>
{
  console.log('After All...')
})


test.describe.only('Group1', async()=>
{

test('Test1',  async({page})=>
{
console.log('This is Test 1...')
})

test('Test2', async({page})=>
{
 console.log('This is Test 2..')
})

})



test.describe.skip('Group2', async()=>
{

    test('Test3', async({page})=>
    {
     console.log('This is Test 3..')
    })
})
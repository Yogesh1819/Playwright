const{test,expect}=require('@playwright/test')

var userid;
// Get the user list
test('GET', async({request})=>
{
  const response=await request.get('https://reqres.in/api/users?page=2')

   expect(response.status()).toBe(200)
  console.log( await response.json())
})

//Create the user and capture the id
test('POST', async({request})=>
{
const response=await request.post('https://reqres.in/api/users',
    {
        data:{"name":"Tejinkar","Job":"Test Engineer"},
        headers:{"Accept":"application/json"}
    }
)
expect(response.status()).toBe(201)
console.log(await response.json())
var res=await response.json()
userid=res.id
})

// Update the above created user
test('Update user PUT', async({request})=>
{
    const response=await request.put('https://reqres.in/api/users/'+userid,
        {
            data:{"name":"ABCD","Job":"Dev"},
            headers:{"Application":"application/json"}
        }
    )
    expect(response.status()).toBe(200)
    console.log(await response.json())
})

// Delete the above updated user
test('Delete the user DELETE', async({request})=>
{
    const response=await request.delete('https://reqres.in/api/users/'+userid)
     expect(response.status()).toBe(204)
})
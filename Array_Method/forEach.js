const arr=[1,23,5,6,6,7,8,9];

arr.forEach((num,index)=>{
    console.log("Number ",num," index ",index);
})

const users=[
    {firstName:"Rizwan",gender:"Male"},
    {firstName:"Tanvir",gender:"Male"},
    {firstName:"Tonmoy",gender:"Male"},
    {firstName:"Alif",gender:"Male"},
]
users.forEach((num)=>{
    console.log(num['firstName'])
})
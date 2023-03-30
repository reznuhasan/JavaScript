const arr=[1,3,4,6,7,8,9,10]

const sum=arr.reduce((accumlator,currentValue)=>{
    return accumlator+currentValue;
})
console.log(sum)
const users=[
    {firstName:"Rizwan",gender:"Male",age:20},
    {firstName:"Tanvir",gender:"Male",age:23},
    {firstName:"Tonmoy",gender:"Male",age:18},
    {firstName:"Alif",gender:"Male",age:30},
]
const sumOfAge=users.reduce((totalAge,user)=>{
    return totalAge+user.age;
},0)
console.log(sumOfAge)

const AddToCart=[
    {product:"Laptop",price:50000},
    {product:"Mobile",price:35000},
    {product:"smart watch",price:100000},
    {product:"ear phone",price:37000}
]
const totalPayment=AddToCart.reduce((totalPrice,product)=>{
    return totalPrice+product.price;
},0)
console.log(totalPayment)
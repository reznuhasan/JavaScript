const num=[1,2,3,4,5,6,7,8,9];

const totalSum=num.reduce((value,value1)=>value+value1)
console.log(totalSum)

const cart=[
    {name:'laptop',price:15000},
    {name:'Mobile',price:5000},
    {name:'Watch',price:2000},
    {name:'earphone',price:1000}
]
const totalPrice=cart.reduce((prevPrice,curPrice)=>prevPrice+curPrice.price,0)
console.log(totalPrice)
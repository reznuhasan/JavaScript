const arr=[45,65,24,67,21,50,1000,200,30]
console.log(arr.sort((a,b)=>b-a))
console.log(arr)
const AddToCart=[
    {product:"Laptop",price:50000},
    {product:"Mobile",price:35000},
    {product:"smart watch",price:100000},
    {product:"ear phone",price:37000}
]
AddToCart.sort((a,b)=>a.price-b.price)
console.log(AddToCart)
const shoppingCart=[
    {name:'shoe',price:1200,quantity:4},
    {name:'shirt',price:2200,quantity:2},
    {name:'pant',price:3700,quantity:3},
    {name:'belt',price:600,quantity:5}
]
let totalCost=0;
for(let p of shoppingCart){
    totalCost+=p.price*p.quantity
}
console.log(totalCost)
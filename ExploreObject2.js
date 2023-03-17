let Phone=[
    {id:1,name:'Nokia Phone',price:12000},
    {id:2,name:'Iphone',price:15000},
    {id:3,name:'mac book air',price:12000},
    {id:4,name:'Lenovo yoga laptop',price:12000},
    {id:5,name:'samsung phone',price:12000},
    {id:6,name:'Phone One',price:12000}
]
let findPhone=[]; 
let findLaptop=[];
for(let p of Phone){
    if(p.name.toLowerCase().includes('phone')){
        findPhone.push(p)
    }
    if(p.name.toLowerCase().includes('laptop')){
        findLaptop.push(p)
    }
}

console.log(findPhone)
console.log(findLaptop)
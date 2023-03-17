const Phone=[
    {Name:"Samsung",Price:20000,Model:'ABC'},
    {Name:"Iphone",Price:120000,Model:'14pro'},
    {Name:"Xiaomi",Price:10000,Model:'Note 9'},
    {Name:"Nokia",Price:60000,Model:'xyz'}
]

let CheapestPhone=[];
let cheap=Phone[0].Price;
for(let p of Phone){
    if(p.Price<cheap){  
        cheap=p.Price;
        CheapestPhone[0]=p;
    }
}
console.log(cheap)
console.log(CheapestPhone[0])

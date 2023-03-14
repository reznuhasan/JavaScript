let ticket=201;
let totalPrice=0;
let price=100;
for(let i=1;i<=ticket;i++){
    if(i>100){
        price=90;
    }
    if(i>200){
        price=70;
    }
    totalPrice+=price; 
}

console.log(totalPrice)
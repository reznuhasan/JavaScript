let ticket=201;
let totalPrice=0;
if(ticket>0 && ticket<=100){
    totalPrice=ticket*100;
}else if(ticket>100 && ticket<=200){
    totalPrice=(ticket-100)*90;
    totalPrice+=100*100;
}else if(ticket>200){
     totalPrice=(100*100)+(100*90)+((ticket-200)*70)
}
console.log(totalPrice)


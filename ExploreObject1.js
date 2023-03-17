const Student={
    name:"Sakib",
    id:121,
    address:"Movie",
    isSingle:true,
    friend:['Apu','Bubli','Alif','Sujon'],
    car:{
        brand:'tesla',
        price:500000,
        made:2025
    }
}
for(let p in Student.car){
    console.log(p);
}
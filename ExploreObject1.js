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
let value=Object.keys(Student.car);
console.log(value)
let Obj=Student.car;
for(let p in Obj){
    console.log(Obj[p]);
}
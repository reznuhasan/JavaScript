var num=[45,65,23,34,10];
function fun(value){
   return value*2
}
num=num.map(fun)
console.log(num)
var product={
    name:'laptop',
    price:1249,
    quantity:10
}
function obj(key,value){
    console.log(product[key]);
}
Object.keys(product).forEach(obj)
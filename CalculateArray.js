
let arr=[1,23,5,6,7,8,10];
let res=0;
for(let a of arr){
    // Sum Of Array
    res+=a;
}
console.log(res);
let oddSum =0;
for(let a of arr){
    // Sum Of Odd number in Array
    if(a%2!=0){
        oddSum+=a;
    }
    
}
console.log(oddSum)
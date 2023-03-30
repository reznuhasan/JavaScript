const arr=[1,2,3,6,4,8];
function evenNumber(num){
    return num%2==0;
}
const arr2=arr.filter(evenNumber)
console.log(arr2)
const arr3=arr.filter((num)=>num%2==0)
console.log(arr3)
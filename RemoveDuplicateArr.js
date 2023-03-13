

function removeDuplicate(arr){
        let res=[];
    for(let i=0;i<arr.length;i++){
        if(!res.includes(arr[i])){
            res.push(arr[i]);
        }
    }
    return res;
}
var arr=[23,56,23,78,56,89,78,56,90];
let result=removeDuplicate(arr);
console.log(result)
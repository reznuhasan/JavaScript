let num=8;
let fib=Array(9).fill(0);
fib[0]=0;
fib[1]=1;
for(let i=2;i<=8;i++){
    fib[i]=fib[i-1]+fib[i-2];
}
console.log(Math.floor(13.67))
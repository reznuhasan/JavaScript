let num=20;
if(num%4==0){
    if((num>=100) && (num%400==0)){
        console.log("400, Leap Year")
    }else if(num>=100 && num%100==0){
        console.log("100,Not Leap Year")
    }else{
        console.log("4,Leap Year");
    }
}else{
    console.log("Not Leap Year");
}
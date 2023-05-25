const processOrder=()=>{
    console.log('processing order for customer 1');
    const currentTime=new Date().getTime();
    setTimeout(()=>{
        console.log('cooking completed 1')
    },3000);
    setTimeout(()=>{
        console.log('cooking completed 2')
    },3000);
    setTimeout(()=>{
        console.log('cooking completed 3')
    },3000);
    console.log('order processed for customer 1')
}



console.log('take order for customer 1');
processOrder()
console.log('completed order for customer 1')
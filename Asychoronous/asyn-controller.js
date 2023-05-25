const takeOrder=(customer,callback)=>{
    console.log(`take order for customer ${customer}`);
    callback(customer)
}
const processOrder=(customer,callback)=>{
    console.log(`processing order for ${customer}`);
    const currentTime=new Date().getTime();
    setTimeout(()=>{
        console.log('cooking completed 1')
        console.log(`order processed for ${customer}`)
        callback(customer)
    },3000);
    
}

const completedOrder=(customer)=>{
    console.log(`order completed for  ${customer}`)
}

takeOrder('customer1',(customer)=>{
    processOrder(customer,(customer)=>{
        completedOrder(customer)
    })
})

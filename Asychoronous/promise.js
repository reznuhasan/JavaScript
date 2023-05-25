const hasMeeting=true

const meeting=new Promise((resolve,reject)=>{
    if(!hasMeeting){
        const newMeeting={
            name:'Technical Info',
            location:'zoom',
            time:'10pm'
        }
        resolve(newMeeting)
    }else{
        reject(new Error('Meeting already Scheduled'))
    }
})

meeting
.then(res=>console.log(JSON.stringify(res)))
.catch(err=>console.log(err.message))
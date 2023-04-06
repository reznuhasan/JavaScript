document.getElementById('btn').addEventListener('click',()=>{
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(response=>response.json())
    .then(data=>displayUser(data))
})
const displayUser=(users)=>{
    users.forEach((user)=>{
        const userContainer=document.getElementById('user-container')
        let show=document.createElement('div');
         show.innerHTML=`<p>Name: ${user.name} Email:${user.email} City:${user.address.city} </p>`
        userContainer.append(show)
    })
}
const loadRandom=()=>{
    fetch('https://randomuser.me/api/?gender=female')
    .then(res=>res.json())
    .then(data=>showData(data.results[0]))
}
const showData=(person)=>{
    const dis=document.getElementById('display')
    const name=document.createElement('h3')
    const email=document.createElement('h3')
    const img=document.createElement('img')
    img.src=`${person.picture.medium}`
    img.style.borderRadius='50%'
    img.style.margin='0 auto'
    name.innerText=`Name: ${person.name.first} ${person.name.last}`
    email.innerText=`Email: ${person.email}`
    console.log(person)
    dis.append(img)
    dis.append(name)
    dis.append(email)

}
loadRandom()
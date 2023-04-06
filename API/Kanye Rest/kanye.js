document.getElementById('btn').addEventListener('click',()=>{
    url='https://api.kanye.rest/';
    fetch(url)
    .then(res=>res.json())
    .then(data=>displayData(data))
})
const displayData=(quote)=>{
    const p=document.getElementById('para');
    p.innerText=`qoute:${quote.quote}`
}
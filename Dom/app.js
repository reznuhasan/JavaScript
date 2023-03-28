const li=document.getElementsByClassName('t1')
for(let l of li){
    l.style.listStyle='none'
    l.style.color='darkgreen'
    console.log(l.getAttribute('class'))
    console.log(l.getAttribute('id'))
}
const hello1=document.getElementById('hello1');
hello1.setAttribute('class','tata')
document.getElementById('btn').addEventListener('click',()=>{
    const url='https://jsonplaceholder.typicode.com/posts'
    fetch(url)
    .then(res=>res.json())
    .then(data=>displayData(data))
})
const displayData=(data)=>{
    data.forEach(post=>{
        const div=document.getElementById('display-post')
        let para=document.createElement('p');
        para.innerText=`title: ${post.title}`
        div.append(para)
    })
}
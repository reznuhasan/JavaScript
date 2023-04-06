fetch('https://jsonplaceholder.typicode.com/posts')
.then(res=>res.json())
.then(json=>{for(let p of json){
           console.log(p)
}})
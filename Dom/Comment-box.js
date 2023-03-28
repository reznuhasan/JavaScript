document.getElementById('btn').addEventListener('click',()=>{
    const commentText=document.getElementById('comment').value;
    document.getElementById('comment').value=''
    const p=document.createElement('p');
    p.innerText=commentText;
    const commentBox=document.getElementById('comment-container')
    commentBox.appendChild(p);
})
// const searchBox=document.getElementById('searchbox');
const searchBtn=document.getElementById('searchBtn')
searchBtn.addEventListener('click',()=>{
    const searchBox=document.getElementById('searchbox');
    const searchText=searchBox.value;
    searchBox.value='';
    loadPhone(searchText)
})

const loadPhone=async(searchText)=>{
    const spinnerBox=document.getElementById('spinner-box')
    spinnerBox.innerHTML=`
    <div class="spinner-border text-center text-primary" role="status">
    <span class="visually-hidden ">Loading...</span>
    </div>
    `
    const res= await fetch(`https://openapi.programming-hero.com/api/phones?search=${searchText}`)
    const data=await res.json();
    showData(data.data)
}
const showData=(phones)=>{
    const showBox=document.getElementById('showBox')
    showBox.innerHTML=``;
    if(phones.length===0){
        const div=document.createElement('div');
        div.innerHTML=`<h1>No Phone Found</h1>`
        div.style.width='100%'
        div.style.height='60vh'
        div.style.display='flex';
        div.style.alignItems='center';
        div.style.justifyContent='center';
        div.style.color='red';
        showBox.append(div);
    }else{
        phones.forEach(phone=>{
            const box=document.createElement('div');
            box.classList.add('col');
            box.innerHTML=`
            <div class="card h-100">
                    <img src="${phone.image}" width="300px" height="200px" class="card-img-top" alt="...">
                    <div class="card-body">
                      <h5 class="card-title">Name:${phone.phone_name}</h5>
                      <h5 >Brand:${phone.brand}</h5>
                      <h5>Slug:${phone.slug}</h5>
                    </div>
                    <div class="card-footer">
                    <button type="button" class="btn btn-primary details" id="details">Details</button>
                    </div>
            </div>
           `;
           showBox.append(box)
    
        })
        
    }
    const spinnerBox=document.getElementById('spinner-box')
    spinnerBox.innerHTML=``
    
}

{/* <div class="col">
              
            </div> */}


// loadPhone();
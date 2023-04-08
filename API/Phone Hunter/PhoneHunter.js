// const searchBox=document.getElementById('searchbox');
const searchBtn=document.getElementById('searchBtn')
searchBtn.addEventListener('click',()=>{
    const searchBox=document.getElementById('searchbox');
    const searchText=searchBox.value;
    searchBox.value='';
    loadPhone(searchText)
})

const loadPhone=async(searchText)=>{
    const res= await fetch(`https://openapi.programming-hero.com/api/phones?search=${searchText}`)
    const data=await res.json();
    showData(data.data)
}
const showData=(phones)=>{
    const showBox=document.getElementById('showBox')
    showBox.innerHTML=``;
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
       `
       showBox.append(box)

    })
}

{/* <div class="col">
              
            </div> */}


// loadPhone();
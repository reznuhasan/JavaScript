const loadContries=()=>{
    fetch('https://restcountries.com/v3.1/all')
    .then(res=>res.json())
    .then(data=>showCountries(data))
}
const showCountries=(countries)=>{
    console.log(countries[2])
    const all=document.getElementById('all-countries')
    all.innerHTML=`<h2>Total Countries:${countries.length}</h2>`
    const countriesDiv=document.createElement('div')
    countries.forEach(country=>{   
        
        const box=document.createElement('div')
        box.innerHTML=`
        <img src='${country.flags.png}'/>
        <h3>Country Name:${country.name.common}</h3>
        <h5>Population:${country.population}</h5>
        <h5>Continents:${country.continents[0]}</h5>
        <h5>Region:${country.region}</h5>
        <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal" onclick="showDetails('${country.name.common}')">
        Details
        </button>
        `
        countriesDiv.classList.add('countries')
        box.classList.add('box');
        countriesDiv.append(box)
    })
    all.append(countriesDiv)
}
const showDetails=async(name)=>{
    const url=`https://restcountries.com/v3.1/name/${name}`
    const res=await fetch(url);
    const data=await res.json();
    Details(data[0])
}
const Details=(data)=>{
    const content=document.getElementById('modal-content');
    content.innerHTML='';
    content.innerHTML=`
        <img src='${data.flags.png}'/>
        <h3>Country Name:${data.name.common}</h3>
        <h5>Population:${data.population}</h5>
        <h5>Continents:${data.continents[0]}</h5>
        <h5>Region:${data.region}</h5>
    `
}
loadContries()
const loadMeals=()=>{
    fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${'chicken'}`)
    .then(res=>res.json())
    .then(data=>console.log(data.meals))
}
loadMeals();
// const showMeals=(meals)=>{
//     const mainBox=document.getElementById('parent')
//     meals.forEach(meal=>{
//         const div=document.createElement('div')
//         div.classList.add('col')
//         div.innerHTML=`
//                    <div class="card h-100">
//                     <img src="${meal.strMealThumb}" class="card-img-top" alt="..." height="150px">
//                     <div class="card-body">
//                       <h5 class="card-title">${meal.strMeal}</h5>
//                       <p class="card-text">${meal.strInstructions.slice(0,150)}</p>
//                     </div>
//                     <div class="card-footer ">
//                     <div class="mx-auto p-2" style="width: 150px;"><button type="button" class="btn btn-primary" onclick="showItem('${meal.strMeal}')">Show Item</button></div>
//                     </div>
//                   </div>
//         `
//        mainBox.append(div)
//     })
// }
// const showItem=(name)=>{
//     fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${name}`)
//     .then(res=>res.json())
//     .then(data=>showSelectBox(data.meals[0]))
// }
// const showSelectBox=(meal)=>{
//     const box=document.getElementById('select-box')
//     box.innerHTML=`
//      <div class="card mx-auto" style="width: 18rem;">
//      <img src="${meal.strMealThumb}" class="card-img-top" alt="..." height="150px">
//      <div class="card-body">
//      <div class="card-body">
//      <h5 class="card-title">${meal.strMeal}</h5>
//      <p class="card-text">${meal.strInstructions.slice(0,150)}</p>
//    </div>
//      <div class="card-footer ">
//          <div class="mx-auto p-2" style="width: 150px;"><button type="button" class="btn btn-primary" onclick="showItem('${meal.strMeal}')">Show Item</button></div>
//      </div>
//     </div>
//     </div>
//     `
// }

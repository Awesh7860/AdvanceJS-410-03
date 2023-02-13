const userinput=document.getElementById("userinput")
const maincontainerlower=document.getElementById("maincontainerlower")

async function findmeal(params) {
    maincontainerlower.innerHTML=""
    const response=await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${userinput.value}`)
    const data=await response.json()
    data.meals.map((ele)=>{
        var image=ele.strMealThumb
        maincontainerlower.innerHTML+=`
        <div class="card">
            <img src="${image}" alt="" id="image">
        </div>
        `
     })
}
userinput.addEventListener("keyup",findmeal)
let urlParams = new URLSearchParams(window.location.search);

let mealId = urlParams.get("id")

let API = `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${mealId}`

let IMAGE_API = `https://www.themealdb.com/images/ingredients/`

async function getMeals(){
    try{
        const res = await fetch(API)
        const data = await res.json()

        console.log(data);
        showMeal(data.meals[0])
    }catch(error){
        console.log(error);
    }
}
getMeals()

let result = document.querySelector('.ingredients')

function showMeal(data) {
    let showUrl = ""
    for(let i = 0; i < 20; i++){
        const findUrl = data["strIngredient" +i]

        if(findUrl){
            showUrl += `
            <div class="product">
                    <img src="${IMAGE_API + findUrl}.png" alt="">
                    <h3>${findUrl}</h3>
                </div>
            `
        }
    }
    result.innerHTML = `
    <div class="content">
            <div class="content-h">
                <img src="https://upload.wikimedia.org/wikipedia/en/thumb/f/f3/Flag_of_Russia.svg/640px-Flag_of_Russia.svg.png" alt="">
                <h3>Strawberries Romanooff</h3>
            </div>
            <h3>Ingredients</h3>
        </div>
        <div class="ingredient">
            <div class="glass">
                <img src="${data.strMealThumb}" alt="">
                <div class="arrow">
                    <img src="https://www.themealdb.com/images/icons/Arrow-Left.png" alt="">
                    <img src="https://www.themealdb.com/images/icons/Arrow-Right.png" alt="">
                </div>
            </div>
            <div class="glasses">
            ${showUrl}
            </div>
        </div>
    `
}
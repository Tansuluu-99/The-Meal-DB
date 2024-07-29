let urlParams = new URLSearchParams(window.location.search);

let mealId = urlParams.get("id")

const flagUrl = 'https://www.themealdb.com/images/icons/flags/big/64/'

let API = `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${mealId}`
// www.themealdb.com/api/json/v1/1/lookup.php?i=52772
let IMAGE_API = `https://www.themealdb.com/images/ingredients/`


function setFlagImg(strArea){
    switch(strArea){
        case "Turkish": return 'tr';
        case "American": return 'us';
        case "Russian": return 'ru';
        case "Egyptian": return 'eg';
        case "British": return 'gb';
        case "Canadian": return 'ca';
        case "Chinese": return 'cn';
        case "Croatian": return 'hr';
        case "Dutch": return 'gb';
        case "Kyrgyz": return 'kg';
        case "Kazah": return 'kz';
        case "Filipino": return 'ph';
        case "Greek": return 'gr';
        case "India": return 'in';
        case "Irish": return 'ie';
        case "Italian": return 'it';
        case "Jamaican": return 'jm';
        case "Japanese": return 'jp';
        case "Kenyan": return 'kn';
        case "Malaysia": return 'my';
        case "Mexican": return 'mx';
        case "Maroccan": return 'ma';
        case "Polish": return 'pl';
        case "Portuguese": return 'pt';
        case "Spanish": return 'es';
        case "Thai": return 'th';
        case "Tunisian": return 'tn';
        case "Ukrainian": return 'ua';
        case "Unknown": return 'gb';
        case "Korea": return 'kr';
        case "Vietnamese": return 'vn';
        //
    }
}

// let aboutText = document.querySelector(".about-text") 

let p = document.querySelector(".about-p")
let video = document.querySelector("#video")



async function getMeals() {
    try {
        const res = await fetch(API)
        const data = await res.json()
        console.log(data)
        const { strYoutube } = data.meals[0]
        video.src = strYoutube.replace('watch?v=','embed/')
        showMeal(data.meals[0])
        p.textContent = data.meals[0].strInstructions
    } catch (error) {
        console.log(error);
    }
}
getMeals()
// strInstructions

let result = document.querySelector('.ingredients')

function showMeal(data) {
    let showUrl = ""
    for (let i = 0; i < 20; i++) {
        const findUrl = data["strIngredient" + i]

        if (findUrl) {
            showUrl += `
            <div onclick="setIn('${findUrl}')" class="product">
                    <img src="${IMAGE_API + findUrl}.png" alt="">
                    <h3>${findUrl}</h3>
                </div>
            `
        }
    }
    result.innerHTML = `
    <div class="content">
            <div class="content-h">
                <img src=${flagUrl + setFlagImg(data.strArea) + ".png"} alt="">
                <h3>${data.strMeal}</h3>
            </div>
            <h3>Ingredients</h3>
        </div>
        <div class="ingredient">
            <div class="glass">
                <img src="${data.strMealThumb}" alt="">
                <div class="arrow">
                    <img onclick="setId('prev')" src="https://www.themealdb.com/images/icons/Arrow-Left.png" alt="">
                    <img onclick="setId('next')" src="https://www.themealdb.com/images/icons/Arrow-Right.png" alt="">
                </div>
            </div>
            <div class="glasses">
            ${showUrl}
            </div>
        </div>
    `
}

function setIn(str) {
    window.location.href = `meat.html?str=${str}`;
}

function setId(text) {

    if (text == "next") {
        window.location.href = `ingredient.html?id=${parseInt(mealId) + 1}`
    } else {
        window.location.href = `ingredient.html?id=${parseInt(mealId) - 1}`
    }

}


let arrayLetters = [
    "a",
    "b",
    "c",
    "d",
    "e",
    "f",
    "g",
    "h",
    "i",
    "j",
    "k",
    "l",
    "m",
    "n",
    "o",
    "p",
    "q",
    "r",
    "s",
    "t",
    "u",
    "v",
    "w",
    "x",
    "y",
    "z",
];

let firstLetter = document.querySelector('.letter')

function setLetter(item) {
    window.location.href = `index.html?f=${item}`
}

firstLetter.innerHTML = arrayLetters.map((item) => {
    return `
    <a onclick="setLetter('${item}')" >${item}</a> /
    `;
}).join("");




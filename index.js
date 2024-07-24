let menuBtn = document.querySelector('.menu-burger')
let header = document.querySelector('.header')
let navRight = document.querySelector('.nav-right')

menuBtn.onclick = function(){
    if(header.style.height = "100px" ){
        header.style.height = "200px";
        navRight.style.display = "flex"

    }else{
        header.style.height = "100px"
        navRight.style.display = "none"
    }
}

let urlParams = new URLSearchParams(window.location.search);

let letter_name = urlParams.get("s")
let flag_name = urlParams.get("a")
let letter_onclick = urlParams.get("f")

let searchBy = "s"
let searchValue = "a"
let filter = "search"

if(letter_name){
    searchBy = "s"
    searchValue = letter_name;
    filter = "search"
}

if(flag_name){
    searchBy =  "a"
    searchValue = flag_name;
    filter = "filter"
}
if(letter_onclick){
  searchBy = "f"
  searchValue = letter_onclick;
  filter = "search"
}

let input = document.querySelector("#search")

document.addEventListener("keydown", (event) => {
    if(event.keyCode === 13){
        let letter = input.value
        window.location.href = `index.html?s=${letter}`
    }
})

const API = `https://www.themealdb.com/api/json/v1/1/${filter}.php?${searchBy}=${searchValue}`

let allMeals = document.querySelector('.meals');

async function getMeals() {
    try{
        const res = await fetch (API);
        const data = await res.json();
        console.log(data);
        showProduct(data.meals)
    }catch(error){
        console.log(error);
    }
}
getMeals();

function showProduct(data){
    allMeals.innerHTML = data.map((item) => {
        return`
        <div onclick="goToMealId('${item.idMeal}')" class="meals-menu">
            <img src="${item.strMealThumb}" alt="">
            <h1>${item.strMeal}</h1>
         </div>
        `
    }) .join("");
}

function goToMealId(id){
  window.location.href = `ingredient.html?id=${id}`
}

let get_flags = document.querySelector(".flags")



let  flags = 
[
  {
    strArea: "American",
    item: "us",
  },
  {
    strArea: "British",
    item: "gb",
  },
  {
    strArea: "Canadian",
    item: "ca",
  },
  {
    strArea: "Chinese",
    item: "cn",
  },
  {
    strArea: "Croatian",
    item: "hr",
  },
  {
    strArea: "Dutch",
    item: "gb",
  },
  {
    strArea: "Egyptian",
    item: "eg",
  },
  {
    strArea:"Kyrgyz",
    item: "kg",
  },
{
    strArea:"Kazah",
    item:"kz"
},
  {
    strArea: "Filipino",
    item: "ph",
  },
  {
    strArea: "French",
    item: "fr",
  },
  {
    strArea: "Greek",
    item: "gr",
  },
  {
    strArea: "Indian",
    item: "in",
  },
  {
    strArea: "Irish",
    item: "ie",
  },
  {
    strArea: "Italian",
    item: "it",
  },
  {
    strArea: "Jamaican",
    item: "jm",
  },
  {
    strArea: "Japanese",
    item: "jp",
  },
  {
    strArea: "Kenyan",
    item: "kn",
  },
  {
    strArea: "Malaysian",
    item: "my",
  },
  {
    strArea: "Mexican",
    item: "mx",
  },
  {
    strArea: "Moroccan",
    item: "ma",
  },
  {
    strArea: "Polish",
    item: "pl",
  },
  {
    strArea: "Portuguese",
    item: "pt",
  },
  {
    strArea: "Russian",
    item: "ru",
  },
  {
    strArea: "Spanish",
    item: "es",
  },
  {
    strArea: "Thai",
    item: "th",
  },
  {
    strArea: "Tunisian",
    item: "tn",
  },
  {
    strArea: "Turkish",
    item: "tr",
  },
  {
    strArea: "Ukrainian",
    item: "ua",
  },
  {
    strArea: "Unknown",
    item: "gb",
  },
  {
    strArea: "Korea",
    item: "kr",
  },
  {
    strArea: "Vietnamese",
    item: "vn",
  },]

  get_flags.innerHTML = flags.map((x) => {
    return`
    <img onclick="setFlag('${x.strArea}')" src="https://www.themealdb.com/images/icons/flags/big/64/${x.item}.png" alt="">
    `;
}).join("");


function setFlag(item){
    window.location.href = `index.html?a=${item}`
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

function setLetter(item){
  window.location.href = `index.html?f=${item}`
}

firstLetter.innerHTML = arrayLetters.map((item) => {
  return`
  <a onclick="setLetter('${item}')" >${item}</a> /
  `;
}).join("");

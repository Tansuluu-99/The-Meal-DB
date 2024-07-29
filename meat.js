let urlParams = new URLSearchParams(window.location.search);
let str_name = urlParams.get("str");

let API = `https://www.themealdb.com/api/json/v1/1/filter.php?i=${str_name}`;
let IMAGE_API = `https://www.themealdb.com/images/ingredients/${str_name}.png`;

let mainImage = document.querySelector(".main-image");
mainImage.innerHTML = `<img src="${IMAGE_API}" />`;

async function getIn() {
    try {
        const res = await fetch(API);
        const data = await res.json();
        console.log(data);
        showIn(data.meals);
    } catch (error) {
        console.log(error);
    }
}

getIn();

let right = document.querySelector(".meat01");

function showIn(data) {
    right.innerHTML = data.map((item) => {
        return `
        <div onclick="setIn('${item.idMeal}')" class="meat4"> 
            <img src="${item.strMealThumb}" alt=""> 
            <p>${item.strMeal}</p> 
        </div>`;
    }).join("");
}

function setIn(id) {
    window.location.href = `ingredient.html?id=${id}`;
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


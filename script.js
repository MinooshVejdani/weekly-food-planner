const foodInput = document.getElementById('foodInput');
const addButton = document.getElementById('addButton');
const foodList = document.getElementById('foodList');
const clearListButton = document.getElementById('clearListButton');

let foods = [];

window.addEventListener('load', loadFromLocalStorage);
addButton.addEventListener('click', getFood);
clearListButton.addEventListener('click', clearList);

function loadFromLocalStorage() {
  foods = JSON.parse(localStorage.getItem('foodItems'));
  display();
}

function saveToLocalStorage() {
  localStorage.setItem('foodItems', JSON.stringify(foods));
}

class Food {
  constructor(name, ingredients) {
    this.id = ++Food.idCounter;
    this.name = name;
    this.ingredients = ingredients;
  }
  
  editIngredients(){
    const inputIngredient = document.createElement('input');
    input.type = text;
    input.value = ingredient;
    return input;
  }

  createEditButton(ingredient) {
    const button = document.createElement('button');
    button.innerHTML = `Edit ${ingredient}`;
    button.addEventListener("click", () => {
      this.editIngredients(ingredient);
    });
  }
  //render all ingredients as editable input field 


  //create a "done" button to save the edit

 
}

function getFood() {
  const inputValue = foodInput.value.trim();
  if(inputValue !== '') {
    foods.push(inputValue);
    //call saveToLocalStorage()
    saveToLocalStorage();
    foodInput.value = '';
  } else {
    alert("please type your food!");
  }
  display();
}

function clearList() {
  foods = [];
  saveToLocalStorage();
  display();
}

function removeFood() {
  for(let i = 0; i < foods.length; i++) {
    if()
  }
  //call saveToLocalFood
  saveToLocalStorage();
  display();
}

function editFood() {

//call saveToLocalFood
saveToLocalStorage();
display();
}

function addIngredients() {

  //call saveToLocalFood
  saveToLocalStorage();
  display();
}

function display() {
  foodList.innerHTML = '';
  for(let i = 0; i < foods.length; i++) {
    const foodItem = document.createElement('li');
    foodItem.textContent = foods[i];
    foodList.appendChild(foodItem);
  }
}


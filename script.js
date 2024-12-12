const foodInput = document.getElementById('foodInput');
const addButton = document.getElementById('addButton');
const foodList = document.getElementById('foodList');

let foods = [];

window.addEventListener('load', loadFromLocalStorage);
addButton.addEventListener('click', getFood);

function loadFromLocalStorage() {
  return JSON.parse(localStorage.getItem('foodItems'));
}

function saveToLocalStorage() {
  localStorage.setItem('foodItems', JSON.stringify(foods));
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
  update();
}

function removeFood() {

  //call saveToLocalFood
  saveToLocalStorage();
}

function editFood() {

//call saveToLocalFood
saveToLocalStorage();
}

function addIngredients() {

  //call saveToLocalFood
  saveToLocalStorage();
}

function display() {
  for(let i = 0; i < foods.length; i++) {
    const foodItem = document.createElement('li');
    foodItem.textContent = foods[i];
    foodList.appendChild(foodItem);
  }
}

function update() {
  //remove previous
  document.querySelector('ul').innerHTML = '';
  //call display()
  display();
}
const foodInput = document.getElementById('foodInput');
const addButton = document.getElementById('addButton');
const foodList = document.getElementById('foodList');

let foods = [];

function updateFoodsArray(inputValue) {
  foods.push(inputValue);
  // Save the updated list to localStorage
  const currentList = Array.from(foodList.children).map(item => item.textContent);
  localStorage.setItem('foodList', JSON.stringify(currentList));
  foodInput.value = '';
  displayFoodsArray(foods);
}

function displayFoodsArray(foods) {
  foodList.innerHTML = "";
  for(let i = 0; i < foods.length; i++){
    const listItem = document.createElement('li');
    listItem.textContent = foods[i];
    foodList.appendChild(listItem);
  }
}

// Load the list from localStorage on page load
window.addEventListener('load', function() {
    const savedList = JSON.parse(localStorage.getItem('foodList'));

    if (savedList) {
        displayFoodsArray(savedList);
    }
});

// Add new item to the list and save to localStorage
addButton.addEventListener('click', function() {
  inputValue = foodInput.value.trim();
  
  if(inputValue !== '') {
    updateFoodsArray(inputValue);
  } else {
    alert('Please type a food name!');
  }
});          
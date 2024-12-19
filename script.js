const foodInput = document.getElementById('foodInput');
const addFoodButton = document.getElementById('addFoodButton');
const foodList = document.getElementById('foodList');
const clearListButton = document.getElementById('clearListButton');

let foods = [];

window.addEventListener('load', loadFromLocalStorage);

addFoodButton.addEventListener('click', () => {
  const inputValue = foodInput.value.trim();
  if(inputValue !== ''){
    getFood(inputValue);

    foodInput.value = '';
  } else {
    alert("please type your food!");
  }
  display();
});

clearListButton.addEventListener('click', clearList);

function loadFromLocalStorage() {
  foods = JSON.parse(localStorage.getItem('foodItems'));
  display();
}

function saveToLocalStorage() {
  localStorage.setItem('foodItems', JSON.stringify(foods));
}

class Food {
  constructor(name) {
    this.name = name;
    this.ingredients = [];
  }
  addIngredient () {
    for (let i = 0; i < foods.length; i++) {
      
  }
  SaveIngredients() {

  }
  removeIngredient() {

  }

  editIngredients() {

  }
}

function getFood(inputValue) {
  let food = new Food(inputValue);
  food.ingredients = [];
  foods.push(food);
  saveToLocalStorage();
}

function clearList() {
  foods = [];
  saveToLocalStorage();
  display();
}

function createButton(buttonLabel, buttonClass, buttonId){
  const button= document.createElement('button');
  button.textContent = buttonLabel;
  button.classList.add(buttonClass);
  button.id = buttonId;
  return button;
}

function createInputField(inputFieldClass){
  const inputField = document.createElement('input');
  inputField.classList.add(inputFieldClass);
  return inputField;
}

const buttonToFoodItemMap = new Map();

function display() {
  foodList.innerHTML = '';
  for (let i = 0; i < foods.length; i++) {
    const foodItem = document.createElement('li'); 
    const foodName = foods[i].name;

    let ingredientsLength = foods[i].ingredients.length;
    if (ingredientsLength > 0) {
      let ingredientsText = '';
      for (let j = 0; j < ingredientsLength; j++) {
        ingredientsText += ' ' + foods[i].ingredients[j];
      }
      foodItem.textContent = foodName + ingredientsText;

      const editIngredientsButton = createButton(
        'Edit Ingredients',
        'edit-ingr-button',
        `editIngrButton${i}`
      );
      foodItem.appendChild(editIngredientsButton);
    } else {
      foodItem.textContent = foodName;

      const ingrInput = createInputField('ingredient-input');
      foodItem.appendChild(ingrInput);

      const addIngrButton = createButton(
        'Add More Ingredients',
        'ingr-button',
        `ingrButton${i}`
      );
      addIngrButton.addEventListener('click', function () {
        const ingrInput = createInputField('ingredient-input');
        foodItem.appendChild(ingrInput);
      });
      foodItem.appendChild(addIngrButton);
    }

    const buttonDone = createButton('Done', 'done-button', foodName);

    // Map the button to its related foodItem
    buttonToFoodItemMap.set(buttonDone, foodItem);

    buttonDone.addEventListener('click', function () {
      foods[i].ingredients =[];

      const relatedFoodItem = buttonToFoodItemMap.get(buttonDone); // Retrieve the associated foodItem
      const allIngredientsInputs = relatedFoodItem.querySelectorAll('input');
      
      allIngredientsInputs.forEach((input) => {
        const value = input.value.trim();
        if(value) {
          foods[i].ingredients.push(value);
        }
      });
      saveToLocalStorage();
      display();
      console.log('Updated ingredients:', foods[i].ingredients);
    });

    foodItem.appendChild(buttonDone);
    foodList.appendChild(foodItem);

    const removeFoodButton = createButton('Remove', 'remove-food-button', foods[i].name);
    foodItem.appendChild(removeFoodButton);
    removeFoodButton.addEventListener('click', function(){
      foods.splice(i, 1);
      saveToLocalStorage();
      display();
      });
  }
}





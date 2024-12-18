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
  // static property to track the counter across all instances
  static idCounter = 0;

  constructor(name) {
    this.id = ++Food.idCounter;
    this.name = name;
    this.ingredients = [];
  }
  
  //editIngredients(){
  //  const inputIngredient = document.createElement('input');
   // input.type = text;
    //input.value = ingredient;
  //  return input;
  //}

  //createEditButton(ingredient) {
   // const button = document.createElement('button');
   // button.innerHTML = `Edit ${ingredient}`;
    //button.addEventListener("click", () => {
    //  this.editIngredients(ingredient);
    //});
  //}
  //render all ingredients as editable input field 


  //create a "done" button to save the edit

 
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

//function removeFood() {
 // for(let i = 0; i < foods.length; i++) {
 //   if()
  //}
  //call saveToLocalFood
  //saveToLocalStorage();
 // display();
//}

function editFood() {

//call saveToLocalFood
saveToLocalStorage();
display();
}

// adds button to each food for adding ingredients
//function addIngredientButton() {
    //const buttonIngr = document.createElement('button');
    //buttonIngr.textContent = 'add ingredients';
    //buttonIngr.classList.add('ingr-button');
    //return buttonIngr;
//}

// gets each ingredient from the inputfield 
function getIngredients() {
  
  //call saveToLocalFood
  saveToLocalStorage();
  display();
} 

// adds an input that the user can input an ingredients in
function addIngredientInput() {

}


//foods = ['kabab', 'polo', 'borani']
//foods = [(kabab, [meat, onion, spice]), (polo, []), (borani, [])]

function display() {
  foodList.innerHTML = '';
  for(let i = 0; i < foods.length; i++) {
    const foodItem = document.createElement('li');
    
    const buttonIngr = document.createElement('button');
    buttonIngr.textContent = 'Add more ingredients';
    buttonIngr.classList.add('ingr-button');

    buttonIngr.addEventListener('click', function() {
      const ingrInput = document.createElement('input');
      ingrInput.classList.add('ingredient-input');
      foodItem.appendChild(ingrInput);
    });

    const buttonDone = document.createElement('button');
    buttonDone.textContent = 'Done';
    buttonDone.classList.add('done-button');

    buttonDone.addEventListener('click', function() {

   });
    
    const ingrInput = document.createElement('input');
    
   let ingredientsText = "";
   for(let j = 0; j < foods[i].ingredients.length; j++){
     ingredientsText +=  " " + foods[i].ingredients[j]
   }
    
    foodItem.textContent = foods[i].name + ingredientsText;
    foodItem.appendChild(ingrInput);
    foodItem.appendChild(buttonIngr);
    foodItem.appendChild(buttonDone);
    
    foodList.appendChild(foodItem);

  }
}


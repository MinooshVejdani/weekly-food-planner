const foodInput = document.getElementById('foodInput');
const addButton = document.getElementById('addButton');
const foodList = document.getElementById('foodList');

// Load the list from localStorage on page load
window.addEventListener('load', function() {
    const savedList = JSON.parse(localStorage.getItem('foodList'));

    if (savedList) {
        savedList.forEach(item => {
            const listItem = document.createElement('li');
            listItem.textContent = item;
            foodList.appendChild(listItem);
        });
    }
});

// Add new item to the list and save to localStorage
addButton.addEventListener('click', function() {
    event.preventDefault();
  const inputValue = foodInput.value.trim();
if(inputValue !== '') {
  const listItem = document.createElement('li');
  listItem.textContent = inputValue;
  foodList.appendChild(listItem);


  // Save the updated list to localStorage
  const currentList = Array.from(foodList.children).map(item => item.textContent);
    localStorage.setItem('foodList', JSON.stringify(currentList));
    
  foodInput.value = '';
} else {
  alert('Please type a food name!');
}
});          
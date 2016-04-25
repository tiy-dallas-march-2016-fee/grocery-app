'use strict';
if (this.MyGroceries === undefined) this.MyGroceries = {};

(function(context) {

  var groceryItems = [
    { name: 'milk', category: 'food', amount: 26, price: 3.25 },
    { name: 'ribeye', category: 'food', amount: 7, price: 12 },
    { name: 'bottled water (6-pack)', category: 'food', amount: 30, price: 2 },
    { name: 'toilet paper', category: 'paper goods', amount: 15, price: 4 },
    { name: 'paper plates', category: 'paper goods', amount: 20, price: 2 },
    { name: 'pringles', category: 'food', amount: 8, price: 1 },
    { name: 'shredded cheddar', category: 'food', amount: 6, price: 2.68 },
    { name: 'apples', category: 'food', amount: 42, price: .79 },
    { name: 'mustard', category: 'food', amount: 3, price: 2.99 },
    { name: 'Dr Pepper (2-liter)', category: 'food', amount: 100, price: 0.99 },
    { name: 'Dos Equis', category: 'alcohol', amount: 3, price: 16 },
    { name: 'dishwashing detergent', category: 'miscellaneous', amount: 5, price: 4 },
    { name: 'Juicy Fruit', category: 'food', amount: 20, price: .99 },
    { name: 'plastic bouncy ball', category: 'miscellaneous', amount: 7, price: 0.89 },
    { name: 'napkins', category: 'paper goods', amount: 25, price: 1.50 },
    { name: 'chap stick', category: 'miscellaneous', amount: 4, price: 0.99 },
    { name: 'yogurt', category: 'food', amount: 9, price: 2 },
    { name: 'eggs', category: 'food', amount: 2, price: 2 },
    { name: 'Guiness', category: 'alcohol', amount: 6, price: 17 },
    { name: 'bananas', category: 'food', amount: 26, price: .59 },
    { name: 'ketchup', category: 'food', amount: 1, price: 5 },
    { name: 'plastic forks', category: 'paper goods', amount: 5, price: 2 },
    { name: 'Taylor Swift, 1989', category: 'miscellaneous', amount: 3, price: 16.99 },
  ];

  var groceryItemsUL;
  var queryInput;
  var header;
  var nameInput;
  var priceInput;
  var amountInput;
  var categoryInput;

  function listBuilderConstructor(data) {

    for (var item of data) {
      createListItem(item);
    }
  }

  function createListItem(inventoryItem) {
    var li = document.createElement('li');

    var itemNameDiv = document.createElement('div');
    itemNameDiv.classList.add('item-name');
    itemNameDiv.textContent = inventoryItem.name;
    li.appendChild(itemNameDiv);

    var extraInfoDiv = document.createElement('div');
    extraInfoDiv.classList.add('extra-info');
    extraInfoDiv.textContent = 'in-stock: ' + inventoryItem.amount + '; cost: $' + inventoryItem.price.toFixed(2);
    li.appendChild(extraInfoDiv);

    groceryItemsUL.appendChild(li);
  }

  function keyUpped() {
    var value = queryInput.value;

    var filteredList = [];
    for (var item of groceryItems) {
      if (item.name.indexOf(value) !== -1) {
        filteredList.push(item);
      }
    }

    groceryItemsUL.innerHTML = '';
    listBuilderConstructor(filteredList);
  }

  function scrolled() {
    if (window.pageYOffset >= 80) {
      header.classList.add('small-header');
    }
    else {
      header.classList.remove('small-header');
    }
  }

  function addClicked() {
    var name = nameInput.value;
    var price = priceInput.value;
    var amount = amountInput.value;
    var category = categoryInput.value;

    nameInput.value = '';
    priceInput.value = '';
    amountInput.value = '';
    categoryInput.value = '';

    var obj = {
      name: name,
      category: category,
      price: Number(price),
      amount: Number(amount)
    };

    groceryItems.push(obj);
    listBuilderConstructor(groceryItems);
  }


  function start() {
    //find my elements
    groceryItemsUL = document.querySelector('#grocery-items')
    queryInput = document.querySelector('#query');
    header = document.querySelector('.main-header');

    var addButton = document.querySelector('#add');
    nameInput = document.querySelector('#name-input');
    priceInput = document.querySelector('#price-input');
    amountInput = document.querySelector('#amount-input');
    categoryInput = document.querySelector('#category-input');

    //build initial list
    listBuilderConstructor(groceryItems);

    //events
    queryInput.addEventListener('keyup', keyUpped);
    window.addEventListener('scroll', scrolled);
    addButton.addEventListener('click', addClicked);
  }

  window.MyGroceries.start = start;

})(window.MyGroceries);

/*








*/

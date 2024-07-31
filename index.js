let shoppingList = JSON.parse(localStorage.getItem('shoppingList')) || [];

const inputItem = document.getElementById('inputItem');
const btnAdd = document.getElementById('btnAdd');
const listItems = document.getElementById('listItems');
const btnClear = document.getElementById('btnClear');

function renderList() {
  listItems.innerHTML = '';
  shoppingList.forEach((item, index) => {
    const listItem = document.createElement('li');
    listItem.textContent = item.name;
    listItem.classList.toggle('bought', item.bought);
    listItem.dataset.index = index;

    listItem.addEventListener('click', () => {
      shoppingList[index].bought = !shoppingList[index].bought;
      saveList();
      renderList();
    });

    listItem.addEventListener('dblclick', () => editItem(index));

    listItems.appendChild(listItem);
  });
}

function saveList() {
  localStorage.setItem('shoppingList', JSON.stringify(shoppingList));
}

function addItem() {
  const newItem = inputItem.value.trim();
  if (newItem) {
    shoppingList.push({ name: newItem, bought: false });
    saveList();
    renderList();
    inputItem.value = '';
  }
}

function editItem(index) {
  const newName = prompt('Edit item:', shoppingList[index].name);
  if (newName !== null) {
    shoppingList[index].name = newName;
    saveList();
    renderList();
  }
}

function clearList() {
  if (confirm('Are you sure you want to clear the list?')) {
    shoppingList = [];
    saveList();
    renderList();
  }
}

btnAdd.addEventListener('click', addItem);
btnClear.addEventListener('click', clearList);
window.addEventListener('load', renderList);

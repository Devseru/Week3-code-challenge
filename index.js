const inputItem = document.getElementById('inputItem');
const btnAdd = document.getElementById('btnAdd');
const listItems = document.getElementById('listItems');
const btnClear = document.getElementById('btnClear');

btnAdd.addEventListener('click', () => {
  const newItem = inputItem.value.trim();
  if (newItem) {
    const listItem = document.createElement('li');
    listItem.textContent = newItem;

    listItem.addEventListener('click', () => {
      listItem.classList.toggle('bought');
    });

    listItems.appendChild(listItem);
    inputItem.value = ''; 
  }
});

btnClear.addEventListener('click', () => {
  listItems.innerHTML = '';
});

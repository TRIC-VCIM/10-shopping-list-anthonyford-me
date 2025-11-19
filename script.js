const itemForm = document.getElementById('item-form');
const itemList = document.getElementById('item-list');
const itemInput = document.getElementById('item-input');
const itemClear = document.getElementById('btn-clear');
const itemFilter = document.getElementById('filter');


function addItem(e) {
    e.preventDefault();

    const newItemText = itemInput.value;

    if (newItem === '') {
        alert('Pls Enter an item.');
        return;
    }   

    const li = document.createElement('li');
    li.appendChild(document.createTextNode(newItemText));

    const button = document.createElement('remove-item btn-link text-red');
    li.appendChild(button);

    itemList.appendChild(li);
    itemInput.value = '';
}

function createButton(classes) {
    const button = document.createElement('button');
    button.className = classes;
    const icon = createIcon ('fa-solid fa-xmark');
    button.appendChild(icon);
    return button;
}
function filterItems(e) {
    const filterText = e.target.value.toLowerCase();
    const items = itemList.querySelectorAll('li');

    items.forEach(item => {
        const itemName = item.firstChild.textContent.toLowerCase();
        if (itemName.includes(filterText)) {
            item.style.display = 'flex'; // or 'block'
        } else {
            item.style.display = 'none';
        }
function createIcon(classes) {
    const icon = document.createElement('i');
    icon.className = classes;
    return icon;
}


function removeItem(e) {
    if (e.target.parentElement.classList.contains('remove-item')) {
        if (confirm('Are you sure?')) {
       e.target.parentElement.parentElement.remove();
    }

    function itemClear() {
        while (itemList.firstChild) {
            itemList.removeChild(itemList.firstChild);
        checkUI();
        }

function checkUI () {
    const items = itemList.querySelectorAll('li');
    if (items.length === 0) {
        itemClear.style.display = 'none';
        itemFilter.style.display = 'none';
    } else {
        itemClear.style.display = 'block';
        itemFilter.style.display = 'block';
    } 

itemForm.addEventListener('submit', addItem);
itemList.addEventListener('click', removeItem);
itemClear.addEventListener('click', clearItems); 
itemFilter.addEventListener('input', filterItems);
checkUI();
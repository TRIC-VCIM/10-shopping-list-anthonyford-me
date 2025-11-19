const itemForm = document.getElementById('item-form');
const itemList = document.getElementById('item-list');
const itemInput = document.getElementById('item-input');

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

function createIcon(classes) {
    const icon = document.createElement('i');
    icon.className = classes;
    return icon;
}

itemForm.addEventListener('submit', addItem);
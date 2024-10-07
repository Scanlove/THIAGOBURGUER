let inventory = JSON.parse(localStorage.getItem('inventory')) || [];

function saveInventory() {
    localStorage.setItem('inventory', JSON.stringify(inventory));
}

function addProduct() {
    const name = document.getElementById('productName').value;
    const quantity = parseInt(document.getElementById('productQuantity').value);
    const price = parseFloat(document.getElementById('productPrice').value);
    
    if (name && quantity > 0 && price > 0) {
        inventory.push({ name, quantity, price });
        saveInventory();
        renderInventory();
        document.getElementById('productName').value = '';
        document.getElementById('productQuantity').value = '';
        document.getElementById('productPrice').value = '';
    } else {
        alert('Por favor, completa todos los campos correctamente.');
    }
}

function renderInventory() {
    const tableBody = document.querySelector('#inventoryTable tbody');
    tableBody.innerHTML = '';
    inventory.forEach((product, index) => {
        const row = document.createElement('tr');
        row.innerHTML = `
            <td>${product.name}</td>
            <td>${product.quantity}</td>
            <td>${product.price.toFixed(2)}</td>
            <td>
                <button onclick="deleteProduct(${index})">Eliminar</button>
                <button onclick="editProduct(${index})">Editar</button>
            </td>
        `;
        tableBody.appendChild(row);
    });
}

function deleteProduct(index) {
    inventory.splice(index, 1);
    saveInventory();
    renderInventory();
}

function editProduct(index) {
    const product = inventory[index];
    document.getElementById('productName').value = product.name;
    document.getElementById('productQuantity').value = product.quantity;
    document.getElementById('productPrice').value = product.price;
    inventory.splice(index, 1);
    saveInventory();
    renderInventory();
}

document.addEventListener('DOMContentLoaded', () => {
    renderInventory();
});

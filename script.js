let inventory = [];
let sales = [];
let purchases = [];

function showSection(sectionId) {
    document.querySelectorAll('.section').forEach(section => {
        section.classList.remove('active');
    });
    document.getElementById(sectionId).classList.add('active');
}

function addProduct() {
    const name = document.getElementById('productName').value;
    const quantity = parseInt(document.getElementById('productQuantity').value);
    const price = parseFloat(document.getElementById('productPrice').value);
    
    inventory.push({ name, quantity, price });
    renderInventory();
    updateSaleOptions();
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

function recordSale() {
    const productIndex = document.getElementById('saleProduct').value;
    const quantitySold = parseInt(document.getElementById('saleQuantity').value);
    const product = inventory[productIndex];
    
    if (product && quantitySold > 0 && quantitySold <= product.quantity) {
        product.quantity -= quantitySold;
        const totalSale = quantitySold * product.price;
        sales.push({ name: product.name, quantity: quantitySold, total: totalSale });
        renderInventory();
    }
}

function recordPurchase() {
    const name = document.getElementById('purchaseProduct').value;
    const quantity = parseInt(document.getElementById('purchaseQuantity').value);
    const price = parseFloat(document.getElementById('purchasePrice').value);
    
    purchases.push({ name, quantity, price });
    inventory.push({ name, quantity, price });
    renderInventory();
}

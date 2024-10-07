let inventory = JSON.parse(localStorage.getItem('inventory')) || [];
let sales = JSON.parse(localStorage.getItem('sales')) || [];
let purchases = JSON.parse(localStorage.getItem('purchases')) || [];

function saveData() {
    localStorage.setItem('inventory', JSON.stringify(inventory));
    localStorage.setItem('sales', JSON.stringify(sales));
    localStorage.setItem('purchases', JSON.stringify(purchases));
}

function addProduct() {
    const name = document.getElementById('productName').value;
    const quantity = parseInt(document.getElementById('productQuantity').value);
    const price = parseFloat(document.getElementById('productPrice').value);
    
    if (name && quantity > 0 && price > 0) {
        inventory.push({ name, quantity, price });
        saveData();
        renderInventory();
        updateSaleOptions();
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
    saveData();
    renderInventory();
    updateSaleOptions();
}

function recordSale() {
    const productIndex = document.getElementById('saleProduct').value;
    const quantitySold = parseInt(document.getElementById('saleQuantity').value);
    const product = inventory[productIndex];
    
    if (product && quantitySold > 0 && quantitySold <= product.quantity) {
        product.quantity -= quantitySold;
        const totalSale = quantitySold * product.price;
        sales.push({ name: product.name, quantity: quantitySold, total: totalSale });
        saveData();
        renderInventory();
        updateSaleOptions();
        alert(`Venta registrada: ${quantitySold} x ${product.name} por $${totalSale.toFixed(2)}`);
    } else {
        alert('Cantidad inválida o producto no disponible.');
    }
    document.getElementById('saleQuantity').value = '';
}

function recordPurchase() {
    const name = document.getElementById('purchaseProduct').value;
    const quantity = parseInt(document.getElementById('purchaseQuantity').value);
    const price = parseFloat(document.getElementById('purchasePrice').value);
    
    if (name && quantity > 0 && price > 0) {
        inventory.push({ name, quantity, price });
        purchases.push({ name, quantity, price });
        saveData();
        renderInventory();
        updateSaleOptions();
        alert(`Compra registrada: ${quantity} x ${name} por $${(quantity * price).toFixed(2)}`);
    } else {
        alert('Por favor, completa todos los campos correctamente.');
    }
    document.getElementById('purchaseProduct').value = '';
    document.getElementById('purchaseQuantity').value = '';
    document.getElementById('purchasePrice').value = '';
}

function generateReport() {
    const totalSales = sales.reduce((sum, sale) => sum + sale.total, 0);
    const totalProductsSold = sales.reduce((sum, sale) => sum + sale.quantity, 0);
    const reportContent = document.getElementById('reportContent');
    reportContent.innerHTML = `
        <p>Total de ventas: $${totalSales.toFixed(2)}</p>
        <p>Cantidad total de productos vendidos: ${totalProductsSold}</p>
    `;
    
    const salesHistory = document.getElementById('salesHistory');
    salesHistory.innerHTML = '<h3>Historial de Ventas</h3>';
    sales.forEach(sale => {
        salesHistory.innerHTML += `<p>${sale.quantity} x ${sale.name} = $${sale.total.toFixed(2)}</p>`;
    });
}

function updateSaleOptions() {
    const saleProductSelect = document.getElementById('saleProduct');
    saleProductSelect.innerHTML = '';
    inventory.forEach((product, index) => {
        const option = document.createElement('option');
        option.value = index;
        option.text = `${product.name} - ${product.quantity} disponibles`;
        saleProductSelect.appendChild(option);
    });
}

// Inicializar la vista al cargar la página
document.addEventListener('DOMContentLoaded', () => {
    renderInventory();
    updateSaleOptions();
});

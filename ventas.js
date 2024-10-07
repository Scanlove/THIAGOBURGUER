let sales = JSON.parse(localStorage.getItem('sales')) || [];

function saveSales() {
    localStorage.setItem('sales', JSON.stringify(sales));
    localStorage.setItem('inventory', JSON.stringify(inventory));
}

function recordSale() {
    const productIndex = document.getElementById('saleProduct').value;
    const quantitySold = parseInt(document.getElementById('saleQuantity').value);
    const product = inventory[productIndex];
    
    if (product && quantitySold > 0 && quantitySold <= product.quantity) {
        product.quantity -= quantitySold;
        const totalSale = quantitySold * product.price;
        sales.push({ name: product.name, quantity: quantitySold, total: totalSale });
        saveSales();
        renderInventory();
        renderSalesHistory();
        alert(`Venta registrada: ${quantitySold} x ${product.name} por $${totalSale.toFixed(2)}`);
    } else {
        alert('Cantidad inválida o producto no disponible.');
    }
    document.getElementById('saleQuantity').value = '';
}

function renderSalesHistory() {
    const salesHistory = document.getElementById('salesHistory');
    salesHistory.innerHTML = '<h3>Historial de Ventas</h3>';
    sales.forEach(sale => {
        salesHistory.innerHTML += `<p>${sale.quantity} x ${sale.name} = $${sale.total.toFixed(2)}</p>`;
    });
}

document.addEventListener('DOMContentLoaded', () => {
    renderSalesHistory();
});

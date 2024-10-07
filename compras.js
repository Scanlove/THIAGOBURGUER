let purchases = JSON.parse(localStorage.getItem('purchases')) || [];

function savePurchases() {
    localStorage.setItem('purchases', JSON.stringify(purchases));
    localStorage.setItem('inventory', JSON.stringify(inventory));
}

function recordPurchase() {
    const name = document.getElementById('purchaseProduct').value;
    const quantity = parseInt(document.getElementById('purchaseQuantity').value);
    const price = parseFloat(document.getElementById('purchasePrice').value);
    
    if (name && quantity > 0 && price > 0) {
        const existingProduct = inventory.find(product => product.name === name);
        
        if (existingProduct) {
            existingProduct.quantity += quantity;
        } else {
            inventory.push({ name, quantity, price });
        }
        
        purchases.push({ name, quantity, price });
        savePurchases();
        renderInventory();
        alert(`Compra registrada: ${quantity} x ${name} por $${(quantity * price).toFixed(2)}`);
    } else {
        alert('Por favor, completa todos los campos correctamente.');
    }
    
    document.getElementById('purchaseProduct').value = '';
    document.getElementById('purchaseQuantity').value = '';
    document.getElementById('purchasePrice').value = '';
}

document.addEventListener('DOMContentLoaded', () => {
    renderInventory();
});

let inventory = JSON.parse(localStorage.getItem('inventory')) || [];

// Función para guardar el inventario en localStorage
function saveInventory() {
    localStorage.setItem('inventory', JSON.stringify(inventory));
}

// Función para agregar un nuevo producto al inventario
function addProduct(event) {
    event.preventDefault(); // Evitar el recargo de la página

    const name = document.getElementById('productName').value.trim();
    const code = document.getElementById('productCode').value.trim();
    const quantity = parseInt(document.getElementById('productQuantity').value);
    const price = parseFloat(document.getElementById('productPrice').value);
    const category = document.getElementById('productCategory').value;

    if (name && code && quantity > 0 && price > 0 && category) {
        // Agregar el producto al inventario
        inventory.push({ codigo: code, name, category, quantity, price });
        saveInventory();

        alert('Producto agregado exitosamente.');
        document.querySelector('form').reset(); // Limpiar el formulario
    } else {
        alert('Por favor, completa todos los campos correctamente.');
    }
}

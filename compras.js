// Inicialización de inventario desde localStorage
let inventory = JSON.parse(localStorage.getItem('inventory')) || [];

// Función para guardar el inventario en localStorage
function saveInventory() {
    localStorage.setItem('inventory', JSON.stringify(inventory));
}

// Función para agregar un nuevo producto al inventario
function nuevoProducto() {
    document.getElementById('comprasContent').innerHTML = `
        <h3>Agregar Nuevo Producto</h3>
        <input type="text" id="productName" placeholder="Nombre del producto">
        <input type="number" id="productQuantity" placeholder="Cantidad">
        <input type="number" id="productPrice" placeholder="Precio por unidad">
        <select id="productCategory">
            <option value="Comida">Comida</option>
            <option value="Extras y Porciones">Extras y Porciones</option>
            <option value="Gaseosas">Gaseosas</option>
        </select>
        <button onclick="addProduct()">Agregar Producto</button>
    `;
}

// Función para agregar un producto nuevo con su categoría
function addProduct() {
    const name = document.getElementById('productName').value.trim();
    const quantity = parseInt(document.getElementById('productQuantity').value);
    const price = parseFloat(document.getElementById('productPrice').value);
    const category = document.getElementById('productCategory').value;

    if (name && quantity > 0 && price > 0 && category) {
        inventory.push({ name, quantity, price, category });
        saveInventory();
        alert('Producto agregado exitosamente.');
        document.getElementById('comprasContent').innerHTML = '';
    } else {
        alert('Por favor, completa todos los campos correctamente.');
    }
}

// Función para registrar un producto existente (agregar stock)
function registrarProducto() {
    document.getElementById('comprasContent').innerHTML = `
        <h3>Registrar Producto Existente</h3>
        <select id="productSelect">
            ${inventory.map((product, index) => `<option value="${index}">${product.name} (${product.category})</option>`).join('')}
        </select>
        <input type="number" id="productQuantity" placeholder="Cantidad a agregar">
        <button onclick="addStock()">Agregar Stock</button>
    `;
}

// Función para agregar stock a un producto existente
function addStock() {
    const index = document.getElementById('productSelect').value;
    const quantity = parseInt(document.getElementById('productQuantity').value);

    if (quantity > 0 && inventory[index]) {
        inventory[index].quantity += quantity;
        saveInventory();
        alert('Stock agregado correctamente.');
        document.getElementById('comprasContent').innerHTML = '';
    } else {
        alert('Por favor, selecciona un producto válido y una cantidad mayor a cero.');
    }
}

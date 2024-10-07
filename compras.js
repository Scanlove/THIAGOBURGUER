// Inicialización de inventario y gastos desde localStorage
let inventory = JSON.parse(localStorage.getItem('inventory')) || [];
let expenses = JSON.parse(localStorage.getItem('expenses')) || [];

// Función para guardar el inventario en localStorage
function saveInventory() {
    localStorage.setItem('inventory', JSON.stringify(inventory));
}

// Función para guardar los gastos en localStorage
function saveExpenses() {
    localStorage.setItem('expenses', JSON.stringify(expenses));
}

// Función para agregar un nuevo producto al inventario
function nuevoProducto() {
    document.getElementById('comprasContent').innerHTML = `
        <h3>Agregar Nuevo Producto</h3>
        <input type="text" id="productName" placeholder="Nombre del producto">
        <input type="number" id="productQuantity" placeholder="Cantidad">
        <input type="number" id="productPrice" placeholder="Precio por unidad">
        <button onclick="addProduct()">Agregar Producto</button>
    `;
}

// Función para registrar un producto existente (agregar stock)
function registrarProducto() {
    document.getElementById('comprasContent').innerHTML = `
        <h3>Registrar Producto Existente</h3>
        <select id="productSelect">
            ${inventory.map((product, index) => `<option value="${index}">${product.name}</option>`).join('')}
        </select>
        <input type="number" id="productQuantity" placeholder="Cantidad a agregar">
        <button onclick="addStock()">Agregar Stock</button>
    `;
}

// Función para registrar un gasto
function registrarGastos() {
    document.getElementById('comprasContent').innerHTML = `
        <h3>Registrar Gastos</h3>
        <input type="text" id="expenseDescription" placeholder="Descripción del gasto">
        <input type="number" id="expenseAmount" placeholder="Monto del gasto">
        <button onclick="addExpense()">Registrar Gasto</button>
    `;
}

// Función para resetear el inventario
function resetearInventario() {
    if (confirm('¿Estás seguro de que quieres resetear el inventario? Esta acción no se puede deshacer.')) {
        inventory = [];
        saveInventory();
        alert('Inventario reseteado con éxito.');
        document.getElementById('comprasContent').innerHTML = '';
    }
}

// Función para agregar un nuevo producto al inventario
function addProduct() {
    const name = document.getElementById('productName').value.trim();
    const quantity = parseInt(document.getElementById('productQuantity').value);
    const price = parseFloat(document.getElementById('productPrice').value);

    if (name && quantity > 0 && price > 0) {
        inventory.push({ name, quantity, price });
        saveInventory();
        alert('Producto agregado exitosamente.');
        document.getElementById('comprasContent').innerHTML = '';
    } else {
        alert('Por favor, completa todos los campos correctamente.');
    }
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

// Función para registrar un gasto
function addExpense() {
    const description = document.getElementById('expenseDescription').value.trim();
    const amount = parseFloat(document.getElementById('expenseAmount').value);

    if (description && amount > 0) {
        expenses.push({ description, amount, date: new Date().toLocaleDateString() });
        saveExpenses();
        alert('Gasto registrado exitosamente.');
        document.getElementById('comprasContent').innerHTML = '';
    } else {
        alert('Por favor, completa todos los campos correctamente.');
    }
}

const users = [
    { username: 'caja1', password: 'caja1', role: 'cajero' },
    { username: 'admin', password: 'adminadmin2023', role: 'Administrador' },
    { username: 'inventario', password: 'adminadmin2023', role: 'inventario' },
];

let inventory = [];

function login() {
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    const user = users.find(u => u.username === username && u.password === password);
    
    if (user) {
        alert(`Bienvenido, ${user.role}`);
        document.getElementById('loginForm').style.display = 'none';
        document.getElementById('inventory').style.display = 'block';
        renderInventory();
    } else {
        alert('Usuario o contraseña incorrectos');
    }
}

function addProduct() {
    const name = document.getElementById('productName').value;
    const quantity = parseInt(document.getElementById('productQuantity').value);
    const price = parseFloat(document.getElementById('productPrice').value);
    
    if (name && quantity > 0 && price > 0) {
        inventory.push({ name, quantity, price });
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
    renderInventory();
}

function editProduct(index) {
    const product = inventory[index];
    document.getElementById('productName').value = product.name;
    document.getElementById('productQuantity').value = product.quantity;
    document.getElementById('productPrice').value = product.price;
    inventory.splice(index, 1);
}

function generateReport() {
    const totalValue = inventory.reduce((sum, product) => sum + product.quantity * product.price, 0);
    const totalProducts = inventory.length;
    const reportContent = document.getElementById('reportContent');
    reportContent.innerHTML = `
        <p>Total de productos: ${totalProducts}</p>
        <p>Valor total del inventario: $${totalValue.toFixed(2)}</p>
    `;
}

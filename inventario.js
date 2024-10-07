let inventory = JSON.parse(localStorage.getItem('inventory')) || [];
let sales = JSON.parse(localStorage.getItem('sales')) || [];

// Función para buscar un producto en el inventario
function buscarProducto() {
    document.getElementById('inventarioContent').innerHTML = `
        <h3>Buscar Producto</h3>
        <input type="text" id="searchName" placeholder="Nombre del producto">
        <button onclick="searchProduct()">Buscar</button>
        <div id="searchResult"></div>
    `;
}

// Función para realizar la búsqueda de un producto
function searchProduct() {
    const name = document.getElementById('searchName').value.trim().toLowerCase();
    const result = inventory.filter(product => product.name.toLowerCase().includes(name));

    const searchResult = document.getElementById('searchResult');
    if (result.length > 0) {
        searchResult.innerHTML = `
            <h4>Resultados de la búsqueda:</h4>
            <ul>
                ${result.map(product => `
                    <li>${product.name} - Cantidad: ${product.quantity}, Precio: $${product.price.toFixed(2)}</li>
                `).join('')}
            </ul>
        `;
    } else {
        searchResult.innerHTML = `<p>No se encontraron productos con ese nombre.</p>`;
    }
}

// Función para imprimir el saldo actual de todos los productos
function imprimirSaldo() {
    const saldoContent = `
        <h3>Saldo Actual del Inventario</h3>
        <table>
            <thead>
                <tr>
                    <th>Producto</th>
                    <th>Cantidad</th>
                    <th>Precio por Unidad</th>
                    <th>Valor Total</th>
                </tr>
            </thead>
            <tbody>
                ${inventory.map(product => `
                    <tr>
                        <td>${product.name}</td>
                        <td>${product.quantity}</td>
                        <td>$${product.price.toFixed(2)}</td>
                        <td>$${(product.quantity * product.price).toFixed(2)}</td>
                    </tr>
                `).join('')}
            </tbody>
        </table>
        <p>Total Valor del Inventario: $${calculateTotalInventoryValue().toFixed(2)}</p>
    `;

    document.getElementById('inventarioContent').innerHTML = saldoContent;
}

// Función para calcular el valor total del inventario
function calculateTotalInventoryValue() {
    return inventory.reduce((total, product) => total + (product.quantity * product.price), 0);
}

// Función para revisar las ventas del día
function revisarVentaDia() {
    const today = new Date().toLocaleDateString();
    const todaySales = sales.filter(sale => sale.date === today);

    const salesContent = `
        <h3>Ventas del Día (${today})</h3>
        <table>
            <thead>
                <tr>
                    <th>Producto</th>
                    <th>Cantidad Vendida</th>
                    <th>Total Venta</th>
                </tr>
            </thead>
            <tbody>
                ${todaySales.map(sale => `
                    <tr>
                        <td>${sale.name}</td>
                        <td>${sale.quantity}</td>
                        <td>$${sale.total.toFixed(2)}</td>
                    </tr>
                `).join('')}
            </tbody>
        </table>
        <p>Total de Ventas del Día: $${calculateTotalSales(todaySales).toFixed(2)}</p>
    `;

    document.getElementById('inventarioContent').innerHTML = salesContent;
}

// Función para calcular el total de ventas
function calculateTotalSales(salesList) {
    return salesList.reduce((total, sale) => total + sale.total, 0);
}

let sales = JSON.parse(localStorage.getItem('sales')) || [];
let cajaAbierta = JSON.parse(localStorage.getItem('cajaAbierta')) || false;
let caja = JSON.parse(localStorage.getItem('caja')) || { montoInicial: 0, totalVentas: 0, ventas: [] };

// Función para realizar una venta
function realizarVenta() {
    if (!cajaAbierta) {
        alert('La caja no está abierta. Abre la caja antes de realizar ventas.');
        return;
    }

    // Filtrar productos por categoría
    const comidas = inventory.filter(item => item.category === 'Comida');
    const extras = inventory.filter(item => item.category === 'Extras y Porciones');
    const gaseosas = inventory.filter(item => item.category === 'Gaseosas');

    // Mostrar los productos en categorías
    document.getElementById('ventasContent').innerHTML = `
        <h3>Realizar Venta</h3>
        <div class="category">
            <h4>Comida</h4>
            <ul>
                ${comidas.map((item, index) => `<li>${item.name} - $${item.price.toFixed(2)} 
                    <button onclick="agregarAlCarrito(${index}, 'Comida')">Agregar</button></li>`).join('')}
            </ul>
        </div>
        <div class="category">
            <h4>Extras y Porciones</h4>
            <ul>
                ${extras.map((item, index) => `<li>${item.name} - $${item.price.toFixed(2)} 
                    <button onclick="agregarAlCarrito(${index}, 'Extras y Porciones')">Agregar</button></li>`).join('')}
            </ul>
        </div>
        <div class="category">
            <h4>Gaseosas</h4>
            <ul>
                ${gaseosas.map((item, index) => `<li>${item.name} - $${item.price.toFixed(2)} 
                    <button onclick="agregarAlCarrito(${index}, 'Gaseosas')">Agregar</button></li>`).join('')}
            </ul>
        </div>
        <h3>Resumen de Venta</h3>
        <div id="carrito"></div>
        <p>Total a Cobrar: $<span id="totalVenta">0.00</span></p>
        <input type="number" id="montoPago" placeholder="Monto Pagado">
        <p>Cambio: $<span id="cambioVenta">0.00</span></p>
        <select id="metodoPago">
            <option value="Efectivo">Efectivo</option>
            <option value="QR">QR</option>
        </select>
        <button onclick="calcularCambio()">Calcular Cambio</button>
        <button onclick="procesarVenta()">Procesar Venta</button>
        <div class="menu">
            <button onclick="window.location.href='index.html'">Volver</button>
        </div>
    `;
}

// Variables para el carrito de compras
let carrito = [];
let totalVenta = 0;

// Función para agregar productos al carrito
function agregarAlCarrito(index, categoria) {
    let producto;

    if (categoria === 'Comida') {
        producto = inventory.filter(item => item.category === 'Comida')[index];
    } else if (categoria === 'Extras y Porciones') {
        producto = inventory.filter(item => item.category === 'Extras y Porciones')[index];
    } else if (categoria === 'Gaseosas') {
        producto = inventory.filter(item => item.category === 'Gaseosas')[index];
    }

    carrito.push({ name: producto.name, price: producto.price, quantity: 1 });
    totalVenta += producto.price;
    actualizarCarrito();
}

// Función para actualizar el carrito en la vista
function actualizarCarrito() {
    const carritoDiv = document.getElementById('carrito');
    carritoDiv.innerHTML = `
        <ul>
            ${carrito.map((item, index) => `
                <li>${item.name} - $${item.price.toFixed(2)} 
                <button onclick="eliminarDelCarrito(${index})">Eliminar</button></li>
            `).join('')}
        </ul>
    `;
    document.getElementById('totalVenta').textContent = totalVenta.toFixed(2);
}

// Función para eliminar productos del carrito
function eliminarDelCarrito(index) {
    totalVenta -= carrito[index].price;
    carrito.splice(index, 1);
    actualizarCarrito();
}

// Función para calcular el cambio
function calcularCambio() {
    const montoPago = parseFloat(document.getElementById('montoPago').value);
    const cambio = montoPago - totalVenta;

    if (cambio >= 0) {
        document.getElementById('cambioVenta').textContent = cambio.toFixed(2);
    } else {
        alert('El monto pagado es insuficiente.');
    }
}

// Función para procesar la venta y actualizar el inventario
function procesarVenta() {
    const metodoPago = document.getElementById('metodoPago').value;
    const montoPago = parseFloat(document.getElementById('montoPago').value);
    const cambio = parseFloat(document.getElementById('cambioVenta').textContent);

    if (montoPago >= totalVenta && cambio >= 0) {
        carrito.forEach(item => {
            const product = inventory.find(p => p.name === item.name);
            if (product) {
                product.quantity -= item.quantity;
            }
        });

        caja.totalVentas += totalVenta;
        caja.ventas.push({
            items: [...carrito],
            total: totalVenta,
            paymentMethod: metodoPago,
            date: new Date().toLocaleDateString(),
        });

        sales.push(...carrito.map(item => ({
            name: item.name,
            quantity: item.quantity,
            total: item.price * item.quantity,
            date: new Date().toLocaleDateString(),
        })));

        saveCaja();
        alert('Venta procesada con éxito.');
        document.getElementById('ventasContent').innerHTML = '';
        carrito

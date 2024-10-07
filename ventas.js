let inventory = JSON.parse(localStorage.getItem('inventory')) || [];
let sales = JSON.parse(localStorage.getItem('sales')) || [];
let cajaAbierta = JSON.parse(localStorage.getItem('cajaAbierta')) || false;
let caja = JSON.parse(localStorage.getItem('caja')) || { montoInicial: 0, totalVentas: 0, ventas: [] };

// Función para guardar el estado de la caja y las ventas
function saveCaja() {
    localStorage.setItem('caja', JSON.stringify(caja));
    localStorage.setItem('cajaAbierta', JSON.stringify(cajaAbierta));
    localStorage.setItem('sales', JSON.stringify(sales));
    localStorage.setItem('inventory', JSON.stringify(inventory));
}

// Función para la apertura de caja
function aperturaCaja() {
    if (cajaAbierta) {
        alert('La caja ya está abierta.');
        return;
    }

    document.getElementById('ventasContent').innerHTML = `
        <h3>Apertura de Caja</h3>
        <input type="number" id="montoInicial" placeholder="Monto inicial en caja">
        <button onclick="abrirCaja()">Abrir Caja</button>
    `;
}

function abrirCaja() {
    const montoInicial = parseFloat(document.getElementById('montoInicial').value);
    
    if (montoInicial >= 0) {
        caja.montoInicial = montoInicial;
        caja.totalVentas = 0;
        caja.ventas = [];
        cajaAbierta = true;
        saveCaja();
        alert('Caja abierta con éxito con un monto inicial de $' + montoInicial.toFixed(2));
        document.getElementById('ventasContent').innerHTML = '';
    } else {
        alert('Por favor, ingresa un monto inicial válido.');
    }
}

// Función para realizar una venta
function realizarVenta() {
    if (!cajaAbierta) {
        alert('La caja no está abierta. Abre la caja antes de realizar ventas.');
        return;
    }

    document.getElementById('ventasContent').innerHTML = `
        <h3>Realizar Venta</h3>
        <select id="ventaProducto">
            ${inventory.map((product, index) => `<option value="${index}">${product.name}</option>`).join('')}
        </select>
        <input type="number" id="ventaCantidad" placeholder="Cantidad a vender">
        <button onclick="venderProducto()">Vender</button>
    `;
}

function venderProducto() {
    const productoIndex = document.getElementById('ventaProducto').value;
    const cantidad = parseInt(document.getElementById('ventaCantidad').value);
    const producto = inventory[productoIndex];

    if (cantidad > 0 && cantidad <= producto.quantity) {
        const totalVenta = cantidad * producto.price;
        producto.quantity -= cantidad;
        caja.totalVentas += totalVenta;
        caja.ventas.push({ name: producto.name, quantity: cantidad, total: totalVenta, date: new Date().toLocaleDateString() });
        sales.push({ name: producto.name, quantity: cantidad, total: totalVenta, date: new Date().toLocaleDateString() });
        saveCaja();
        alert(`Venta realizada: ${cantidad} x ${producto.name} por $${totalVenta.toFixed(2)}`);
        document.getElementById('ventasContent').innerHTML = '';
    } else {
        alert('Cantidad inválida o no hay suficiente stock.');
    }
}

// Función para cerrar la caja
function cierreCaja() {
    if (!cajaAbierta) {
        alert('La caja no está abierta.');
        return;
    }

    const totalVentas = caja.ventas.reduce((total, venta) => total + venta.total, 0);
    const totalCaja = caja.montoInicial + totalVentas;

    document.getElementById('ventasContent').innerHTML = `
        <h3>Cierre de Caja</h3>
        <p>Total de Ventas: $${totalVentas.toFixed(2)}</p>
        <p>Monto Inicial: $${caja.montoInicial.toFixed(2)}</p>
        <p>Total en Caja: $${totalCaja.toFixed(2)}</p>
        <button onclick="confirmarCierre()">Confirmar Cierre</button>
    `;
}

function confirmarCierre() {
    cajaAbierta = false;
    saveCaja();
    alert('Caja cerrada con éxito.');
    document.getElementById('ventasContent').innerHTML = '';
}

// Función para reimprimir el último cierre de caja
function reimprimirCierre() {
    const totalVentas = caja.ventas.reduce((total, venta) => total + venta.total, 0);
    const totalCaja = caja.montoInicial + totalVentas;

    document.getElementById('ventasContent').innerHTML = `
        <h3>Último Cierre de Caja</h3>
        <p>Total de Ventas: $${totalVentas.toFixed(2)}</p>
        <p>Monto Inicial: $${caja.montoInicial.toFixed(2)}</p>
        <p>Total en Caja: $${totalCaja.toFixed(2)}</p>
    `;
}

// Función para mostrar el cierre por producto
function cierrePorProducto() {
    const ventasPorProducto = sales.reduce((acc, sale) => {
        acc[sale.name] = (acc[sale.name] || 0) + sale.quantity;
        return acc;
    }, {});

    const content = `
        <h3>Cierre por Producto</h3>
        <ul>
            ${Object.entries(ventasPorProducto).map(([name, quantity]) => `
                <li>${name}: ${quantity} unidades vendidas</li>
            `).join('')}
        </ul>
    `;

    document.getElementById('ventasContent').innerHTML = content;
}

// Función para realizar el arqueo de caja
function arqueoCaja() {
    const totalVentas = caja.ventas.reduce((total, venta) => total + venta.total, 0);
    const totalCaja = caja.montoInicial + totalVentas;

    document.getElementById('ventasContent').innerHTML = `
        <h3>Arqueo de Caja</h3>
        <p>Total de Ventas: $${totalVentas.toFixed(2)}</p>
        <p>Monto Inicial: $${caja.montoInicial.toFixed(2)}</p>
        <p>Total en Caja: $${totalCaja.toFixed(2)}</p>
    `;
}

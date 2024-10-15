// Datos iniciales para las tablas
let productos = [
    { codigo: 'C001', descripcion: 'Lomito Clásico', medida: 'Unidad', entrada: 0, salida: 0, saldo: 0, unidadKilo: 1, precio: 20, precioVenta: 22, precioCompra: 18, liquidoGanable: 4, ventaBruta: 0 },
    { codigo: 'C002', descripcion: 'Lomito con Papa', medida: 'Unidad', entrada: 0, salida: 0, saldo: 0, unidadKilo: 1, precio: 22, precioVenta: 25, precioCompra: 20, liquidoGanable: 5, ventaBruta: 0 },
    { codigo: 'C003', descripcion: 'Lomito con Huevo', medida: 'Unidad', entrada: 0, salida: 0, saldo: 0, unidadKilo: 1, precio: 23, precioVenta: 28, precioCompra: 22, liquidoGanable: 6, ventaBruta: 0 },
    { codigo: 'C004', descripcion: 'Lomito Completo', medida: 'Unidad', entrada: 0, salida: 0, saldo: 0, unidadKilo: 1, precio: 25, precioVenta: 30, precioCompra: 24, liquidoGanable: 6, ventaBruta: 0 },
    { codigo: 'C005', descripcion: 'Lomito Doble', medida: 'Unidad', entrada: 0, salida: 0, saldo: 0, unidadKilo: 1, precio: 30, precioVenta: 35, precioCompra: 28, liquidoGanable: 7, ventaBruta: 0 },
    { codigo: 'C006', descripcion: 'Hamburguesa', medida: 'Unidad', entrada: 0, salida: 0, saldo: 0, unidadKilo: 1, precio: 18, precioVenta: 20, precioCompra: 15, liquidoGanable: 5, ventaBruta: 0 },
    { codigo: 'C007', descripcion: 'Burger con Papa', medida: 'Unidad', entrada: 0, salida: 0, saldo: 0, unidadKilo: 1, precio: 20, precioVenta: 24, precioCompra: 18, liquidoGanable: 6, ventaBruta: 0 },
    { codigo: 'C008', descripcion: 'Burger con Huevo', medida: 'Unidad', entrada: 0, salida: 0, saldo: 0, unidadKilo: 1, precio: 22, precioVenta: 26, precioCompra: 20, liquidoGanable: 6, ventaBruta: 0 },
    { codigo: 'C009', descripcion: 'Burger Completo', medida: 'Unidad', entrada: 0, salida: 0, saldo: 0, unidadKilo: 1, precio: 25, precioVenta: 30, precioCompra: 24, liquidoGanable: 6, ventaBruta: 0 },
    { codigo: 'C010', descripcion: 'Burger Doble', medida: 'Unidad', entrada: 0, salida: 0, saldo: 0, unidadKilo: 1, precio: 30, precioVenta: 35, precioCompra: 28, liquidoGanable: 7, ventaBruta: 0 },
    { codigo: 'C011', descripcion: 'Alitas', medida: 'Unidad', entrada: 0, salida: 0, saldo: 0, unidadKilo: 1, precio: 15, precioVenta: 18, precioCompra: 12, liquidoGanable: 6, ventaBruta: 0 },
    { codigo: 'C012', descripcion: 'Piernitas', medida: 'Unidad', entrada: 0, salida: 0, saldo: 0, unidadKilo: 1, precio: 15, precioVenta: 18, precioCompra: 12, liquidoGanable: 6, ventaBruta: 0 },
    { codigo: 'C013', descripcion: 'Milanesa Picada', medida: 'Unidad', entrada: 0, salida: 0, saldo: 0, unidadKilo: 1, precio: 18, precioVenta: 22, precioCompra: 15, liquidoGanable: 7, ventaBruta: 0 },
    { codigo: 'C014', descripcion: 'Salchipapa', medida: 'Unidad', entrada: 0, salida: 0, saldo: 0, unidadKilo: 1, precio: 12, precioVenta: 14, precioCompra: 10, liquidoGanable: 4, ventaBruta: 0 },
    { codigo: 'C015', descripcion: 'Salchipapa Doble', medida: 'Unidad', entrada: 0, salida: 0, saldo: 0, unidadKilo: 1, precio: 16, precioVenta: 20, precioCompra: 14, liquidoGanable: 6, ventaBruta: 0 },
    { codigo: 'C016', descripcion: 'Mista Salchi y Mila', medida: 'Unidad', entrada: 0, salida: 0, saldo: 0, unidadKilo: 1, precio: 22, precioVenta: 25, precioCompra: 20, liquidoGanable: 5, ventaBruta: 0 },
    { codigo: 'C017', descripcion: 'Choripán', medida: 'Unidad', entrada: 0, salida: 0, saldo: 0, unidadKilo: 1, precio: 10, precioVenta: 12, precioCompra: 8, liquidoGanable: 4, ventaBruta: 0 },
    { codigo: 'C018', descripcion: 'Pollo Eco Broaster', medida: 'Unidad', entrada: 0, salida: 0, saldo: 0, unidadKilo: 1, precio: 25, precioVenta: 30, precioCompra: 20, liquidoGanable: 10, ventaBruta: 0 },
    { codigo: 'C019', descripcion: 'Pollo-Eco-Pech-Ala', medida: 'Unidad', entrada: 0, salida: 0, saldo: 0, unidadKilo: 1, precio: 20, precioVenta: 25, precioCompra: 18, liquidoGanable: 7, ventaBruta: 0 },
    { codigo: 'C020', descripcion: 'Pollo-Cuarto-Broaster', medida: 'Unidad', entrada: 0, salida: 0, saldo: 0, unidadKilo: 1, precio: 18, precioVenta: 22, precioCompra: 15, liquidoGanable: 7, ventaBruta: 0 },
    { codigo: 'C021', descripcion: 'Pollo-Cuarto-Pech-Ala', medida: 'Unidad', entrada: 0, salida: 0, saldo: 0, unidadKilo: 1, precio: 22, precioVenta: 26, precioCompra: 19, liquidoGanable: 7, ventaBruta: 0 },
    { codigo: 'C022', descripcion: 'Papa Porción', medida: 'Unidad', entrada: 0, salida: 0, saldo: 0, unidadKilo: 1, precio: 5, precioVenta: 7, precioCompra: 3, liquidoGanable: 4, ventaBruta: 0 },
    { codigo: 'C023', descripcion: 'Arroz Porción', medida: 'Unidad', entrada: 0, salida: 0, saldo: 0, unidadKilo: 1, precio: 5, precioVenta: 7, precioCompra: 3, liquidoGanable: 4, ventaBruta: 0 },
    { codigo: 'C024', descripcion: 'Tocino Porción', medida: 'Unidad', entrada: 0, salida: 0, saldo: 0, unidadKilo: 1, precio: 8, precioVenta: 12, precioCompra: 6, liquidoGanable: 6, ventaBruta: 0 },
    { codigo: 'C025', descripcion: 'Huevo Porción', medida: 'Unidad', entrada: 0, salida: 0, saldo: 0, unidadKilo: 1, precio: 5, precioVenta: 7, precioCompra: 3, liquidoGanable: 4, ventaBruta: 0 },
    { codigo: 'G001', descripcion: 'Vaso Mocochinchi', medida: 'Unidad', entrada: 0, salida: 0, saldo: 0, unidadKilo: 1, precio: 8, precioVenta: 10, precioCompra: 5, liquidoGanable: 5, ventaBruta: 0 },
    { codigo: 'G002', descripcion: 'Vaso Limonada', medida: 'Unidad', entrada: 0, salida: 0, saldo: 0, unidadKilo: 1, precio: 8, precioVenta: 10, precioCompra: 5, liquidoGanable: 5, ventaBruta: 0 },
    { codigo: 'G003', descripcion: 'Agua 2Lt.', medida: 'Unidad', entrada: 0, salida: 0, saldo: 0, unidadKilo: 1, precio: 10, precioVenta: 12, precioCompra: 6, liquidoGanable: 6, ventaBruta: 0 },
    { codigo: 'G004', descripcion: 'Agua de 500', medida: 'Unidad', entrada: 0, salida: 0, saldo: 0, unidadKilo: 1, precio: 5, precioVenta: 6, precioCompra: 3, liquidoGanable: 3, ventaBruta: 0 },
    { codigo: 'G005', descripcion: 'Peque Coca Cola', medida: 'Unidad', entrada: 0, salida: 0, saldo: 0, unidadKilo: 1, precio: 8, precioVenta: 10, precioCompra: 5, liquidoGanable: 5, ventaBruta: 0 },
    { codigo: 'G006', descripcion: 'Mini Coca Cola', medida: 'Unidad', entrada: 0, salida: 0, saldo: 0, unidadKilo: 1, precio: 10, precioVenta: 12, precioCompra: 6, liquidoGanable: 6, ventaBruta: 0 },
    { codigo: 'G007', descripcion: 'Popular Coca Cola', medida: 'Unidad', entrada: 0, salida: 0, saldo: 0, unidadKilo: 1, precio: 12, precioVenta: 15, precioCompra: 9, liquidoGanable: 6, ventaBruta: 0 },
    { codigo: 'G008', descripcion: 'Personal Coca Cola', medida: 'Unidad', entrada: 0, salida: 0, saldo: 0, unidadKilo: 1, precio: 15, precioVenta: 18, precioCompra: 12, liquidoGanable: 6, ventaBruta: 0 },
    { codigo: 'G009', descripcion: 'Coca Cola 2Lt.', medida: 'Unidad', entrada: 0, salida: 0, saldo: 0, unidadKilo: 1, precio: 20, precioVenta: 24, precioCompra: 18, liquidoGanable: 6, ventaBruta: 0 },
    { codigo: 'G010', descripcion: 'Coca Cola 3Lt.', medida: 'Unidad', entrada: 0, salida: 0, saldo: 0, unidadKilo: 1, precio: 25, precioVenta: 30, precioCompra: 22, liquidoGanable: 8, ventaBruta: 0 },
    { codigo: 'G011', descripcion: 'Pura Vida Personal', medida: 'Unidad', entrada: 0, salida: 0, saldo: 0, unidadKilo: 1, precio: 8, precioVenta: 10, precioCompra: 5, liquidoGanable: 5, ventaBruta: 0 },
    { codigo: 'G012', descripcion: 'Pura Vida 2Lt.', medida: 'Unidad', entrada: 0, salida: 0, saldo: 0, unidadKilo: 1, precio: 10, precioVenta: 12, precioCompra: 6, liquidoGanable: 6, ventaBruta: 0 },
    { codigo: 'G013', descripcion: 'Pura Vida 3Lt.', medida: 'Unidad', entrada: 0, salida: 0, saldo: 0, unidadKilo: 1, precio: 15, precioVenta: 18, precioCompra: 12, liquidoGanable: 6, ventaBruta: 0 },
    { codigo: 'G014', descripcion: 'Acuario 2Lt.', medida: 'Unidad', entrada: 0, salida: 0, saldo: 0, unidadKilo: 1, precio: 10, precioVenta: 12, precioCompra: 6, liquidoGanable: 6, ventaBruta: 0 },
    { codigo: 'G015', descripcion: 'Pepsi 1Lt.', medida: 'Unidad', entrada: 0, salida: 0, saldo: 0, unidadKilo: 1, precio: 10, precioVenta: 12, precioCompra: 6, liquidoGanable: 6, ventaBruta: 0 },
    { codigo: 'G016', descripcion: 'Pepsi 2Lt.', medida: 'Unidad', entrada: 0, salida: 0, saldo: 0, unidadKilo: 1, precio: 20, precioVenta: 25, precioCompra: 18, liquidoGanable: 7, ventaBruta: 0 },
    { codigo: 'G017', descripcion: 'Mendocina 1Lt.', medida: 'Unidad', entrada: 0, salida: 0, saldo: 0, unidadKilo: 1, precio: 10, precioVenta: 12, precioCompra: 6, liquidoGanable: 6, ventaBruta: 0 },
    { codigo: 'G018', descripcion: 'Antartica 1Lt.', medida: 'Unidad', entrada: 0, salida: 0, saldo: 0, unidadKilo: 1, precio: 10, precioVenta: 12, precioCompra: 6, liquidoGanable: 6, ventaBruta: 0 },
    { codigo: 'G019', descripcion: 'Antartica 2Lt.', medida: 'Unidad', entrada: 0, salida: 0, saldo: 0, unidadKilo: 1, precio: 18, precioVenta: 22, precioCompra: 15, liquidoGanable: 7, ventaBruta: 0 },
    
];
// Registros de entradas y salidas
let entradas = [
    { codigo: 'C001', fecha: '2024-10-15', detalle: 'Compra inicial', cantidad: 100, totalBs: 1800 },
    { codigo: 'C002', fecha: '2024-10-16', detalle: 'Compra adicional', cantidad: 50, totalBs: 1100 }
];

let salidas = [
    { codigo: 'C001', salidaDia: 10, salidaTotal: 20, mercaderia: 'Comida', salidas: 30 },
    { codigo: 'C002', salidaDia: 5, salidaTotal: 10, mercaderia: 'Comida', salidas: 15 }
];

// Cargar productos desde localStorage o usar los iniciales
let inventory = JSON.parse(localStorage.getItem('inventory')) || productos;

// Guardar inventario y registros en localStorage
function guardarInventario() {
    localStorage.setItem('inventory', JSON.stringify(inventory));
    localStorage.setItem('entradas', JSON.stringify(entradas));
    localStorage.setItem('salidas', JSON.stringify(salidas));
}

// Mostrar tablas de productos, entradas y salidas
function mostrarTablas() {
    document.getElementById('contenidoTablas').innerHTML = `
        <div class="table-container">
            <h4>Productos</h4>
            <table>
                <thead>
                    <tr>
                        <th>Código</th>
                        <th>Descripción</th>
                        <th>Medida</th>
                        <th>Entrada</th>
                        <th>Salida</th>
                        <th>Saldo</th>
                        <th>Unidad Kilo</th>
                        <th>Precio</th>
                        <th>Precio Venta</th>
                        <th>Precio Compra</th>
                        <th>Líquido Ganable</th>
                        <th>Venta Bruta</th>
                    </tr>
                </thead>
                <tbody>
                    ${inventory.map(producto => `
                        <tr>
                            <td>${producto.codigo}</td>
                            <td>${producto.descripcion}</td>
                            <td>${producto.medida}</td>
                            <td>${producto.entrada}</td>
                            <td>${producto.salida}</td>
                            <td>${producto.saldo}</td>
                            <td>${producto.unidadKilo}</td>
                            <td>${producto.precio.toFixed(2)}</td>
                            <td>${producto.precioVenta.toFixed(2)}</td>
                            <td>${producto.precioCompra.toFixed(2)}</td>
                            <td>${producto.liquidoGanable.toFixed(2)}</td>
                            <td>${producto.ventaBruta.toFixed(2)}</td>
                        </tr>
                    `).join('')}
                </tbody>
            </table>
        </div>

        <div class="table-container">
            <h4>Registro de Entradas</h4>
            <table>
                <thead>
                    <tr>
                        <th>Código</th>
                        <th>Fecha</th>
                        <th>Detalle</th>
                        <th>Cantidad</th>
                        <th>Total Bs.</th>
                    </tr>
                </thead>
                <tbody>
                    ${entradas.map(entrada => `
                        <tr>
                            <td>${entrada.codigo}</td>
                            <td>${entrada.fecha}</td>
                            <td>${entrada.detalle}</td>
                            <td>${entrada.cantidad}</td>
                            <td>${entrada.totalBs.toFixed(2)}</td>
                        </tr>
                    `).join('')}
                </tbody>
            </table>
        </div>

        <div class="table-container">
            <h4>Registro de Salidas</h4>
            <table>
                <thead>
                    <tr>
                        <th>Código</th>
                        <th>Salida del Día</th>
                        <th>Salida Total</th>
                        <th>Mercadería</th>
                        <th>Salidas</th>
                    </tr>
                </thead>
                <tbody>
                    ${salidas.map(salida => `
                        <tr>
                            <td>${salida.codigo}</td>
                            <td>${salida.salidaDia}</td>
                            <td>${salida.salidaTotal}</td>
                            <td>${salida.mercaderia}</td>
                            <td>${salida.salidas}</td>
                        </tr>
                    `).join('')}
                </tbody>
            </table>
        </div>
    `;
}

// Llamar a la función para mostrar las tablas al cargar la página
document.addEventListener('DOMContentLoaded', () => {
    mostrarTablas();
    guardarInventario(); // Guardar datos en localStorage
});

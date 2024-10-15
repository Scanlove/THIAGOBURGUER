// Datos de ejemplo iniciales (pueden venir de localStorage en un futuro)
let productos = [
    { codigo: '001', descripcion: 'Hamburguesa', medida: 'Unidad', entrada: 100, salida: 10, saldo: 90, unidadKilo: 1, precio: 10, precioVenta: 15, precioCompra: 8, liquidoGanable: 7, ventaBruta: 150 },
];

let registroEntradas = [
    { codigo: '001', fecha: '2024-10-15', detalle: 'Entrada inicial', cantidad: 100, total: 800 },
];

let registroSalidas = [
    { codigo: '001', salidaDia: 10, salidaTotal: 20, mercaderia: 'Comida', salidas: 30 },
];

// Función para mostrar las tablas de "Nuevo Producto"
function nuevoProducto() {
    document.getElementById('comprasContent').innerHTML = `
        <h3>Nuevo Producto</h3>
        <div class="table-container">
            <h4>Tabla de Productos</h4>
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
                    ${productos.map(producto => `
                        <tr>
                            <td>${producto.codigo}</td>
                            <td>${producto.descripcion}</td>
                            <td>${producto.medida}</td>
                            <td>${producto.entrada}</td>
                            <td>${producto.salida}</td>
                            <td>${producto.saldo}</td>
                            <td>${producto.unidadKilo}</td>
                            <td>${producto.precio}</td>
                            <td>${producto.precioVenta}</td>
                            <td>${producto.precioCompra}</td>
                            <td>${producto.liquidoGanable}</td>
                            <td>${producto.ventaBruta}</td>
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
                    ${registroEntradas.map(entrada => `
                        <tr>
                            <td>${entrada.codigo}</td>
                            <td>${entrada.fecha}</td>
                            <td>${entrada.detalle}</td>
                            <td>${entrada.cantidad}</td>
                            <td>${entrada.total}</td>
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
                    ${registroSalidas.map(salida => `
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

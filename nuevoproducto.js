// Datos iniciales para las tablas
let productos = [
    { codigo: 'C001', descripcion: 'Lomito Clásico', medida: 'Unidad', entrada: 0, salida: 0, saldo: 0, unidadKilo: 1, precio: 20, precioVenta: 22, precioCompra: 18, liquidoGanable: 4, ventaBruta: 0 },
    { codigo: 'C002', descripcion: 'Lomito con Papa', medida: 'Unidad', entrada: 0, salida: 0, saldo: 0, unidadKilo: 1, precio: 22, precioVenta: 25, precioCompra: 20, liquidoGanable: 5, ventaBruta: 0 },
    { codigo: 'C003', descripcion: 'Lomito con Huevo', medida: 'Unidad', entrada: 0, salida: 0, saldo: 0, unidadKilo: 1, precio: 23, precioVenta: 28, precioCompra: 22, liquidoGanable: 6, ventaBruta: 0 },
    { codigo: 'C004', descripcion: 'Lomito Completo', medida: 'Unidad', entrada: 0, salida: 0, saldo: 0, unidadKilo: 1, precio: 25, precioVenta: 30, precioCompra: 24, liquidoGanable: 6, ventaBruta: 0 },
    { codigo: 'C005', descripcion: 'Lomito Doble', medida: 'Unidad', entrada: 0, salida: 0, saldo: 0, unidadKilo: 1, precio: 30, precioVenta: 35, precioCompra: 28, liquidoGanable: 7, ventaBruta: 0 },
    // Agrega los demás productos siguiendo esta estructura...
];

let entradas = [
    { codigo: 'C001', fecha: '2024-10-15', detalle: 'Compra inicial', cantidad: 100, totalBs: 1800 }
    // Agrega más registros si es necesario...
];

let salidas = [
    { codigo: 'C001', salidaDia: 10, salidaTotal: 20, mercaderia: 'Comida', salidas: 30 }
    // Agrega más registros si es necesario...
];

// Mostrar las tablas en la página
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
                    ${productos.map(producto => `
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
document.addEventListener('DOMContentLoaded', mostrarTablas);

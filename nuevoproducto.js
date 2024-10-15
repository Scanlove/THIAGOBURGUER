// Datos iniciales de productos
let productos = [
    { codigo: 'C001', descripcion: 'Lomito Clásico', medida: 'Unidad', entrada: 0, salida: 0, saldo: 0, unidadKilo: 1, precio: 20, precioVenta: 22, precioCompra: 18, liquidoGanable: 4, ventaBruta: 0 },
    { codigo: 'C002', descripcion: 'Lomito con Papa', medida: 'Unidad', entrada: 0, salida: 0, saldo: 0, unidadKilo: 1, precio: 22, precioVenta: 25, precioCompra: 20, liquidoGanable: 5, ventaBruta: 0 }
];

// Datos de entradas y salidas
let entradas = JSON.parse(localStorage.getItem('entradas')) || [];
let salidas = JSON.parse(localStorage.getItem('salidas')) || [];

// Cargar productos desde localStorage o usar los productos iniciales
let inventory = JSON.parse(localStorage.getItem('inventory')) || productos;

// Guardar inventario y registros en localStorage
function guardarInventario() {
    localStorage.setItem('inventory', JSON.stringify(inventory));
    localStorage.setItem('entradas', JSON.stringify(entradas));
    localStorage.setItem('salidas', JSON.stringify(salidas));
}

// Función para actualizar saldo del producto
function actualizarSaldo(codigo) {
    const producto = inventory.find(item => item.codigo === codigo);
    if (producto) {
        const totalEntrada = entradas
            .filter(entry => entry.codigo === codigo)
            .reduce((sum, entry) => sum + entry.cantidad, 0);
        
        const totalSalida = salidas
            .filter(salida => salida.codigo === codigo)
            .reduce((sum, salida) => sum + salida.salidaDia, 0);

        producto.entrada = totalEntrada;
        producto.salida = totalSalida;
        producto.saldo = totalEntrada - totalSalida;
    }
    guardarInventario();
}

// Mostrar tablas con productos, entradas y salidas
function mostrarTablas() {
    inventory.forEach(producto => actualizarSaldo(producto.codigo));

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
                        <th>Precio Venta</th>
                        <th>Precio Compra</th>
                        <th>Líquido Ganable</th>
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
                            <td>${producto.precioVenta.toFixed(2)}</td>
                            <td>${producto.precioCompra.toFixed(2)}</td>
                            <td>${producto.liquidoGanable.toFixed(2)}</td>
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
    guardarInventario();
});

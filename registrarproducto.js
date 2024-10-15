// Cargar el inventario desde localStorage
let inventory = JSON.parse(localStorage.getItem('inventory')) || [];

// Escuchar el evento "Enter" en el campo de código para autocompletar
document.getElementById('codigo').addEventListener('keypress', function (event) {
    if (event.key === 'Enter') {
        event.preventDefault(); // Evitar recarga de página
        autocompletarProducto(); // Llamar a la función de autocompletar
    }
});

// Función para autocompletar los campos según el código ingresado
function autocompletarProducto() {
    const codigo = document.getElementById('codigo').value.trim();
    const producto = inventory.find(item => item.codigo === codigo);

    if (producto) {
        document.getElementById('descripcion').value = producto.descripcion;
        document.getElementById('unidad').value = producto.medida;
        document.getElementById('saldo').value = producto.saldo;
    } else {
        alert('Producto no encontrado.');
        limpiarCampos();
    }
}

// Función para limpiar los campos
function limpiarCampos() {
    document.getElementById('descripcion').value = '';
    document.getElementById('unidad').value = '';
    document.getElementById('saldo').value = '';
}

// Función para registrar un nuevo ingreso
function registrarProducto(event) {
    event.preventDefault(); // Evita el recargo de la página

    const codigo = document.getElementById('codigo').value.trim();
    const fecha = document.getElementById('fecha').value;
    const cantidadIngreso = parseInt(document.getElementById('cantidadIngreso').value);

    const producto = inventory.find(item => item.codigo === codigo);

    if (producto) {
        producto.saldo += cantidadIngreso; // Actualizar saldo
        guardarInventario(); // Guardar en localStorage
        alert('Producto registrado correctamente.');
        document.querySelector('form').reset(); // Limpiar formulario
    } else {
        alert('Código de producto no válido.');
    }
}

// Función para guardar el inventario actualizado en localStorage
function guardarInventario() {
    localStorage.setItem('inventory', JSON.stringify(inventory));
}

// Función para revisar detalles del producto
function revisarDetalles() {
    const codigo = document.getElementById('codigo').value.trim();
    const producto = inventory.find(item => item.codigo === codigo);

    if (producto) {
        alert(`
            Detalles del Producto:
            Código: ${producto.codigo}
            Descripción: ${producto.descripcion}
            Unidad: ${producto.medida}
            Saldo: ${producto.saldo}
        `);
    } else {
        alert('Producto no encontrado.');
    }
}

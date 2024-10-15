// Cargar productos del localStorage o una lista de ejemplo
let inventory = JSON.parse(localStorage.getItem('inventory')) || [];

// Función para buscar y autocompletar el producto
function autocompletarProducto() {
    const codigo = document.getElementById('codigo').value.trim();
    const producto = inventory.find(item => item.codigo === codigo);

    if (producto) {
        document.getElementById('descripcion').value = producto.descripcion;
        document.getElementById('unidad').value = producto.medida;
        document.getElementById('saldo').value = producto.saldo;
    } else {
        document.getElementById('descripcion').value = '';
        document.getElementById('unidad').value = '';
        document.getElementById('saldo').value = '';
        alert('Producto no encontrado.');
    }
}

// Escuchar el evento "Enter" en el campo de código
document.getElementById('codigo').addEventListener('keypress', function (event) {
    if (event.key === 'Enter') {
        event.preventDefault(); // Evitar que se recargue la página
        autocompletarProducto(); // Llamar a la función de autocompletar
    }
});

// Función para registrar un nuevo ingreso
function registrarProducto(event) {
    event.preventDefault(); // Evita el recargo de la página

    const codigo = document.getElementById('codigo').value.trim();
    const fecha = document.getElementById('fecha').value;
    const cantidadIngreso = parseInt(document.getElementById('cantidadIngreso').value);

    const producto = inventory.find(item => item.codigo === codigo);

    if (producto) {
        producto.saldo += cantidadIngreso; // Actualizar el saldo
        guardarInventario(); // Guardar en localStorage
        alert('Producto registrado correctamente.');
        document.querySelector('form').reset(); // Limpiar el formulario
    } else {
        alert('Código de producto no válido.');
    }
}

// Función para guardar el inventario en localStorage
function guardarInventario() {
    localStorage.setItem('inventory', JSON.stringify(inventory));
}

// Función para revisar los detalles de un producto
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

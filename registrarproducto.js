// Cargar productos del localStorage o una lista de ejemplo
let inventory = JSON.parse(localStorage.getItem('inventory')) || [];

// Función para autocompletar los campos cuando se ingresa un código
document.getElementById('codigo').addEventListener('input', (event) => {
    const producto = inventory.find(item => item.codigo === event.target.value);

    if (producto) {
        document.getElementById('descripcion').value = producto.descripcion;
        document.getElementById('unidad').value = producto.medida;
        document.getElementById('saldo').value = producto.saldo;
    } else {
        document.getElementById('descripcion').value = '';
        document.getElementById('unidad').value = '';
        document.getElementById('saldo').value = '';
    }
});

// Función para registrar un nuevo ingreso
function registrarProducto(event) {
    event.preventDefault(); // Evita el recargo de la página

    const codigo = document.getElementById('codigo').value;
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
    const codigo = document.getElementById('codigo').value;
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

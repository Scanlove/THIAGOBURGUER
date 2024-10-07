let sales = JSON.parse(localStorage.getItem('sales')) || [];
let caja = JSON.parse(localStorage.getItem('caja')) || { montoInicial: 0, totalVentas: 0, ventas: [] };
let expenses = JSON.parse(localStorage.getItem('expenses')) || [];

// Función para mostrar el reporte de ventas del día
function reporteVentasDia() {
    const today = new Date().toLocaleDateString();
    const todaySales = sales.filter(sale => sale.date === today);
    const totalVentasDia = todaySales.reduce((sum, sale) => sum + sale.total, 0);

    const content = `
        <h3>Reporte de Ventas del Día (${today})</h3>
        <table>
            <thead>
                <tr>
                    <th>Producto</th>
                    <th>Cantidad Vendida</th>
                    <th>Total</th>
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
        <p>Total de Ventas del Día: $${totalVentasDia.toFixed(2)}</p>
    `;
    document.getElementById('reportesContent').innerHTML = content;
}

// Función para mostrar el reporte de ventas del mes
function reporteVentasMes() {
    const currentMonth = new Date().getMonth();
    const currentYear = new Date().getFullYear();
    const monthSales = sales.filter(sale => {
        const saleDate = new Date(sale.date);
        return saleDate.getMonth() === currentMonth && saleDate.getFullYear() === currentYear;
    });
    const totalVentasMes = monthSales.reduce((sum, sale) => sum + sale.total, 0);

    const content = `
        <h3>Reporte de Ventas del Mes</h3>
        <table>
            <thead>
                <tr>
                    <th>Producto</th>
                    <th>Cantidad Vendida</th>
                    <th>Total</th>
                </tr>
            </thead>
            <tbody>
                ${monthSales.map(sale => `
                    <tr>
                        <td>${sale.name}</td>
                        <td>${sale.quantity}</td>
                        <td>$${sale.total.toFixed(2)}</td>
                    </tr>
                `).join('')}
            </tbody>
        </table>
        <p>Total de Ventas del Mes: $${totalVentasMes.toFixed(2)}</p>
    `;
    document.getElementById('reportesContent').innerHTML = content;
}

// Función para mostrar las ventas acumuladas por producto
function winchaPorProducto() {
    const ventasPorProducto = sales.reduce((acc, sale) => {
        acc[sale.name] = (acc[sale.name] || 0) + sale.quantity;
        return acc;
    }, {});

    const content = `
        <h3>Wincha por Producto</h3>
        <ul>
            ${Object.entries(ventasPorProducto).map(([name, quantity]) => `
                <li>${name}: ${quantity} unidades vendidas</li>
            `).join('')}
        </ul>
    `;

    document.getElementById('reportesContent').innerHTML = content;
}

// Función para mostrar el arqueo de caja
function winchaArqueoCaja() {
    const totalVentas = caja.ventas.reduce((sum, venta) => sum + venta.total, 0);
    const totalCaja = caja.montoInicial + totalVentas;

    const content = `
        <h3>Wincha Arqueo de Caja</h3>
        <p>Total de Ventas: $${totalVentas.toFixed(2)}</p>
        <p>Monto Inicial: $${caja.montoInicial.toFixed(2)}</p>
        <p>Total en Caja: $${totalCaja.toFixed(2)}</p>
    `;

    document.getElementById('reportesContent').innerHTML = content;
}

// Función para mostrar la cantidad de tickets vendidos
function winchaTicketsVendidos() {
    const today = new Date().toLocaleDateString();
    const todaySales = sales.filter(sale => sale.date === today);
    const ticketsVendidos = todaySales.length;

    const content = `
        <h3>Wincha Tickets Vendidos (${today})</h3>
        <p>Total de tickets vendidos hoy: ${ticketsVendidos}</p>
    `;

    document.getElementById('reportesContent').innerHTML = content;
}

// Función para mostrar un informe detallado del día
function winchaReporteDia() {
    const today = new Date().toLocaleDateString();
    const todaySales = sales.filter(sale => sale.date === today);
    const totalVentas = todaySales.reduce((sum, sale) => sum + sale.total, 0);
    const todayExpenses = expenses.filter(expense => expense.date === today);
    const totalGastos = todayExpenses.reduce((sum, expense) => sum + expense.amount, 0);
    const totalCaja = caja.montoInicial + totalVentas - totalGastos;

    const content = `
        <h3>Wincha Reporte del Día (${today})</h3>
        <p>Total de Ventas: $${totalVentas.toFixed(2)}</p>
        <p>Total de Gastos: $${totalGastos.toFixed(2)}</p>
        <p>Total en Caja al Final del Día: $${totalCaja.toFixed(2)}</p>
        <h4>Detalle de Ventas:</h4>
        <ul>
            ${todaySales.map(sale => `
                <li>${sale.name} - ${sale.quantity} unidades - $${sale.total.toFixed(2)}</li>
            `).join('')}
        </ul>
        <h4>Detalle de Gastos:</h4>
        <ul>
            ${todayExpenses.map(expense => `
                <li>${expense.description} - $${expense.amount.toFixed(2)}</li>
            `).join('')}
        </ul>
    `;

    document.getElementById('reportesContent').innerHTML = content;
}

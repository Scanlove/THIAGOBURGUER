function generateReport() {
    const totalSales = sales.reduce((sum, sale) => sum + sale.total, 0);
    const totalProductsSold = sales.reduce((sum, sale) => sum + sale.quantity, 0);
    const totalPurchases = purchases.reduce((sum, purchase) => sum + (purchase.quantity * purchase.price), 0);
    const reportContent = document.getElementById('reportContent');
    
    reportContent.innerHTML = `
        <p>Total de ventas: $${totalSales.toFixed(2)}</p>
        <p>Total de productos vendidos: ${totalProductsSold}</p>
        <p>Total de compras: $${totalPurchases.toFixed(2)}</p>
        <h3>Historial de Ventas</h3>
        <ul>
            ${sales.map(sale => `<li>${sale.quantity} x ${sale.name} = $${sale.total.toFixed(2)}</li>`).join('')}
        </ul>
        <h3>Historial de Compras</h3>
        <ul>
            ${purchases.map(purchase => `<li>${purchase.quantity} x ${purchase.name} = $${(purchase.quantity * purchase.price).toFixed(2)}</li>`).join('')}
        </ul>
    `;
}

document.addEventListener('DOMContentLoaded', () => {
    generateReport();
});

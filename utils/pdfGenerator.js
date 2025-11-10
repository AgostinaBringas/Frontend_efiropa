import jsPDF from 'jspdf';
import 'jspdf-autotable';

export const generateSalePDF = ({ sale }) => {
  const doc = new jsPDF();
  doc.setFontSize(16);
  doc.text('Boleta de venta', 14, 20);
  doc.setFontSize(10);
  doc.text(`Fecha: ${new Date(sale.fecha).toLocaleString()}`, 14, 28);
  doc.text(`Vendedor: ${sale.vendedorNombre || sale.user?.nombre || '—'}`, 14, 34);

  const rows = sale.items.map(i => [
    i.nombre,
    i.talla,
    i.color,
    i.cantidad,
    Number(i.precio_unitario).toFixed(2),
    (i.cantidad * Number(i.precio_unitario)).toFixed(2)
  ]);

  doc.autoTable({
    head: [['Prenda', 'Talla','Color','Cant','P.unit','Subtotal']],
    body: rows,
    startY: 42,
  });

  doc.text(`Total: $ ${Number(sale.total).toFixed(2)}`, 14, doc.lastAutoTable.finalY + 10);
  return doc;
};

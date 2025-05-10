// Total de Ventas
db.ventas.aggregate([
  { $group: { _id: null, total_venta: { $sum: "$total_venta" } } },
  { $project: { _id: 0, total_venta: 1 } }
])

// Número de productos por categía.
db.productos.aggregate([
  { $group: { _id: "$categoria", cantidad: { $sum: 1 } } }
])

// Conteo de clientes por barrio.
db.clientes.aggregate([
  {
    $group: {
      _id: "$direccion.barrio",
      totalClientes: { $sum: 1 }
    }
  }
])


db.productos.updateOne(
    { nombre: "Camiseta Metallica - Edición #1" },
    { $set: { stock: 30 } }
  )
  
  
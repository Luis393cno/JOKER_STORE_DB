// Obtener los primeros 50 productos 
const docs = db.productos.find().limit(50).toArray();

// Extraer los _id de esos productos
const ids = docs.map(doc => doc._id);

// Eliminar los productos con esos _id
const resultado = db.productos.deleteMany({ _id: { $in: ids } });

// Confirmar en consola
print(`Se eliminaron ${resultado.deletedCount} productos.`);

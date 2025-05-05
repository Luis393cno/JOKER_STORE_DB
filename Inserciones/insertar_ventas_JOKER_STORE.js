use JOKER_STORE

db.ventas.insertMany([
  {
    cliente_id: "cliente_1",
    productos: [
      {
        producto_id: "producto_5",
        nombre: "Camiseta Metallica - Edición #5",
        cantidad: 2,
        precio_unitario: 85000
      }
    ],
    total_venta: 170000,
    fecha_venta: ISODate("2024-11-20T14:20:00Z"),
    metodo_pago: "Nequi"
  },
  {
    cliente_id: "cliente_2",
    productos: [
      {
        producto_id: "producto_12",
        nombre: "Camiseta Iron Maiden - Edición #12",
        cantidad: 1,
        precio_unitario: 87000
      },
      {
        producto_id: "producto_45",
        nombre: "Camiseta Slayer - Edición #45",
        cantidad: 3,
        precio_unitario: 79000
      }
    ],
    total_venta: 87000 + (3 * 79000),
    fecha_venta: ISODate("2025-01-15T10:15:00Z"),
    metodo_pago: "Daviplata"
  },
  {
    cliente_id: "cliente_3",
    productos: [
      {
        producto_id: "producto_7",
        nombre: "Camiseta Nightwish - Edición #7",
        cantidad: 1,
        precio_unitario: 95000
      }
    ],
    total_venta: 95000,
    fecha_venta: ISODate("2025-02-22T17:00:00Z"),
    metodo_pago: "Tarjeta"
  },
  {
    cliente_id: "cliente_4",
    productos: [
      {
        producto_id: "producto_8",
        nombre: "Camiseta Nightwish - Edición #7",
        cantidad: 1,
        precio_unitario: 95000
      }
    ],
    total_venta: 95000,
    fecha_venta: ISODate("2025-02-22T17:00:00Z"),
    metodo_pago: "Tarjeta"
  },
  {
    cliente_id: "cliente_5",
    productos: [
        {
            producto_id: "producto_9",
            nombre: "Camiseta Metallica - Edición #1",
            cantidad: 5,
            precio_unitario: 89783
        }
    ],
    total_venta: (89783*5),
    fecha_venta: ISODate("2025-02-22T17:00:00Z"),
    metodo_pago: "Nequi"
  },
  {
    cliente_id: "cliente_6",
    productos: [
        {
            producto_id: "producto_10",
            nombre: "amiseta Nightwish - Edición #8",
            cantidad: 1,
            precio_unitario: 92284,
        },
        {
            producto_id: "producto_11",
            nombre: "Camiseta Megadeth - Edición #11",
            cantidad: 6,
            precio_unitario: 54159
        }
    ],
    total_venta: 92284 + (54159*6),
    fecha_venta: ISODate("2025-02-22T17:00:00Z"),
    metodo_pago: "Daviplata"
  },
  {
    cliente_id: "cliente_7",
    productos: [
      {
        producto_id: "producto_5",
        nombre: "Camiseta Metallica - Edición #5",
        cantidad: 2,
        precio_unitario: 85000
      }
    ],
    total_venta: 170000,
    fecha_venta: ISODate("2024-11-20T14:20:00Z"),
    metodo_pago: "Nequi"
  },
  {
    cliente_id: "cliente_8",
    productos: [
      {
        producto_id: "producto_12",
        nombre: "Camiseta Iron Maiden - Edición #12",
        cantidad: 1,
        precio_unitario: 87000
      },
      {
        producto_id: "producto_45",
        nombre: "Camiseta Slayer - Edición #45",
        cantidad: 3,
        precio_unitario: 79000
      }
    ],
    total_venta: 87000 + (3 * 79000),
    fecha_venta: ISODate("2025-01-15T10:15:00Z"),
    metodo_pago: "Daviplata"
  },
  {
    cliente_id: "cliente_9",
    productos: [
      {
        producto_id: "producto_7",
        nombre: "Camiseta Nightwish - Edición #7",
        cantidad: 1,
        precio_unitario: 95000
      }
    ],
    total_venta: 95000,
    fecha_venta: ISODate("2025-02-22T17:00:00Z"),
    metodo_pago: "Tarjeta"
  },
  {
    cliente_id: "cliente_10",
    productos: [
      {
        producto_id: "producto_8",
        nombre: "Camiseta Nightwish - Edición #7",
        cantidad: 1,
        precio_unitario: 95000
      }
    ],
    total_venta: 95000,
    fecha_venta: ISODate("2025-02-22T17:00:00Z"),
    metodo_pago: "Tarjeta"
  },
  {
    cliente_id: "cliente_11",
    productos: [
        {
            producto_id: "producto_9",
            nombre: "Camiseta Metallica - Edición #1",
            cantidad: 5,
            precio_unitario: 89783
        }
    ],
    total_venta: (89783*5),
    fecha_venta: ISODate("2025-02-22T17:00:00Z"),
    metodo_pago: "Nequi"
  },
  {
    cliente_id: "cliente_12",
    productos: [
        {
            producto_id: "producto_10",
            nombre: "amiseta Nightwish - Edición #8",
            cantidad: 1,
            precio_unitario: 92284,
        },
        {
            producto_id: "producto_11",
            nombre: "Camiseta Megadeth - Edición #11",
            cantidad: 6,
            precio_unitario: 54159
        }
    ],
    total_venta: 92284 + (54159*6),
    fecha_venta: ISODate("2025-02-22T17:00:00Z"),
    metodo_pago: "Daviplata"
  },
  {
    cliente_id: "cliente_13",
    productos: [
      {
        producto_id: "producto_5",
        nombre: "Camiseta Metallica - Edición #5",
        cantidad: 2,
        precio_unitario: 85000
      }
    ],
    total_venta: 170000,
    fecha_venta: ISODate("2024-11-20T14:20:00Z"),
    metodo_pago: "Nequi"
  },
  {
    cliente_id: "cliente_14",
    productos: [
      {
        producto_id: "producto_12",
        nombre: "Camiseta Iron Maiden - Edición #12",
        cantidad: 1,
        precio_unitario: 87000
      },
      {
        producto_id: "producto_45",
        nombre: "Camiseta Slayer - Edición #45",
        cantidad: 3,
        precio_unitario: 79000
      }
    ],
    total_venta: 87000 + (3 * 79000),
    fecha_venta: ISODate("2025-01-15T10:15:00Z"),
    metodo_pago: "Daviplata"
  },
  {
    cliente_id: "cliente_15",
    productos: [
      {
        producto_id: "producto_7",
        nombre: "Camiseta Nightwish - Edición #7",
        cantidad: 1,
        precio_unitario: 95000
      }
    ],
    total_venta: 95000,
    fecha_venta: ISODate("2025-02-22T17:00:00Z"),
    metodo_pago: "Tarjeta"
  },
  {
    cliente_id: "cliente_16",
    productos: [
      {
        producto_id: "producto_8",
        nombre: "Camiseta Nightwish - Edición #7",
        cantidad: 1,
        precio_unitario: 95000
      }
    ],
    total_venta: 95000,
    fecha_venta: ISODate("2025-02-22T17:00:00Z"),
    metodo_pago: "Tarjeta"
  },
  {
    cliente_id: "cliente_17",
    productos: [
        {
            producto_id: "producto_9",
            nombre: "Camiseta Metallica - Edición #1",
            cantidad: 5,
            precio_unitario: 89783
        }
    ],
    total_venta: (89783*5),
    fecha_venta: ISODate("2025-02-22T17:00:00Z"),
    metodo_pago: "Nequi"
  },
  {
    cliente_id: "cliente_18",
    productos: [
        {
            producto_id: "producto_10",
            nombre: "amiseta Nightwish - Edición #8",
            cantidad: 1,
            precio_unitario: 92284,
        },
        {
            producto_id: "producto_11",
            nombre: "Camiseta Megadeth - Edición #11",
            cantidad: 6,
            precio_unitario: 54159
        }
    ],
    total_venta: 92284 + (54159*6),
    fecha_venta: ISODate("2025-02-22T17:00:00Z"),
    metodo_pago: "Daviplata"
  },
  {
    cliente_id: "cliente_19",
    productos: [
      {
        producto_id: "producto_5",
        nombre: "Camiseta Metallica - Edición #5",
        cantidad: 2,
        precio_unitario: 85000
      }
    ],
    total_venta: 170000,
    fecha_venta: ISODate("2024-11-20T14:20:00Z"),
    metodo_pago: "Nequi"
  },
  {
    cliente_id: "cliente_20",
    productos: [
      {
        producto_id: "producto_12",
        nombre: "Camiseta Iron Maiden - Edición #12",
        cantidad: 1,
        precio_unitario: 87000
      },
      {
        producto_id: "producto_45",
        nombre: "Camiseta Slayer - Edición #45",
        cantidad: 3,
        precio_unitario: 79000
      }
    ],
    total_venta: 87000 + (3 * 79000),
    fecha_venta: ISODate("2025-01-15T10:15:00Z"),
    metodo_pago: "Daviplata"
  },
  {
    cliente_id: "cliente_21",
    productos: [
      {
        producto_id: "producto_7",
        nombre: "Camiseta Nightwish - Edición #7",
        cantidad: 1,
        precio_unitario: 95000
      }
    ],
    total_venta: 95000,
    fecha_venta: ISODate("2025-02-22T17:00:00Z"),
    metodo_pago: "Tarjeta"
  },
  {
    cliente_id: "cliente_22",
    productos: [
      {
        producto_id: "producto_8",
        nombre: "Camiseta Nightwish - Edición #7",
        cantidad: 1,
        precio_unitario: 95000
      }
    ],
    total_venta: 95000,
    fecha_venta: ISODate("2025-02-22T17:00:00Z"),
    metodo_pago: "Tarjeta"
  },
  {
    cliente_id: "cliente_23",
    productos: [
        {
            producto_id: "producto_9",
            nombre: "Camiseta Metallica - Edición #1",
            cantidad: 5,
            precio_unitario: 89783
        }
    ],
    total_venta: (89783*5),
    fecha_venta: ISODate("2025-02-22T17:00:00Z"),
    metodo_pago: "Nequi"
  },
  {
    cliente_id: "cliente_24",
    productos: [
        {
            producto_id: "producto_10",
            nombre: "amiseta Nightwish - Edición #8",
            cantidad: 1,
            precio_unitario: 92284,
        },
        {
            producto_id: "producto_11",
            nombre: "Camiseta Megadeth - Edición #11",
            cantidad: 6,
            precio_unitario: 54159
        }
    ],
    total_venta: 92284 + (54159*6),
    fecha_venta: ISODate("2025-02-22T17:00:00Z"),
    metodo_pago: "Daviplata"
  },
  {
    cliente_id: "cliente_25",
    productos: [
      {
        producto_id: "producto_5",
        nombre: "Camiseta Metallica - Edición #5",
        cantidad: 2,
        precio_unitario: 85000
      }
    ],
    total_venta: 170000,
    fecha_venta: ISODate("2024-11-20T14:20:00Z"),
    metodo_pago: "Nequi"
  },
  {
    cliente_id: "cliente_26",
    productos: [
      {
        producto_id: "producto_12",
        nombre: "Camiseta Iron Maiden - Edición #12",
        cantidad: 1,
        precio_unitario: 87000
      },
      {
        producto_id: "producto_45",
        nombre: "Camiseta Slayer - Edición #45",
        cantidad: 3,
        precio_unitario: 79000
      }
    ],
    total_venta: 87000 + (3 * 79000),
    fecha_venta: ISODate("2025-01-15T10:15:00Z"),
    metodo_pago: "Daviplata"
  },
  {
    cliente_id: "cliente_27",
    productos: [
      {
        producto_id: "producto_7",
        nombre: "Camiseta Nightwish - Edición #7",
        cantidad: 1,
        precio_unitario: 95000
      }
    ],
    total_venta: 95000,
    fecha_venta: ISODate("2025-02-22T17:00:00Z"),
    metodo_pago: "Tarjeta"
  },
  {
    cliente_id: "cliente_28",
    productos: [
      {
        producto_id: "producto_8",
        nombre: "Camiseta Nightwish - Edición #7",
        cantidad: 1,
        precio_unitario: 95000
      }
    ],
    total_venta: 95000,
    fecha_venta: ISODate("2025-02-22T17:00:00Z"),
    metodo_pago: "Tarjeta"
  },
  {
    cliente_id: "cliente_29",
    productos: [
        {
            producto_id: "producto_9",
            nombre: "Camiseta Metallica - Edición #1",
            cantidad: 5,
            precio_unitario: 89783
        }
    ],
    total_venta: (89783*5),
    fecha_venta: ISODate("2025-02-22T17:00:00Z"),
    metodo_pago: "Nequi"
  },
  {
    cliente_id: "cliente_30",
    productos: [
        {
            producto_id: "producto_10",
            nombre: "amiseta Nightwish - Edición #8",
            cantidad: 1,
            precio_unitario: 92284,
        },
        {
            producto_id: "producto_11",
            nombre: "Camiseta Megadeth - Edición #11",
            cantidad: 6,
            precio_unitario: 54159
        }
    ],
    total_venta: 92284 + (54159*6),
    fecha_venta: ISODate("2025-02-22T17:00:00Z"),
    metodo_pago: "Daviplata"
  },
  {
    cliente_id: "cliente_31",
    productos: [
      {
        producto_id: "producto_5",
        nombre: "Camiseta Metallica - Edición #5",
        cantidad: 2,
        precio_unitario: 85000
      }
    ],
    total_venta: 170000,
    fecha_venta: ISODate("2024-11-20T14:20:00Z"),
    metodo_pago: "Nequi"
  },
  {
    cliente_id: "cliente_32",
    productos: [
      {
        producto_id: "producto_12",
        nombre: "Camiseta Iron Maiden - Edición #12",
        cantidad: 1,
        precio_unitario: 87000
      },
      {
        producto_id: "producto_45",
        nombre: "Camiseta Slayer - Edición #45",
        cantidad: 3,
        precio_unitario: 79000
      }
    ],
    total_venta: 87000 + (3 * 79000),
    fecha_venta: ISODate("2025-01-15T10:15:00Z"),
    metodo_pago: "Daviplata"
  },
  {
    cliente_id: "cliente_33",
    productos: [
      {
        producto_id: "producto_7",
        nombre: "Camiseta Nightwish - Edición #7",
        cantidad: 1,
        precio_unitario: 95000
      }
    ],
    total_venta: 95000,
    fecha_venta: ISODate("2025-02-22T17:00:00Z"),
    metodo_pago: "Tarjeta"
  },
  {
    cliente_id: "cliente_34",
    productos: [
      {
        producto_id: "producto_8",
        nombre: "Camiseta Nightwish - Edición #7",
        cantidad: 1,
        precio_unitario: 95000
      }
    ],
    total_venta: 95000,
    fecha_venta: ISODate("2025-02-22T17:00:00Z"),
    metodo_pago: "Tarjeta"
  },
  {
    cliente_id: "cliente_35",
    productos: [
        {
            producto_id: "producto_9",
            nombre: "Camiseta Metallica - Edición #1",
            cantidad: 5,
            precio_unitario: 89783
        }
    ],
    total_venta: (89783*5),
    fecha_venta: ISODate("2025-02-22T17:00:00Z"),
    metodo_pago: "Nequi"
  },
  {
    cliente_id: "cliente_36",
    productos: [
        {
            producto_id: "producto_10",
            nombre: "amiseta Nightwish - Edición #8",
            cantidad: 1,
            precio_unitario: 92284,
        },
        {
            producto_id: "producto_11",
            nombre: "Camiseta Megadeth - Edición #11",
            cantidad: 6,
            precio_unitario: 54159
        }
    ],
    total_venta: 92284 + (54159*6),
    fecha_venta: ISODate("2025-02-22T17:00:00Z"),
    metodo_pago: "Daviplata"
  },
  {
    cliente_id: "cliente_37",
    productos: [
      {
        producto_id: "producto_5",
        nombre: "Camiseta Metallica - Edición #5",
        cantidad: 2,
        precio_unitario: 85000
      }
    ],
    total_venta: 170000,
    fecha_venta: ISODate("2024-11-20T14:20:00Z"),
    metodo_pago: "Nequi"
  },
  {
    cliente_id: "cliente_38",
    productos: [
      {
        producto_id: "producto_12",
        nombre: "Camiseta Iron Maiden - Edición #12",
        cantidad: 1,
        precio_unitario: 87000
      },
      {
        producto_id: "producto_45",
        nombre: "Camiseta Slayer - Edición #45",
        cantidad: 3,
        precio_unitario: 79000
      }
    ],
    total_venta: 87000 + (3 * 79000),
    fecha_venta: ISODate("2025-01-15T10:15:00Z"),
    metodo_pago: "Daviplata"
  },
  {
    cliente_id: "cliente_39",
    productos: [
      {
        producto_id: "producto_7",
        nombre: "Camiseta Nightwish - Edición #7",
        cantidad: 1,
        precio_unitario: 95000
      }
    ],
    total_venta: 95000,
    fecha_venta: ISODate("2025-02-22T17:00:00Z"),
    metodo_pago: "Tarjeta"
  },
  {
    cliente_id: "cliente_40",
    productos: [
      {
        producto_id: "producto_8",
        nombre: "Camiseta Nightwish - Edición #7",
        cantidad: 1,
        precio_unitario: 95000
      }
    ],
    total_venta: 95000,
    fecha_venta: ISODate("2025-02-22T17:00:00Z"),
    metodo_pago: "Tarjeta"
  },
  {
    cliente_id: "cliente_41",
    productos: [
        {
            producto_id: "producto_9",
            nombre: "Camiseta Metallica - Edición #1",
            cantidad: 5,
            precio_unitario: 89783
        }
    ],
    total_venta: (89783*5),
    fecha_venta: ISODate("2025-02-22T17:00:00Z"),
    metodo_pago: "Nequi"
  },
  {
    cliente_id: "cliente_42",
    productos: [
        {
            producto_id: "producto_10",
            nombre: "amiseta Nightwish - Edición #8",
            cantidad: 1,
            precio_unitario: 92284,
        },
        {
            producto_id: "producto_11",
            nombre: "Camiseta Megadeth - Edición #11",
            cantidad: 6,
            precio_unitario: 54159
        }
    ],
    total_venta: 92284 + (54159*6),
    fecha_venta: ISODate("2025-02-22T17:00:00Z"),
    metodo_pago: "Daviplata"
  },
  {
    cliente_id: "cliente_43",
    productos: [
      {
        producto_id: "producto_5",
        nombre: "Camiseta Metallica - Edición #5",
        cantidad: 2,
        precio_unitario: 85000
      }
    ],
    total_venta: 170000,
    fecha_venta: ISODate("2024-11-20T14:20:00Z"),
    metodo_pago: "Nequi"
  },
  {
    cliente_id: "cliente_44",
    productos: [
      {
        producto_id: "producto_12",
        nombre: "Camiseta Iron Maiden - Edición #12",
        cantidad: 1,
        precio_unitario: 87000
      },
      {
        producto_id: "producto_45",
        nombre: "Camiseta Slayer - Edición #45",
        cantidad: 3,
        precio_unitario: 79000
      }
    ],
    total_venta: 87000 + (3 * 79000),
    fecha_venta: ISODate("2025-01-15T10:15:00Z"),
    metodo_pago: "Daviplata"
  },
  {
    cliente_id: "cliente_45",
    productos: [
      {
        producto_id: "producto_7",
        nombre: "Camiseta Nightwish - Edición #7",
        cantidad: 1,
        precio_unitario: 95000
      }
    ],
    total_venta: 95000,
    fecha_venta: ISODate("2025-02-22T17:00:00Z"),
    metodo_pago: "Tarjeta"
  },
  {
    cliente_id: "cliente_46",
    productos: [
      {
        producto_id: "producto_8",
        nombre: "Camiseta Nightwish - Edición #7",
        cantidad: 1,
        precio_unitario: 95000
      }
    ],
    total_venta: 95000,
    fecha_venta: ISODate("2025-02-22T17:00:00Z"),
    metodo_pago: "Tarjeta"
  },
  {
    cliente_id: "cliente_47",
    productos: [
        {
            producto_id: "producto_9",
            nombre: "Camiseta Metallica - Edición #1",
            cantidad: 5,
            precio_unitario: 89783
        }
    ],
    total_venta: (89783*5),
    fecha_venta: ISODate("2025-02-22T17:00:00Z"),
    metodo_pago: "Nequi"
  },
  {
    cliente_id: "cliente_48",
    productos: [
        {
            producto_id: "producto_10",
            nombre: "amiseta Nightwish - Edición #8",
            cantidad: 1,
            precio_unitario: 92284,
        },
        {
            producto_id: "producto_11",
            nombre: "Camiseta Megadeth - Edición #11",
            cantidad: 6,
            precio_unitario: 54159
        }
    ],
    total_venta: 92284 + (54159*6),
    fecha_venta: ISODate("2025-02-22T17:00:00Z"),
    metodo_pago: "Daviplata"
  },
  {
    cliente_id: "cliente_49",
    productos: [
      {
        producto_id: "producto_5",
        nombre: "Camiseta Metallica - Edición #5",
        cantidad: 2,
        precio_unitario: 85000
      }
    ],
    total_venta: 170000,
    fecha_venta: ISODate("2024-11-20T14:20:00Z"),
    metodo_pago: "Nequi"
  },
  {
    cliente_id: "cliente_50",
    productos: [
      {
        producto_id: "producto_12",
        nombre: "Camiseta Iron Maiden - Edición #12",
        cantidad: 1,
        precio_unitario: 87000
      },
      {
        producto_id: "producto_45",
        nombre: "Camiseta Slayer - Edición #45",
        cantidad: 3,
        precio_unitario: 79000
      }
    ],
    total_venta: 87000 + (3 * 79000),
    fecha_venta: ISODate("2025-01-15T10:15:00Z"),
    metodo_pago: "Daviplata"
  },
  {
    cliente_id: "cliente_51",
    productos: [
      {
        producto_id: "producto_7",
        nombre: "Camiseta Nightwish - Edición #7",
        cantidad: 1,
        precio_unitario: 95000
      }
    ],
    total_venta: 95000,
    fecha_venta: ISODate("2025-02-22T17:00:00Z"),
    metodo_pago: "Tarjeta"
  },
  {
    cliente_id: "cliente_52",
    productos: [
      {
        producto_id: "producto_8",
        nombre: "Camiseta Nightwish - Edición #7",
        cantidad: 1,
        precio_unitario: 95000
      }
    ],
    total_venta: 95000,
    fecha_venta: ISODate("2025-02-22T17:00:00Z"),
    metodo_pago: "Tarjeta"
  },
  {
    cliente_id: "cliente_53",
    productos: [
        {
            producto_id: "producto_9",
            nombre: "Camiseta Metallica - Edición #1",
            cantidad: 5,
            precio_unitario: 89783
        }
    ],
    total_venta: (89783*5),
    fecha_venta: ISODate("2025-02-22T17:00:00Z"),
    metodo_pago: "Nequi"
  },
  {
    cliente_id: "cliente_54",
    productos: [
        {
            producto_id: "producto_10",
            nombre: "amiseta Nightwish - Edición #8",
            cantidad: 1,
            precio_unitario: 92284,
        },
        {
            producto_id: "producto_11",
            nombre: "Camiseta Megadeth - Edición #11",
            cantidad: 6,
            precio_unitario: 54159
        }
    ],
    total_venta: 92284 + (54159*6),
    fecha_venta: ISODate("2025-02-22T17:00:00Z"),
    metodo_pago: "Daviplata"
  },
  {
    cliente_id: "cliente_55",
    productos: [
      {
        producto_id: "producto_5",
        nombre: "Camiseta Metallica - Edición #5",
        cantidad: 2,
        precio_unitario: 85000
      }
    ],
    total_venta: 170000,
    fecha_venta: ISODate("2024-11-20T14:20:00Z"),
    metodo_pago: "Nequi"
  },
  {
    cliente_id: "cliente_56",
    productos: [
      {
        producto_id: "producto_12",
        nombre: "Camiseta Iron Maiden - Edición #12",
        cantidad: 1,
        precio_unitario: 87000
      },
      {
        producto_id: "producto_45",
        nombre: "Camiseta Slayer - Edición #45",
        cantidad: 3,
        precio_unitario: 79000
      }
    ],
    total_venta: 87000 + (3 * 79000),
    fecha_venta: ISODate("2025-01-15T10:15:00Z"),
    metodo_pago: "Daviplata"
  },
  {
    cliente_id: "cliente_57",
    productos: [
      {
        producto_id: "producto_7",
        nombre: "Camiseta Nightwish - Edición #7",
        cantidad: 1,
        precio_unitario: 95000
      }
    ],
    total_venta: 95000,
    fecha_venta: ISODate("2025-02-22T17:00:00Z"),
    metodo_pago: "Tarjeta"
  },
  {
    cliente_id: "cliente_58",
    productos: [
      {
        producto_id: "producto_8",
        nombre: "Camiseta Nightwish - Edición #7",
        cantidad: 1,
        precio_unitario: 95000
      }
    ],
    total_venta: 95000,
    fecha_venta: ISODate("2025-02-22T17:00:00Z"),
    metodo_pago: "Tarjeta"
  },
  {
    cliente_id: "cliente_59",
    productos: [
        {
            producto_id: "producto_9",
            nombre: "Camiseta Metallica - Edición #1",
            cantidad: 5,
            precio_unitario: 89783
        }
    ],
    total_venta: (89783*5),
    fecha_venta: ISODate("2025-02-22T17:00:00Z"),
    metodo_pago: "Nequi"
  },
  {
    cliente_id: "cliente_60",
    productos: [
        {
            producto_id: "producto_10",
            nombre: "amiseta Nightwish - Edición #8",
            cantidad: 1,
            precio_unitario: 92284,
        },
        {
            producto_id: "producto_11",
            nombre: "Camiseta Megadeth - Edición #11",
            cantidad: 6,
            precio_unitario: 54159
        }
    ],
    total_venta: 92284 + (54159*6),
    fecha_venta: ISODate("2025-02-22T17:00:00Z"),
    metodo_pago: "Daviplata"
  },
  {
    cliente_id: "cliente_61",
    productos: [
      {
        producto_id: "producto_5",
        nombre: "Camiseta Metallica - Edición #5",
        cantidad: 2,
        precio_unitario: 85000
      }
    ],
    total_venta: 170000,
    fecha_venta: ISODate("2024-11-20T14:20:00Z"),
    metodo_pago: "Nequi"
  },
  {
    cliente_id: "cliente_62",
    productos: [
      {
        producto_id: "producto_12",
        nombre: "Camiseta Iron Maiden - Edición #12",
        cantidad: 1,
        precio_unitario: 87000
      },
      {
        producto_id: "producto_45",
        nombre: "Camiseta Slayer - Edición #45",
        cantidad: 3,
        precio_unitario: 79000
      }
    ],
    total_venta: 87000 + (3 * 79000),
    fecha_venta: ISODate("2025-01-15T10:15:00Z"),
    metodo_pago: "Daviplata"
  },
  {
    cliente_id: "cliente_63",
    productos: [
      {
        producto_id: "producto_7",
        nombre: "Camiseta Nightwish - Edición #7",
        cantidad: 1,
        precio_unitario: 95000
      }
    ],
    total_venta: 95000,
    fecha_venta: ISODate("2025-02-22T17:00:00Z"),
    metodo_pago: "Tarjeta"
  },
  {
    cliente_id: "cliente_64",
    productos: [
      {
        producto_id: "producto_8",
        nombre: "Camiseta Nightwish - Edición #7",
        cantidad: 1,
        precio_unitario: 95000
      }
    ],
    total_venta: 95000,
    fecha_venta: ISODate("2025-02-22T17:00:00Z"),
    metodo_pago: "Tarjeta"
  },
  {
    cliente_id: "cliente_65",
    productos: [
        {
            producto_id: "producto_9",
            nombre: "Camiseta Metallica - Edición #1",
            cantidad: 5,
            precio_unitario: 89783
        }
    ],
    total_venta: (89783*5),
    fecha_venta: ISODate("2025-02-22T17:00:00Z"),
    metodo_pago: "Nequi"
  },
  {
    cliente_id: "cliente_66",
    productos: [
        {
            producto_id: "producto_10",
            nombre: "amiseta Nightwish - Edición #8",
            cantidad: 1,
            precio_unitario: 92284,
        },
        {
            producto_id: "producto_11",
            nombre: "Camiseta Megadeth - Edición #11",
            cantidad: 6,
            precio_unitario: 54159
        }
    ],
    total_venta: 92284 + (54159*6),
    fecha_venta: ISODate("2025-02-22T17:00:00Z"),
    metodo_pago: "Daviplata"
  },
  {
    cliente_id: "cliente_67",
    productos: [
      {
        producto_id: "producto_5",
        nombre: "Camiseta Metallica - Edición #5",
        cantidad: 2,
        precio_unitario: 85000
      }
    ],
    total_venta: 170000,
    fecha_venta: ISODate("2024-11-20T14:20:00Z"),
    metodo_pago: "Nequi"
  },
  {
    cliente_id: "cliente_68",
    productos: [
      {
        producto_id: "producto_12",
        nombre: "Camiseta Iron Maiden - Edición #12",
        cantidad: 1,
        precio_unitario: 87000
      },
      {
        producto_id: "producto_45",
        nombre: "Camiseta Slayer - Edición #45",
        cantidad: 3,
        precio_unitario: 79000
      }
    ],
    total_venta: 87000 + (3 * 79000),
    fecha_venta: ISODate("2025-01-15T10:15:00Z"),
    metodo_pago: "Daviplata"
  },
  {
    cliente_id: "cliente_69",
    productos: [
      {
        producto_id: "producto_7",
        nombre: "Camiseta Nightwish - Edición #7",
        cantidad: 1,
        precio_unitario: 95000
      }
    ],
    total_venta: 95000,
    fecha_venta: ISODate("2025-02-22T17:00:00Z"),
    metodo_pago: "Tarjeta"
  },
  {
    cliente_id: "cliente_70",
    productos: [
      {
        producto_id: "producto_8",
        nombre: "Camiseta Nightwish - Edición #7",
        cantidad: 1,
        precio_unitario: 95000
      }
    ],
    total_venta: 95000,
    fecha_venta: ISODate("2025-02-22T17:00:00Z"),
    metodo_pago: "Tarjeta"
  },
  {
    cliente_id: "cliente_71",
    productos: [
        {
            producto_id: "producto_9",
            nombre: "Camiseta Metallica - Edición #1",
            cantidad: 5,
            precio_unitario: 89783
        }
    ],
    total_venta: (89783*5),
    fecha_venta: ISODate("2025-02-22T17:00:00Z"),
    metodo_pago: "Nequi"
  },
  {
    cliente_id: "cliente_72",
    productos: [
        {
            producto_id: "producto_10",
            nombre: "amiseta Nightwish - Edición #8",
            cantidad: 1,
            precio_unitario: 92284,
        },
        {
            producto_id: "producto_11",
            nombre: "Camiseta Megadeth - Edición #11",
            cantidad: 6,
            precio_unitario: 54159
        }
    ],
    total_venta: 92284 + (54159*6),
    fecha_venta: ISODate("2025-02-22T17:00:00Z"),
    metodo_pago: "Daviplata"
  },
  {
    cliente_id: "cliente_73",
    productos: [
      {
        producto_id: "producto_5",
        nombre: "Camiseta Metallica - Edición #5",
        cantidad: 2,
        precio_unitario: 85000
      }
    ],
    total_venta: 170000,
    fecha_venta: ISODate("2024-11-20T14:20:00Z"),
    metodo_pago: "Nequi"
  },
  {
    cliente_id: "cliente_74",
    productos: [
      {
        producto_id: "producto_12",
        nombre: "Camiseta Iron Maiden - Edición #12",
        cantidad: 1,
        precio_unitario: 87000
      },
      {
        producto_id: "producto_45",
        nombre: "Camiseta Slayer - Edición #45",
        cantidad: 3,
        precio_unitario: 79000
      }
    ],
    total_venta: 87000 + (3 * 79000),
    fecha_venta: ISODate("2025-01-15T10:15:00Z"),
    metodo_pago: "Daviplata"
  },
  {
    cliente_id: "cliente_75",
    productos: [
      {
        producto_id: "producto_7",
        nombre: "Camiseta Nightwish - Edición #7",
        cantidad: 1,
        precio_unitario: 95000
      }
    ],
    total_venta: 95000,
    fecha_venta: ISODate("2025-02-22T17:00:00Z"),
    metodo_pago: "Tarjeta"
  },
  {
    cliente_id: "cliente_76",
    productos: [
      {
        producto_id: "producto_8",
        nombre: "Camiseta Nightwish - Edición #7",
        cantidad: 1,
        precio_unitario: 95000
      }
    ],
    total_venta: 95000,
    fecha_venta: ISODate("2025-02-22T17:00:00Z"),
    metodo_pago: "Tarjeta"
  },
  {
    cliente_id: "cliente_77",
    productos: [
        {
            producto_id: "producto_9",
            nombre: "Camiseta Metallica - Edición #1",
            cantidad: 5,
            precio_unitario: 89783
        }
    ],
    total_venta: (89783*5),
    fecha_venta: ISODate("2025-02-22T17:00:00Z"),
    metodo_pago: "Nequi"
  },
  {
    cliente_id: "cliente_78",
    productos: [
        {
            producto_id: "producto_10",
            nombre: "amiseta Nightwish - Edición #8",
            cantidad: 1,
            precio_unitario: 92284,
        },
        {
            producto_id: "producto_11",
            nombre: "Camiseta Megadeth - Edición #11",
            cantidad: 6,
            precio_unitario: 54159
        }
    ],
    total_venta: 92284 + (54159*6),
    fecha_venta: ISODate("2025-02-22T17:00:00Z"),
    metodo_pago: "Daviplata"
  },
  {
    cliente_id: "cliente_79",
    productos: [
      {
        producto_id: "producto_5",
        nombre: "Camiseta Metallica - Edición #5",
        cantidad: 2,
        precio_unitario: 85000
      }
    ],
    total_venta: 170000,
    fecha_venta: ISODate("2024-11-20T14:20:00Z"),
    metodo_pago: "Nequi"
  },
  {
    cliente_id: "cliente_80",
    productos: [
      {
        producto_id: "producto_12",
        nombre: "Camiseta Iron Maiden - Edición #12",
        cantidad: 1,
        precio_unitario: 87000
      },
      {
        producto_id: "producto_45",
        nombre: "Camiseta Slayer - Edición #45",
        cantidad: 3,
        precio_unitario: 79000
      }
    ],
    total_venta: 87000 + (3 * 79000),
    fecha_venta: ISODate("2025-01-15T10:15:00Z"),
    metodo_pago: "Daviplata"
  },
  {
    cliente_id: "cliente_81",
    productos: [
      {
        producto_id: "producto_7",
        nombre: "Camiseta Nightwish - Edición #7",
        cantidad: 1,
        precio_unitario: 95000
      }
    ],
    total_venta: 95000,
    fecha_venta: ISODate("2025-02-22T17:00:00Z"),
    metodo_pago: "Tarjeta"
  },
  {
    cliente_id: "cliente_82",
    productos: [
      {
        producto_id: "producto_8",
        nombre: "Camiseta Nightwish - Edición #7",
        cantidad: 1,
        precio_unitario: 95000
      }
    ],
    total_venta: 95000,
    fecha_venta: ISODate("2025-02-22T17:00:00Z"),
    metodo_pago: "Tarjeta"
  },
  {
    cliente_id: "cliente_83",
    productos: [
        {
            producto_id: "producto_9",
            nombre: "Camiseta Metallica - Edición #1",
            cantidad: 5,
            precio_unitario: 89783
        }
    ],
    total_venta: (89783*5),
    fecha_venta: ISODate("2025-02-22T17:00:00Z"),
    metodo_pago: "Nequi"
  },
  {
    cliente_id: "cliente_84",
    productos: [
        {
            producto_id: "producto_10",
            nombre: "amiseta Nightwish - Edición #8",
            cantidad: 1,
            precio_unitario: 92284,
        },
        {
            producto_id: "producto_11",
            nombre: "Camiseta Megadeth - Edición #11",
            cantidad: 6,
            precio_unitario: 54159
        }
    ],
    total_venta: 92284 + (54159*6),
    fecha_venta: ISODate("2025-02-22T17:00:00Z"),
    metodo_pago: "Daviplata"
  },
  {
    cliente_id: "cliente_85",
    productos: [
      {
        producto_id: "producto_5",
        nombre: "Camiseta Metallica - Edición #5",
        cantidad: 2,
        precio_unitario: 85000
      }
    ],
    total_venta: 170000,
    fecha_venta: ISODate("2024-11-20T14:20:00Z"),
    metodo_pago: "Nequi"
  },
  {
    cliente_id: "cliente_86",
    productos: [
      {
        producto_id: "producto_12",
        nombre: "Camiseta Iron Maiden - Edición #12",
        cantidad: 1,
        precio_unitario: 87000
      },
      {
        producto_id: "producto_45",
        nombre: "Camiseta Slayer - Edición #45",
        cantidad: 3,
        precio_unitario: 79000
      }
    ],
    total_venta: 87000 + (3 * 79000),
    fecha_venta: ISODate("2025-01-15T10:15:00Z"),
    metodo_pago: "Daviplata"
  },
  {
    cliente_id: "cliente_87",
    productos: [
      {
        producto_id: "producto_7",
        nombre: "Camiseta Nightwish - Edición #7",
        cantidad: 1,
        precio_unitario: 95000
      }
    ],
    total_venta: 95000,
    fecha_venta: ISODate("2025-02-22T17:00:00Z"),
    metodo_pago: "Tarjeta"
  },
  {
    cliente_id: "cliente_88",
    productos: [
      {
        producto_id: "producto_8",
        nombre: "Camiseta Nightwish - Edición #7",
        cantidad: 1,
        precio_unitario: 95000
      }
    ],
    total_venta: 95000,
    fecha_venta: ISODate("2025-02-22T17:00:00Z"),
    metodo_pago: "Tarjeta"
  },
  {
    cliente_id: "cliente_89",
    productos: [
        {
            producto_id: "producto_9",
            nombre: "Camiseta Metallica - Edición #1",
            cantidad: 5,
            precio_unitario: 89783
        }
    ],
    total_venta: (89783*5),
    fecha_venta: ISODate("2025-02-22T17:00:00Z"),
    metodo_pago: "Nequi"
  },
  {
    cliente_id: "cliente_90",
    productos: [
        {
            producto_id: "producto_10",
            nombre: "amiseta Nightwish - Edición #8",
            cantidad: 1,
            precio_unitario: 92284,
        },
        {
            producto_id: "producto_11",
            nombre: "Camiseta Megadeth - Edición #11",
            cantidad: 6,
            precio_unitario: 54159
        }
    ],
    total_venta: 92284 + (54159*6),
    fecha_venta: ISODate("2025-02-22T17:00:00Z"),
    metodo_pago: "Daviplata"
  },
  {
    cliente_id: "cliente_91",
    productos: [
      {
        producto_id: "producto_5",
        nombre: "Camiseta Metallica - Edición #5",
        cantidad: 2,
        precio_unitario: 85000
      }
    ],
    total_venta: 170000,
    fecha_venta: ISODate("2024-11-20T14:20:00Z"),
    metodo_pago: "Nequi"
  },
  {
    cliente_id: "cliente_92",
    productos: [
      {
        producto_id: "producto_12",
        nombre: "Camiseta Iron Maiden - Edición #12",
        cantidad: 1,
        precio_unitario: 87000
      },
      {
        producto_id: "producto_45",
        nombre: "Camiseta Slayer - Edición #45",
        cantidad: 3,
        precio_unitario: 79000
      }
    ],
    total_venta: 87000 + (3 * 79000),
    fecha_venta: ISODate("2025-02-22T17:00:00Z"),
    metodo_pago: "Daviplata"
  },
  {
    cliente_id: "cliente_93",
    productos: [
      {
        producto_id: "producto_7",
        nombre: "Camiseta Nightwish - Edición #7",
        cantidad: 1,
        precio_unitario: 95000
      }
    ],
    total_venta: 95000,
    fecha_venta: ISODate("2025-02-22T17:00:00Z"),
    metodo_pago: "Tarjeta"
  },
  {
    cliente_id: "cliente_94",
    productos: [
      {
        producto_id: "producto_8",
        nombre: "Camiseta Nightwish - Edición #7",
        cantidad: 1,
        precio_unitario: 95000
      }
    ],
    total_venta: 95000,
    fecha_venta: ISODate("2025-02-22T17:00:00Z"),
    metodo_pago: "Tarjeta"
  },
  {
    cliente_id: "cliente_95",
    productos: [
        {
            producto_id: "producto_9",
            nombre: "Camiseta Metallica - Edición #1",
            cantidad: 5,
            precio_unitario: 89783
        }
    ],
    total_venta: (89783*5),
    fecha_venta: ISODate("2025-02-22T17:00:00Z"),
    metodo_pago: "Nequi"
  },
  {
    cliente_id: "cliente_96",
    productos: [
        {
            producto_id: "producto_10",
            nombre: "amiseta Nightwish - Edición #8",
            cantidad: 1,
            precio_unitario: 92284,
        },
        {
            producto_id: "producto_11",
            nombre: "Camiseta Megadeth - Edición #11",
            cantidad: 6,
            precio_unitario: 54159
        }
    ],
    total_venta: 92284 + (54159*6),
    fecha_venta: ISODate("2025-02-22T17:00:00Z"),
    metodo_pago: "Daviplata"
  },
  {
    cliente_id: "cliente_97",
    productos: [
      {
        producto_id: "producto_7",
        nombre: "Camiseta Nightwish - Edición #7",
        cantidad: 1,
        precio_unitario: 95000
      }
    ],
    total_venta: 95000,
    fecha_venta: ISODate("2025-02-22T17:00:00Z"),
    metodo_pago: "Tarjeta"
  },
  {
    cliente_id: "cliente_98",
    productos: [
      {
        producto_id: "producto_8",
        nombre: "Camiseta Nightwish - Edición #7",
        cantidad: 1,
        precio_unitario: 95000
      }
    ],
    total_venta: 95000,
    fecha_venta: ISODate("2025-02-22T17:00:00Z"),
    metodo_pago: "Tarjeta"
  },
  {
    cliente_id: "cliente_99",
    productos: [
        {
            producto_id: "producto_9",
            nombre: "Camiseta Metallica - Edición #1",
            cantidad: 5,
            precio_unitario: 89783
        }
    ],
    total_venta: (89783*5),
    fecha_venta: ISODate("2025-02-22T17:00:00Z"),
    metodo_pago: "Nequi"
  },
  {
    cliente_id: "cliente_100",
    productos: [
        {
            producto_id: "producto_10",
            nombre: "amiseta Nightwish - Edición #8",
            cantidad: 1,
            precio_unitario: 92284,
        },
        {
            producto_id: "producto_11",
            nombre: "Camiseta Megadeth - Edición #11",
            cantidad: 6,
            precio_unitario: 54159
        }
    ],
    total_venta: 92284 + (54159*6),
    fecha_venta: ISODate("2025-02-22T17:00:00Z"),
    metodo_pago: "Daviplata"
  }
]);

// =========== CATEGORÍAS ===========
let Categorias = [
  { id: 1, nombre: "Vehículos", imagen: "vehiculos.jpg", descripcion: "Todos los tipos de vehículos", parent_id: null },
  { id: 2, nombre: "Turismos", imagen: "turismos.jpg", descripcion: "Coches para uso personal", parent_id: 1 },
  { id: 3, nombre: "SUVs", imagen: "suvs.jpg", descripcion: "Vehículos todoterreno", parent_id: 1 },
  { id: 4, nombre: "Deportivos", imagen: "deportivos.jpg", descripcion: "Alta potencia y rendimiento", parent_id: 1 },
  { id: 5, nombre: "Eléctricos", imagen: "electricos.jpg", descripcion: "Motorización eléctrica", parent_id: 1 },
  { id: 6, nombre: "Compactos", imagen: "compactos.jpg", descripcion: "Turismos tamaño reducido", parent_id: 2 },
  { id: 7, nombre: "Berlinas", imagen: "berlinas.jpg", descripcion: "Turismos tamaño grande", parent_id: 2 }
];

// =========== VEHÍCULOS ===========
let Vehiculos = [
  // Compactos
  { id: 1, nombre: "Volkswagen Golf", precio: 27999.99, descripcion: "Compacto alemán 1.5 TSI 150 CV", categoria_id: 6, activo: true },
  { id: 2, nombre: "Ford Focus", precio: 24999.00, descripcion: "Excelente manejo y confort", categoria_id: 6, activo: true },
  { id: 3, nombre: "Toyota Corolla", precio: 25999.99, descripcion: "Híbrido eficiente y fiable", categoria_id: 6, activo: true },
  { id: 4, nombre: "Opel Astra", precio: 22999.99, descripcion: "Diseño moderno y tecnología", categoria_id: 6, activo: true },
  
  // Berlinas
  { id: 5, nombre: "Mercedes Clase C", precio: 45999.00, descripcion: "Berlina premium 2.0 diésel", categoria_id: 7, activo: true },
  { id: 6, nombre: "BMW Serie 3", precio: 42999.50, descripcion: "Deportividad y lujo alemán", categoria_id: 7, activo: true },
  { id: 7, nombre: "Audi A4", precio: 41999.99, descripcion: "Calidad y tracción quattro", categoria_id: 7, activo: true },
  
  // SUVs
  { id: 8, nombre: "Toyota RAV4", precio: 34999.99, descripcion: "SUV híbrido espacioso", categoria_id: 3, activo: true },
  { id: 9, nombre: "BMW X3", precio: 54999.99, descripcion: "SUV premium deportivo", categoria_id: 3, activo: true },
  { id: 10, nombre: "Nissan Qashqai", precio: 29999.99, descripcion: "SUV compacto familiar", categoria_id: 3, activo: true },
  
  // Deportivos
  { id: 11, nombre: "Porsche 911", precio: 119999.00, descripcion: "Icono deportivo alemán", categoria_id: 4, activo: true },
  { id: 12, nombre: "Audi TT", precio: 49999.00, descripcion: "Deportivo compacto premium", categoria_id: 4, activo: true },
  
  // Eléctricos
  { id: 13, nombre: "Tesla Model 3", precio: 45999.00, descripcion: "Eléctrico 450 km autonomía", categoria_id: 5, activo: true },
  { id: 14, nombre: "Renault Zoe", precio: 29999.99, descripcion: "Eléctrico urbano 395 km", categoria_id: 5, activo: true }
];

// =========== IMÁGENES ===========
let Imagenes = [
  { id: 1, nombre: "golf_frontal", url: "/img/vehiculos/golf_front.jpg", orden: 1, vehiculo_id: 1 },
  { id: 2, nombre: "golf_lateral", url: "/img/vehiculos/golf_side.jpg", orden: 2, vehiculo_id: 1 },
  { id: 3, nombre: "golf_interior", url: "/img/vehiculos/golf_interior.jpg", orden: 3, vehiculo_id: 1 },
  { id: 4, nombre: "focus_frontal", url: "/img/vehiculos/focus_front.jpg", orden: 1, vehiculo_id: 2 },
  { id: 5, nombre: "focus_lateral", url: "/img/vehiculos/focus_side.jpg", orden: 2, vehiculo_id: 2 },
  { id: 6, nombre: "tesla_frontal", url: "/img/vehiculos/tesla_front.jpg", orden: 1, vehiculo_id: 13 },
  { id: 7, nombre: "tesla_interior", url: "/img/vehiculos/tesla_interior.jpg", orden: 2, vehiculo_id: 13 }
];

// =========== CLIENTES ===========
let Clientes = [
  {
    id: 1,
    tipo_doc: "DNI",
    documento: "12345678A",
    nombre: "Carlos",
    apellidos: "García López",
    email: "carlos@email.com",
    password: "cliente123",
    telefono: "+34600111222",
    fecha_nacimiento: "1985-05-15",
    direccion: "Calle Mayor 123",
    cp: "28013",
    ciudad: "Madrid"
  },
  {
    id: 2,
    tipo_doc: "NIE",
    documento: "X8765432B",
    nombre: "Ana",
    apellidos: "Martínez Ruiz",
    email: "ana@email.com",
    password: "cliente456",
    telefono: "+34600333444",
    fecha_nacimiento: "1990-09-22",
    direccion: "Avenida Diagonal 456",
    cp: "08021",
    ciudad: "Barcelona"
  },
  {
    id: 3,
    tipo_doc: "DNI",
    documento: "87654321C",
    nombre: "Miguel",
    apellidos: "Sánchez Díaz",
    email: "miguel@email.com",
    password: "cliente789",
    telefono: "+34600555666",
    fecha_nacimiento: "1978-12-01",
    direccion: "Plaza Ayuntamiento 7",
    cp: "46002",
    ciudad: "Valencia"
  }
];

// =========== PEDIDOS ===========
let Pedidos = [
  { id: 1, fecha: "2025-10-01 14:30", metodo_pago: "Financiación", total: 28500.50, gastos_envio: 500.00, cliente_id: 1 },
  { id: 2, fecha: "2025-10-05 09:15", metodo_pago: "Transferencia", total: 23999.99, gastos_envio: 0.00, cliente_id: 2 },
  { id: 3, fecha: "2025-10-07 18:45", metodo_pago: "Tarjeta Crédito", total: 45999.00, gastos_envio: 1000.00, cliente_id: 3 }
];

// =========== DETALLES PEDIDO ===========
let DetallesPedido = [
  { id: 1, pedido_id: 1, vehiculo_id: 1, descuento: 0.00, cantidad: 1, precio: 27999.99 },
  { id: 2, pedido_id: 1, vehiculo_id: 4, descuento: 500.00, cantidad: 1, precio: 22999.99 },
  { id: 3, pedido_id: 2, vehiculo_id: 3, descuento: 0.00, cantidad: 1, precio: 25999.99 },
  { id: 4, pedido_id: 3, vehiculo_id: 13, descuento: 1000.00, cantidad: 1, precio: 45999.00 }
];

// =========== ATRIBUTOS ===========
let Atributos = [
  { id: 1, nombre: "Motor", categoria_id: 1 },
  { id: 2, nombre: "Potencia (CV)", categoria_id: 1 },
  { id: 3, nombre: "Combustible", categoria_id: 1 },
  { id: 4, nombre: "Transmisión", categoria_id: 1 },
  { id: 5, nombre: "Consumo", categoria_id: 1 },
  { id: 6, nombre: "Aceleración 0-100", categoria_id: 4 },
  { id: 7, nombre: "Velocidad máxima", categoria_id: 4 },
  { id: 8, nombre: "Autonomía", categoria_id: 5 },
  { id: 9, nombre: "Carga rápida", categoria_id: 5 },
  { id: 10, nombre: "Puertas", categoria_id: 2 },
  { id: 11, nombre: "Plazas", categoria_id: 2 },
  { id: 12, nombre: "Maletero (L)", categoria_id: 2 }
];

// =========== ATRIBUTOS VEHÍCULO ===========
let AtributosVehiculo = [
  // Volkswagen Golf
  { vehiculo_id: 1, atributo_id: 1, valor: "1.5 TSI" },
  { vehiculo_id: 1, atributo_id: 2, valor: "150 CV" },
  { vehiculo_id: 1, atributo_id: 3, valor: "Gasolina" },
  { vehiculo_id: 1, atributo_id: 4, valor: "Automática 7v" },
  { vehiculo_id: 1, atributo_id: 5, valor: "5.8 L/100km" },
  { vehiculo_id: 1, atributo_id: 10, valor: "5" },
  { vehiculo_id: 1, atributo_id: 11, valor: "5" },
  { vehiculo_id: 1, atributo_id: 12, valor: "380" },
  
  // Toyota Corolla
  { vehiculo_id: 3, atributo_id: 1, valor: "1.8 Hybrid" },
  { vehiculo_id: 3, atributo_id: 2, valor: "122 CV" },
  { vehiculo_id: 3, atributo_id: 3, valor: "Híbrido" },
  { vehiculo_id: 3, atributo_id: 4, valor: "CVT" },
  { vehiculo_id: 3, atributo_id: 5, valor: "4.1 L/100km" },
  
  // Tesla Model 3
  { vehiculo_id: 13, atributo_id: 1, valor: "Eléctrico" },
  { vehiculo_id: 13, atributo_id: 2, valor: "283 CV" },
  { vehiculo_id: 13, atributo_id: 8, valor: "450 km" },
  { vehiculo_id: 13, atributo_id: 9, valor: "30 min (10-80%)" },
  { vehiculo_id: 13, atributo_id: 6, valor: "5.8 s" },
  
  // Porsche 911
  { vehiculo_id: 11, atributo_id: 1, valor: "3.0 Twin-Turbo" },
  { vehiculo_id: 11, atributo_id: 2, valor: "385 CV" },
  { vehiculo_id: 11, atributo_id: 6, valor: "4.2 s" },
  { vehiculo_id: 11, atributo_id: 7, valor: "293 km/h" }
];

// =========== OFERTAS ===========
let Ofertas = [
  { id: 1, descripcion: "Otoño 2025", descuento: 10.00, cupon: "OTONO10", fecha_inicio: "2025-09-01 00:00:00", fecha_fin: "2025-09-30 23:59:59" },
  { id: 2, descripcion: "Fin de Año", descuento: 15.00, cupon: "FINANIO15", fecha_inicio: "2025-12-15 00:00:00", fecha_fin: "2025-12-31 23:59:59" },
  { id: 3, descripcion: "Liquidación", descuento: 20.00, cupon: "LIQUIDA20", fecha_inicio: "2025-10-01 00:00:00", fecha_fin: "2025-10-31 23:59:59" },
  { id: 4, descripcion: "Eléctricos", descuento: 8.00, cupon: "ELECTRICO8", fecha_inicio: "2025-11-01 00:00:00", fecha_fin: "2025-11-30 23:59:59" }
];

// =========== VEHÍCULOS OFERTA ===========
let VehiculosOferta = [
  { oferta_id: 1, vehiculo_id: 1 },
  { oferta_id: 1, vehiculo_id: 2 },
  { oferta_id: 1, vehiculo_id: 3 },
  { oferta_id: 2, vehiculo_id: 5 },
  { oferta_id: 2, vehiculo_id: 6 },
  { oferta_id: 3, vehiculo_id: 11 },
  { oferta_id: 4, vehiculo_id: 13 },
  { oferta_id: 4, vehiculo_id: 14 }
];

// =========== USUARIOS SISTEMA ===========
let Usuarios = [
  { id: 1, nombre: "Administrador", email: "admin@concesionario.com", usuario: "admin", password: "Admin123!", rol_id: 1 },
  { id: 2, nombre: "Vendedor 1", email: "vendedor1@concesionario.com", usuario: "vendedor1", password: "Vendedor123", rol_id: 2 },
  { id: 3, nombre: "Vendedor 2", email: "vendedor2@concesionario.com", usuario: "vendedor2", password: "Vendedor456", rol_id: 2 }
];

// =========== ROLES ===========
let Roles = [
  { id: 1, nombre: "Administrador" },
  { id: 2, nombre: "Vendedor" }
];

// =========== FAVORITOS ===========
let Favoritos = [
  { id: 1, nombre: "Compactos económicos", cliente_id: 1 },
  { id: 2, nombre: "Deportivos", cliente_id: 2 },
  { id: 3, nombre: "Eléctricos", cliente_id: 3 }
];

// =========== COMPARADORES ===========
let Comparadores = [
  { id: 1, sesion_id: "sess001", user_agent: "Mozilla/5.0 (Windows NT 10.0)", cliente_id: 1 },
  { id: 2, sesion_id: "sess002", user_agent: "Mozilla/5.0 (iPhone)", cliente_id: 2 }
];

// =========== REGISTROS ===========
let Registros = [
  {
    id: 1,
    sesion_id: "abc123",
    user_agent: "Mozilla/5.0 (Windows NT 10.0)",
    cliente_id: 1,
    comparador_id: 1,
    favorito_id: 1,
    fecha_inicio: "2025-10-01 00:00",
    fecha_fin: "2025-10-31 23:59"
  }
];
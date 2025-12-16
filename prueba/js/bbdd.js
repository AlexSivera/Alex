// ===============================
// BASE DE DATOS SIMULADA
// NO MODIFICAR
// ===============================

// CATEGORÍAS DE VEHÍCULOS
const Categorias = [
    { id: 1, nombre: 'Económico' },
    { id: 2, nombre: 'Compacto' },
    { id: 3, nombre: 'SUV' },
    { id: 4, nombre: 'Deportivo' },
    { id: 5, nombre: 'Familiar' }
];

// VEHÍCULOS DISPONIBLES
const Vehiculos = [
    {
        id: 1,
        marca: 'Toyota',
        modelo: 'Yaris',
        año: 2021,
        kilometros: 25000,
        combustible: 'Gasolina',
        precio: 35,
        categoria_id: 1,
        activo: true,
        descripcion: 'Coche económico ideal para ciudad.'
    },
    {
        id: 2,
        marca: 'Seat',
        modelo: 'Ibiza',
        año: 2019,
        kilometros: 48000,
        combustible: 'Diésel',
        precio: 38,
        categoria_id: 1,
        activo: true,
        descripcion: 'Compacto fiable y eficiente.'
    },
    {
        id: 3,
        marca: 'Volkswagen',
        modelo: 'Golf',
        año: 2020,
        kilometros: 30000,
        combustible: 'Gasolina',
        precio: 45,
        categoria_id: 2,
        activo: true,
        descripcion: 'Equilibrio perfecto entre confort y potencia.'
    },
    {
        id: 4,
        marca: 'Peugeot',
        modelo: '3008',
        año: 2022,
        kilometros: 15000,
        combustible: 'Híbrido',
        precio: 60,
        categoria_id: 3,
        activo: true,
        descripcion: 'SUV moderno con gran espacio interior.'
    },
    {
        id: 5,
        marca: 'BMW',
        modelo: 'X5',
        año: 2018,
        kilometros: 70000,
        combustible: 'Diésel',
        precio: 90,
        categoria_id: 3,
        activo: true,
        descripcion: 'SUV premium con altas prestaciones.'
    },
    {
        id: 6,
        marca: 'Audi',
        modelo: 'A4',
        año: 2021,
        kilometros: 22000,
        combustible: 'Gasolina',
        precio: 70,
        categoria_id: 5,
        activo: true,
        descripcion: 'Familiar elegante y cómodo.'
    },
    {
        id: 7,
        marca: 'Ford',
        modelo: 'Focus',
        año: 2017,
        kilometros: 85000,
        combustible: 'Diésel',
        precio: 30,
        categoria_id: 2,
        activo: true,
        descripcion: 'Buen rendimiento y bajo consumo.'
    },
    {
        id: 8,
        marca: 'Mercedes',
        modelo: 'AMG GT',
        año: 2023,
        kilometros: 5000,
        combustible: 'Gasolina',
        precio: 150,
        categoria_id: 4,
        activo: false,
        descripcion: 'Deportivo de alta gama.'
    }
];

// RESERVAS (puede estar vacío inicialmente)
const Reservas = [
    {
        id: 1,
        nombre: 'Juan Pérez',
        dni: '12345678Z',
        email: 'juan@email.com',
        telefono: '600123456',
        fechaReserva: '2025-06-10',
        cocheId: 3,
        diasReserva: 5,
        fechaCreacion: '2025-06-01T10:30:00'
    }
];

// Base de datos de coches disponibles
const cochesDB = [
    {
        id: 1,
        marca: "Toyota",
        modelo: "Corolla",
        año: 2022,
        kilometros: 15000,
        precio: 22000,
        color: "Rojo",
        combustible: "Gasolina",
        transmision: "Automática",
        imagen: "https://images.unsplash.com/photo-1617469767053-d3b523a0b982?w=400&h=300&fit=crop",
        disponible: true
    },
    {
        id: 2,
        marca: "Ford",
        modelo: "Focus",
        año: 2021,
        kilometros: 25000,
        precio: 19500,
        color: "Azul",
        combustible: "Diésel",
        transmision: "Manual",
        imagen: "https://images.unsplash.com/photo-1549399542-7e3f8b79c341?w=400&h=300&fit=crop",
        disponible: true
    },
    {
        id: 3,
        marca: "BMW",
        modelo: "Serie 3",
        año: 2023,
        kilometros: 5000,
        precio: 35000,
        color: "Negro",
        combustible: "Híbrido",
        transmision: "Automática",
        imagen: "https://images.unsplash.com/photo-1555212697-194d092e3b8f?w=400&h=300&fit=crop",
        disponible: true
    },
    {
        id: 4,
        marca: "Mercedes",
        modelo: "Clase A",
        año: 2020,
        kilometros: 40000,
        precio: 28000,
        color: "Blanco",
        combustible: "Gasolina",
        transmision: "Automática",
        imagen: "https://images.unsplash.com/photo-1563720223488-8f2f62a6e71a?w=400&h=300&fit=crop",
        disponible: true
    },
    {
        id: 5,
        marca: "Audi",
        modelo: "A4",
        año: 2021,
        kilometros: 30000,
        precio: 32000,
        color: "Gris",
        combustible: "Diésel",
        transmision: "Automática",
        imagen: "https://images.unsplash.com/photo-1551766883-8c7c43a8589f?w=400&h=300&fit=crop",
        disponible: true
    },
    {
        id: 6,
        marca: "Volkswagen",
        modelo: "Golf",
        año: 2019,
        kilometros: 60000,
        precio: 18000,
        color: "Plateado",
        combustible: "Gasolina",
        transmision: "Manual",
        imagen: "https://images.unsplash.com/photo-1621007947382-bb3c3994e3fb?w=400&h=300&fit=crop",
        disponible: true
    },
    {
        id: 7,
        marca: "Toyota",
        modelo: "RAV4",
        año: 2022,
        kilometros: 12000,
        precio: 28000,
        color: "Azul",
        combustible: "Híbrido",
        transmision: "Automática",
        imagen: "https://images.unsplash.com/photo-1593941707882-a5bba53388fe?w=400&h=300&fit=crop",
        disponible: true
    },
    {
        id: 8,
        marca: "Honda",
        modelo: "Civic",
        año: 2020,
        kilometros: 35000,
        precio: 21000,
        color: "Rojo",
        combustible: "Gasolina",
        transmision: "Manual",
        imagen: "https://images.unsplash.com/photo-1544636331-e26879cd4d9b?w=400&h=300&fit=crop",
        disponible: true
    }
];

// Base de datos de reservas (se almacenará en localStorage)
let reservasDB = JSON.parse(localStorage.getItem('reservasConcesionario')) || [
    {
        id: 1,
        cliente: {
            nombre: "Juan Pérez",
            dni: "12345678A",
            email: "juan@email.com",
            telefono: "612345678",
            fechaReserva: "2024-01-15"
        },
        cocheId: 1,
        diasReserva: 3,
        fechaCreacion: "2024-01-10"
    },
    {
        id: 2,
        cliente: {
            nombre: "María García",
            dni: "87654321B",
            email: "maria@email.com",
            telefono: "698765432",
            fechaReserva: "2024-01-20"
        },
        cocheId: 3,
        diasReserva: 5,
        fechaCreacion: "2024-01-12"
    }
];

// Función para guardar reservas en localStorage
function guardarReservas() {
    localStorage.setItem('reservasConcesionario', JSON.stringify(reservasDB));
}

// Función para obtener coche por ID
function obtenerCochePorId(id) {
    return cochesDB.find(coche => coche.id === id);
}

// Función para obtener reserva por ID
function obtenerReservaPorId(id) {
    return reservasDB.find(reserva => reserva.id === id);
}

// Función para agregar nueva reserva
function agregarReserva(reserva) {
    reservasDB.push(reserva);
    guardarReservas();
}

// Función para actualizar reserva
function actualizarReserva(id, datosActualizados) {
    const index = reservasDB.findIndex(reserva => reserva.id === id);
    if (index !== -1) {
        reservasDB[index] = { ...reservasDB[index], ...datosActualizados };
        guardarReservas();
        return true;
    }
    return false;
}

// Función para eliminar reserva
function eliminarReserva(id) {
    const index = reservasDB.findIndex(reserva => reserva.id === id);
    if (index !== -1) {
        reservasDB.splice(index, 1);
        guardarReservas();
        return true;
    }
    return false;
}

// Función para obtener todos los coches
function obtenerTodosLosCoches() {
    return [...cochesDB];
}

// Función para obtener todas las reservas
function obtenerTodasLasReservas() {
    return [...reservasDB];
}

// Inicializar localStorage si está vacío
if (!localStorage.getItem('reservasConcesionario')) {
    guardarReservas();
}
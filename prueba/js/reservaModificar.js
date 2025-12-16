// reservaModificar.js
document.addEventListener('DOMContentLoaded', function() {
    main();
});

function main() {
    cargarReserva();
    configurarEventos();
}

function cargarReserva() {
    const urlParams = new URLSearchParams(window.location.search);
    const reservaId = parseInt(urlParams.get('id'));

    if (!reservaId) {
        mostrarMensaje('No se ha especificado reserva.', true);
        return;
    }

    const reservas = JSON.parse(localStorage.getItem('reservas_concesionario')) || [];
    const reserva = reservas.find(r => r.id === reservaId);

    if (!reserva) {
        mostrarMensaje('Reserva no encontrada.', true);
        return;
    }

    // Rellenar formulario
    document.getElementById('reservaId').value = reserva.id;
    document.getElementById('nombre').value = reserva.nombre;
    document.getElementById('dni').value = reserva.dni;
    document.getElementById('email').value = reserva.email;
    document.getElementById('telefono').value = reserva.telefono;
    document.getElementById('fechaReserva').value = reserva.fechaReserva;
    document.getElementById('diasReserva').value = reserva.diasReserva;
    document.getElementById('cocheId').value = reserva.cocheId;

    mostrarCoche(reserva.cocheId);
}

function mostrarCoche(cocheId) {
    const coche = Vehiculos.find(c => c.id === cocheId);
    if (!coche) return;

    const detalles = document.getElementById('detallesCoche');
    detalles.textContent = `${coche.marca} ${coche.modelo} - ${coche.precio.toLocaleString('es-ES', { style:'currency', currency:'EUR' })}`;
}

function configurarEventos() {
    const form = document.getElementById('formModificarReserva');

    form.addEventListener('submit', function(e) {
        e.preventDefault();
        const errores = validarFormulario();
        mostrarErrores(errores);

        if (errores.length === 0) {
            actualizarReserva();
        }
    });
}

// ===== Validaciones =====
function validarFormulario() {
    const errores = [];

    const nombre = document.getElementById('nombre').value.trim();
    const dni = document.getElementById('dni').value.trim().toUpperCase();
    const email = document.getElementById('email').value.trim();
    const telefono = document.getElementById('telefono').value.trim();
    const fechaReserva = document.getElementById('fechaReserva').value;
    const diasReserva = parseInt(document.getElementById('diasReserva').value);

    if (!/^[A-Za-zÁÉÍÓÚáéíóúñÑ\s]{3,50}$/.test(nombre)) errores.push('Nombre inválido (3-50 letras).');
    if (!validarDNI(dni)) errores.push('DNI inválido.');
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) errores.push('Email inválido.');
    if (!/^[0-9]{9}$/.test(telefono)) errores.push('Teléfono inválido (9 dígitos).');
    if (!fechaReserva) errores.push('Fecha de reserva requerida.');
    if (isNaN(diasReserva) || diasReserva < 1 || diasReserva > 30) errores.push('Días de reserva entre 1 y 30.');

    return errores;
}

function validarDNI(dni) {
    const letras = 'TRWAGMYFPDXBNJZSQVHLCKE';
    if (!/^[0-9]{8}[A-Z]$/.test(dni)) return false;

    const numero = parseInt(dni.substr(0, 8));
    const letra = dni.charAt(8);
    return letra === letras[numero % 23];
}

// ===== Mostrar errores =====
function mostrarErrores(errores) {
    const contenedor = document.getElementById('mensajesError');
    contenedor.innerHTML = '';

    if (errores.length === 0) {
        contenedor.style.display = 'none';
        return;
    }

    const ul = document.createElement('ul');
    errores.forEach(e => {
        const li = document.createElement('li');
        li.textContent = e;
        ul.appendChild(li);
    });

    contenedor.appendChild(ul);
    contenedor.style.display = 'block';
}

// ===== Guardar cambios =====
function actualizarReserva() {
    const reservaId = parseInt(document.getElementById('reservaId').value);
    const reservas = JSON.parse(localStorage.getItem('reservas_concesionario')) || [];
    const index = reservas.findIndex(r => r.id === reservaId);

    if (index === -1) {
        mostrarMensaje('Reserva no encontrada.', true);
        return;
    }

    reservas[index] = {
        ...reservas[index],
        nombre: document.getElementById('nombre').value.trim(),
        dni: document.getElementById('dni').value.trim().toUpperCase(),
        email: document.getElementById('email').value.trim(),
        telefono: document.getElementById('telefono').value.trim(),
        fechaReserva: document.getElementById('fechaReserva').value,
        diasReserva: parseInt(document.getElementById('diasReserva').value),
        cocheId: parseInt(document.getElementById('cocheId').value),
        fechaModificacion: new Date().toISOString()
    };

    localStorage.setItem('reservas_concesionario', JSON.stringify(reservas));
    mostrarMensaje('Reserva modificada con éxito.');
}

// ===== Mensajes =====
function mostrarMensaje(mensaje, esError = false) {
    const contenedor = document.getElementById('mensajesError');
    contenedor.innerHTML = '';
    const p = document.createElement('p');
    p.textContent = mensaje;
    p.style.color = esError ? 'red' : 'green';
    contenedor.appendChild(p);
    contenedor.style.display = 'block';

    if (!esError) {
        setTimeout(() => {
            window.location.href = 'index.html';
        }, 2000);
    }
}

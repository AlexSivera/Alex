// reservaAlta.js
document.addEventListener('DOMContentLoaded', function() {
    main();
});

function main() {
    mostrarCocheSeleccionado();
    configurarEventos();
}

function mostrarCocheSeleccionado() {
    const cocheId = parseInt(localStorage.getItem('cocheSeleccionado'));
    if (!cocheId) return;

    const coche = Vehiculos.find(c => c.id === cocheId);
    if (!coche) return;

    // Mostrar info del coche en la página
    const detalles = document.getElementById('detallesCoche');
    detalles.textContent = `${coche.marca} ${coche.modelo} - ${coche.precio.toLocaleString('es-ES', { style:'currency', currency:'EUR' })}`;

    document.getElementById('cocheId').value = coche.id;
}

function configurarEventos() {
    const form = document.getElementById('formAltaReserva');

    form.addEventListener('submit', function(e) {
        e.preventDefault();
        const errores = validarFormulario();
        mostrarErrores(errores);

        if (errores.length === 0) {
            guardarReserva();
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

    // Nombre: letras y espacios 3-50
    if (!/^[A-Za-zÁÉÍÓÚáéíóúñÑ\s]{3,50}$/.test(nombre)) {
        errores.push('Nombre inválido (3-50 letras).');
    }

    // DNI: 8 números + letra
    if (!validarDNI(dni)) {
        errores.push('DNI inválido.');
    }

    // Email
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
        errores.push('Email inválido.');
    }

    // Teléfono: 9 dígitos
    if (!/^[0-9]{9}$/.test(telefono)) {
        errores.push('Teléfono inválido (9 dígitos).');
    }

    // Fecha
    if (!fechaReserva) {
        errores.push('Fecha de reserva requerida.');
    }

    // Días
    if (isNaN(diasReserva) || diasReserva < 1 || diasReserva > 30) {
        errores.push('Días de reserva entre 1 y 30.');
    }

    return errores;
}

function validarDNI(dni) {
    const letras = 'TRWAGMYFPDXBNJZSQVHLCKE';
    if (!/^[0-9]{8}[A-Z]$/.test(dni)) return false;

    const numero = parseInt(dni.substr(0, 8));
    const letra = dni.charAt(8);
    return letra === letras[numero % 23];
}

// ===== Mostrar errores en pantalla =====
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

// ===== Guardar reserva =====
function guardarReserva() {
    const reservas = JSON.parse(localStorage.getItem('reservas_concesionario')) || [];

    const nuevaReserva = {
        id: Date.now(),
        nombre: document.getElementById('nombre').value.trim(),
        dni: document.getElementById('dni').value.trim().toUpperCase(),
        email: document.getElementById('email').value.trim(),
        telefono: document.getElementById('telefono').value.trim(),
        cocheId: parseInt(document.getElementById('cocheId').value),
        fechaReserva: document.getElementById('fechaReserva').value,
        diasReserva: parseInt(document.getElementById('diasReserva').value),
        fechaCreacion: new Date().toISOString()
    };

    reservas.push(nuevaReserva);
    localStorage.setItem('reservas_concesionario', JSON.stringify(reservas));

    mostrarMensajeExito('¡Reserva realizada con éxito!');
}

// ===== Mensaje de éxito =====
function mostrarMensajeExito(mensaje) {
    const contenedor = document.getElementById('mensajesError');
    contenedor.innerHTML = '';
    const p = document.createElement('p');
    p.textContent = mensaje;
    p.style.color = 'green';
    contenedor.appendChild(p);
    contenedor.style.display = 'block';

    setTimeout(() => {
        window.location.href = 'index.html';
    }, 2000);
}

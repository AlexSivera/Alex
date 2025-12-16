document.addEventListener('DOMContentLoaded', function() {
    mostrarReservas();
});

function mostrarReservas() {
    const reservas = JSON.parse(localStorage.getItem('reservas_concesionario')) || [];
    const contenedor = document.getElementById('listadoReservas');
    contenedor.innerHTML = '';

    if (reservas.length === 0) {
        contenedor.textContent = 'No hay reservas realizadas.';
        return;
    }

    reservas.forEach(reserva => {
        const div = document.createElement('div');
        div.className = 'reserva-card';
        div.style.border = '1px solid #ccc';
        div.style.padding = '1rem';
        div.style.marginBottom = '1rem';
        div.style.borderRadius = '5px';
        div.style.backgroundColor = '#f9f9f9';

        div.innerHTML = `
            <p><strong>Nombre:</strong> ${reserva.nombre}</p>
            <p><strong>Coche:</strong> ${getCocheNombre(reserva.cocheId)}</p>
            <p><strong>Fecha:</strong> ${reserva.fechaReserva}</p>
            <p><strong>Días:</strong> ${reserva.diasReserva}</p>
            <button class="btnModificar">Modificar</button>
        `;

        // Botón para modificar
        div.querySelector('.btnModificar').addEventListener('click', () => {
            window.location.href = `reservaModificar.html?id=${reserva.id}`;
        });

        contenedor.appendChild(div);
    });
}

function getCocheNombre(cocheId) {
    const coche = Vehiculos.find(c => c.id === cocheId);
    return coche ? `${coche.marca} ${coche.modelo}` : 'Coche no encontrado';
}

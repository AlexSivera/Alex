// index.js
document.addEventListener('DOMContentLoaded', function() {
    main();
});

function main() {
    cargarCoches(Vehiculos); // carga inicial
    configurarEventos();
}

function configurarEventos() {
    // Ordenar por precio ascendente
    document.getElementById('ordenPrecioAsc').addEventListener('click', () => {
        const copia = [...Vehiculos].sort((a, b) => a.precio - b.precio);
        cargarCoches(copia);
    });

    // Ordenar por precio descendente
    document.getElementById('ordenPrecioDesc').addEventListener('click', () => {
        const copia = [...Vehiculos].sort((a, b) => b.precio - a.precio);
        cargarCoches(copia);
    });

    // Ordenar por relevancia (orden original)
    document.getElementById('ordenRelevancia').addEventListener('click', () => {
        cargarCoches(Vehiculos);
    });

    // Filtrar
    document.getElementById('btnFiltrar').addEventListener('click', aplicarFiltros);

    // Eliminar filtros
    document.getElementById('btnEliminarFiltros').addEventListener('click', () => {
        document.getElementById('busquedaMarcaModelo').value = '';
        document.getElementById('anioDesde').value = '';
        document.getElementById('anioHasta').value = '';
        document.getElementById('kmDesde').value = '';
        document.getElementById('kmHasta').value = '';
        cargarCoches(Vehiculos);
    });

    // Autocomplete para marca y modelo con jQuery UI
    $("#busquedaMarcaModelo").autocomplete({
        source: Vehiculos.map(c => c.marca + " " + c.modelo),
        minLength: 1
    });
}

function cargarCoches(lista) {
    const contenedor = document.getElementById('listadoCoches');
    contenedor.innerHTML = ''; // limpiar contenedor

    lista.forEach(coche => {
        const div = document.createElement('div');
        div.className = 'coche-card';

        const titulo = document.createElement('h3');
        titulo.textContent = `${coche.marca} ${coche.modelo}`;

        const detalles = document.createElement('p');
        detalles.textContent = `Año: ${coche.año} | Km: ${coche.kilometros.toLocaleString()} | Combustible: ${coche.combustible} | Precio: ${coche.precio.toLocaleString('es-ES', { style: 'currency', currency: 'EUR' })}`;

        const btnReservar = document.createElement('button');
        btnReservar.textContent = 'Reservar';
        btnReservar.addEventListener('click', () => {
            localStorage.setItem('cocheSeleccionado', coche.id);
            window.location.href = 'reservaAlta.html';
        });

        div.appendChild(titulo);
        div.appendChild(detalles);
        div.appendChild(btnReservar);

        contenedor.appendChild(div);
    });

    if (lista.length === 0) {
        const p = document.createElement('p');
        p.textContent = 'No se encontraron coches con los criterios indicados.';
        contenedor.appendChild(p);
    }
}

function aplicarFiltros() {
    let resultados = [...Vehiculos];

    // Marca/Modelo
    const busqueda = document.getElementById('busquedaMarcaModelo').value.toLowerCase();
    if (busqueda) {
        resultados = resultados.filter(c => (c.marca + ' ' + c.modelo).toLowerCase().includes(busqueda));
    }

    // Año desde
    const anioDesde = parseInt(document.getElementById('anioDesde').value);
    if (!isNaN(anioDesde)) {
        resultados = resultados.filter(c => c.año >= anioDesde);
    }

    // Año hasta
    const anioHasta = parseInt(document.getElementById('anioHasta').value);
    if (!isNaN(anioHasta)) {
        resultados = resultados.filter(c => c.año <= anioHasta);
    }

    // Km desde
    const kmDesde = parseInt(document.getElementById('kmDesde').value);
    if (!isNaN(kmDesde)) {
        resultados = resultados.filter(c => c.kilometros >= kmDesde);
    }

    // Km hasta
    const kmHasta = parseInt(document.getElementById('kmHasta').value);
    if (!isNaN(kmHasta)) {
        resultados = resultados.filter(c => c.kilometros <= kmHasta);
    }

    cargarCoches(resultados);
}

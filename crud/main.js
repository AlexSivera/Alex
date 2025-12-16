// Inicialización cuando el DOM esté cargado
document.addEventListener('DOMContentLoaded', main);

// Variables globales
let vehiculosFiltrados = [];
let vehiculosOriginales = [];
let ordenActual = 'relevancia';

// Función principal
function main() {
    // Guardar copia del array original
    vehiculosOriginales = [...vehiculos];
    vehiculosFiltrados = [...vehiculos];
    
    // Inicializar la aplicación
    inicializarApp();
}

// Inicializar todos los componentes
function inicializarApp() {
    crearFormularioReserva();
    cargarVehiculos(vehiculosFiltrados);
    inicializarFiltrosAño();
    inicializarEventos();
    inicializarAutocomplete();
}

// ==================== CREAR FORMULARIO DINÁMICAMENTE ====================

function crearFormularioReserva() {
    const formulario = document.getElementById('formularioReserva');
    
    // Limpiar formulario por si acaso
    while (formulario.firstChild) {
        formulario.removeChild(formulario.firstChild);
    }
    
    // CAMPO NOMBRE
    const divNombre = document.createElement('div');
    divNombre.className = 'form-grupo';
    
    const labelNombre = document.createElement('label');
    labelNombre.setAttribute('for', 'nombre');
    labelNombre.textContent = 'Nombre completo: *';
    divNombre.appendChild(labelNombre);
    
    const inputNombre = document.createElement('input');
    inputNombre.type = 'text';
    inputNombre.id = 'nombre';
    inputNombre.name = 'nombre';
    inputNombre.required = true;
    inputNombre.pattern = '[A-Za-zÁÉÍÓÚáéíóúÑñ\\s]{3,50}';
    inputNombre.title = 'Nombre debe tener entre 3 y 50 caracteres, solo letras';
    divNombre.appendChild(inputNombre);
    
    const errorNombre = document.createElement('span');
    errorNombre.className = 'error-mensaje';
    errorNombre.id = 'errorNombre';
    divNombre.appendChild(errorNombre);
    
    formulario.appendChild(divNombre);
    
    // CAMPO EMAIL
    const divEmail = document.createElement('div');
    divEmail.className = 'form-grupo';
    
    const labelEmail = document.createElement('label');
    labelEmail.setAttribute('for', 'email');
    labelEmail.textContent = 'Email: *';
    divEmail.appendChild(labelEmail);
    
    const inputEmail = document.createElement('input');
    inputEmail.type = 'email';
    inputEmail.id = 'email';
    inputEmail.name = 'email';
    inputEmail.required = true;
    inputEmail.pattern = '[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\\.[a-zA-Z]{2,}';
    inputEmail.title = 'Introduce un email válido';
    divEmail.appendChild(inputEmail);
    
    const errorEmail = document.createElement('span');
    errorEmail.className = 'error-mensaje';
    errorEmail.id = 'errorEmail';
    divEmail.appendChild(errorEmail);
    
    formulario.appendChild(divEmail);
    
    // CAMPO TELÉFONO
    const divTelefono = document.createElement('div');
    divTelefono.className = 'form-grupo';
    
    const labelTelefono = document.createElement('label');
    labelTelefono.setAttribute('for', 'telefono');
    labelTelefono.textContent = 'Teléfono: *';
    divTelefono.appendChild(labelTelefono);
    
    const inputTelefono = document.createElement('input');
    inputTelefono.type = 'tel';
    inputTelefono.id = 'telefono';
    inputTelefono.name = 'telefono';
    inputTelefono.required = true;
    inputTelefono.pattern = '[0-9]{9}';
    inputTelefono.title = 'Teléfono debe tener 9 dígitos';
    divTelefono.appendChild(inputTelefono);
    
    const errorTelefono = document.createElement('span');
    errorTelefono.className = 'error-mensaje';
    errorTelefono.id = 'errorTelefono';
    divTelefono.appendChild(errorTelefono);
    
    formulario.appendChild(divTelefono);
    
    // CAMPO FECHA
    const divFecha = document.createElement('div');
    divFecha.className = 'form-grupo';
    
    const labelFecha = document.createElement('label');
    labelFecha.setAttribute('for', 'fechaReserva');
    labelFecha.textContent = 'Fecha de reserva: *';
    divFecha.appendChild(labelFecha);
    
    const inputFecha = document.createElement('input');
    inputFecha.type = 'date';
    inputFecha.id = 'fechaReserva';
    inputFecha.name = 'fechaReserva';
    inputFecha.required = true;
    divFecha.appendChild(inputFecha);
    
    const errorFecha = document.createElement('span');
    errorFecha.className = 'error-mensaje';
    errorFecha.id = 'errorFecha';
    divFecha.appendChild(errorFecha);
    
    formulario.appendChild(divFecha);
    
    // MENSAJE GENERAL
    const mensajeGeneral = document.createElement('div');
    mensajeGeneral.id = 'mensajeGeneral';
    mensajeGeneral.className = 'mensaje-general';
    formulario.appendChild(mensajeGeneral);
    
    // BOTONES
    const divBotones = document.createElement('div');
    divBotones.className = 'botones-formulario';
    
    const btnEnviar = document.createElement('button');
    btnEnviar.type = 'submit';
    btnEnviar.className = 'btn-enviar';
    btnEnviar.textContent = 'Confirmar Reserva';
    divBotones.appendChild(btnEnviar);
    
    const btnCancelar = document.createElement('button');
    btnCancelar.type = 'button';
    btnCancelar.id = 'btnCancelarReserva';
    btnCancelar.className = 'btn-cancelar';
    btnCancelar.textContent = 'Cancelar';
    divBotones.appendChild(btnCancelar);
    
    formulario.appendChild(divBotones);
}

// ==================== RENDERIZADO DE VEHÍCULOS ====================

function cargarVehiculos(arrayVehiculos) {
    const contenedor = document.getElementById('contenedorVehiculos');
    // Limpiar contenedor
    while (contenedor.firstChild) {
        contenedor.removeChild(contenedor.firstChild);
    }
    
    if (arrayVehiculos.length === 0) {
        const mensaje = document.createElement('p');
        mensaje.style.gridColumn = '1/-1';
        mensaje.style.textAlign = 'center';
        mensaje.style.padding = '2rem';
        mensaje.style.color = '#666';
        mensaje.textContent = 'No se encontraron vehículos con los filtros aplicados.';
        contenedor.appendChild(mensaje);
        return;
    }
    
    arrayVehiculos.forEach(vehiculo => {
        const tarjeta = crearTarjetaVehiculo(vehiculo);
        contenedor.appendChild(tarjeta);
    });
}

function crearTarjetaVehiculo(vehiculo) {
    // Crear contenedor principal
    const tarjeta = document.createElement('div');
    tarjeta.className = 'tarjeta-vehiculo';
    
    // Crear imagen
    const img = document.createElement('img');
    img.src = vehiculo.imagen;
    img.alt = vehiculo.marca + ' ' + vehiculo.modelo;
    tarjeta.appendChild(img);
    
    // Crear contenedor del contenido
    const contenido = document.createElement('div');
    contenido.className = 'tarjeta-contenido';
    
    // Título (marca y modelo)
    const titulo = document.createElement('h3');
    titulo.textContent = vehiculo.marca + ' ' + vehiculo.modelo;
    contenido.appendChild(titulo);
    
    // Precio
    const precio = document.createElement('p');
    precio.className = 'precio';
    precio.textContent = vehiculo.precio.toLocaleString('es-ES') + ' €';
    contenido.appendChild(precio);
    
    // Contenedor de detalles
    const detalles = document.createElement('div');
    detalles.className = 'detalles-vehiculo';
    
    // Año
    const pAño = document.createElement('p');
    const strongAño = document.createElement('strong');
    strongAño.textContent = 'Año: ';
    pAño.appendChild(strongAño);
    pAño.appendChild(document.createTextNode(vehiculo.año));
    detalles.appendChild(pAño);
    
    // Kilómetros
    const pKm = document.createElement('p');
    const strongKm = document.createElement('strong');
    strongKm.textContent = 'Kilómetros: ';
    pKm.appendChild(strongKm);
    pKm.appendChild(document.createTextNode(vehiculo.kilometros.toLocaleString('es-ES') + ' km'));
    detalles.appendChild(pKm);
    
    // Combustible
    const pCombustible = document.createElement('p');
    const strongCombustible = document.createElement('strong');
    strongCombustible.textContent = 'Combustible: ';
    pCombustible.appendChild(strongCombustible);
    pCombustible.appendChild(document.createTextNode(vehiculo.combustible));
    detalles.appendChild(pCombustible);
    
    // Transmisión
    const pTransmision = document.createElement('p');
    const strongTransmision = document.createElement('strong');
    strongTransmision.textContent = 'Transmisión: ';
    pTransmision.appendChild(strongTransmision);
    pTransmision.appendChild(document.createTextNode(vehiculo.transmision));
    detalles.appendChild(pTransmision);
    
    // Color
    const pColor = document.createElement('p');
    const strongColor = document.createElement('strong');
    strongColor.textContent = 'Color: ';
    pColor.appendChild(strongColor);
    pColor.appendChild(document.createTextNode(vehiculo.color));
    detalles.appendChild(pColor);
    
    contenido.appendChild(detalles);
    
    // Botón de reservar
    const btnReservar = document.createElement('button');
    btnReservar.className = 'btn-reservar';
    btnReservar.textContent = 'Reservar';
    btnReservar.dataset.id = vehiculo.id;
    btnReservar.addEventListener('click', () => abrirModalReserva(vehiculo));
    contenido.appendChild(btnReservar);
    
    tarjeta.appendChild(contenido);
    
    return tarjeta;
}

// ==================== ORDENACIÓN ====================

function inicializarEventos() {
    // Botones de ordenación
    document.getElementById('btnRelevancia').addEventListener('click', () => ordenarPor('relevancia'));
    document.getElementById('btnPrecioAsc').addEventListener('click', () => ordenarPor('precioAsc'));
    document.getElementById('btnPrecioDesc').addEventListener('click', () => ordenarPor('precioDesc'));
    
    // Botón aplicar filtros
    document.getElementById('btnAplicarFiltros').addEventListener('click', aplicarFiltros);
    
    // Botón eliminar filtros
    document.getElementById('btnEliminarFiltros').addEventListener('click', eliminarFiltros);
    
    // Eventos del formulario de reserva
    document.getElementById('formularioReserva').addEventListener('submit', procesarReserva);
    document.getElementById('btnCancelarReserva').addEventListener('click', cerrarModalReserva);
}

function ordenarPor(tipo) {
    ordenActual = tipo;
    
    // Actualizar botones activos
    document.querySelectorAll('.btn-orden').forEach(btn => btn.classList.remove('active'));
    
    let arrayOrdenado = [...vehiculosFiltrados];
    
    switch(tipo) {
        case 'precioAsc':
            arrayOrdenado.sort((a, b) => a.precio - b.precio);
            document.getElementById('btnPrecioAsc').classList.add('active');
            break;
        case 'precioDesc':
            arrayOrdenado.sort((a, b) => b.precio - a.precio);
            document.getElementById('btnPrecioDesc').classList.add('active');
            break;
        case 'relevancia':
        default:
            // Mantener orden original (filtrado pero sin ordenar)
            document.getElementById('btnRelevancia').classList.add('active');
            break;
    }
    
    cargarVehiculos(arrayOrdenado);
}

// ==================== FILTROS ====================

function inicializarFiltrosAño() {
    const selectDesde = document.getElementById('añoDesde');
    const selectHasta = document.getElementById('añoHasta');
    
    // Obtener años únicos y ordenarlos
    const años = [...new Set(vehiculos.map(v => v.año))].sort((a, b) => a - b);
    
    // Rellenar selectores usando DOM
    años.forEach(año => {
        const optionDesde = document.createElement('option');
        optionDesde.value = año;
        optionDesde.textContent = año;
        selectDesde.appendChild(optionDesde);
        
        const optionHasta = document.createElement('option');
        optionHasta.value = año;
        optionHasta.textContent = año;
        selectHasta.appendChild(optionHasta);
    });
}

function aplicarFiltros() {
    // Limpiar mensajes de error
    document.getElementById('errorAño').textContent = '';
    document.getElementById('errorKm').textContent = '';
    
    // Obtener valores de filtros
    const añoDesde = document.getElementById('añoDesde').value;
    const añoHasta = document.getElementById('añoHasta').value;
    const kmDesde = document.getElementById('kmDesde').value;
    const kmHasta = document.getElementById('kmHasta').value;
    const busqueda = document.getElementById('buscarMarcaModelo').value.toLowerCase();
    
    // Validar rangos de año
    if (añoDesde && añoHasta && parseInt(añoDesde) > parseInt(añoHasta)) {
        document.getElementById('errorAño').textContent = 'El año "desde" debe ser menor o igual al año "hasta"';
        return;
    }
    
    // Validar rangos de kilómetros
    if (kmDesde && kmHasta && parseInt(kmDesde) > parseInt(kmHasta)) {
        document.getElementById('errorKm').textContent = 'Los km "desde" deben ser menores o iguales a los km "hasta"';
        return;
    }
    
    // Aplicar filtros
    vehiculosFiltrados = vehiculosOriginales.filter(vehiculo => {
        // Filtro de año
        if (añoDesde && vehiculo.año < parseInt(añoDesde)) return false;
        if (añoHasta && vehiculo.año > parseInt(añoHasta)) return false;
        
        // Filtro de kilómetros
        if (kmDesde && vehiculo.kilometros < parseInt(kmDesde)) return false;
        if (kmHasta && vehiculo.kilometros > parseInt(kmHasta)) return false;
        
        // Filtro de búsqueda
        if (busqueda) {
            const textoVehiculo = (vehiculo.marca + ' ' + vehiculo.modelo).toLowerCase();
            if (!textoVehiculo.includes(busqueda)) return false;
        }
        
        return true;
    });
    
    // Aplicar ordenación actual
    ordenarPor(ordenActual);
}

function eliminarFiltros() {
    // Resetear campos de filtro
    document.getElementById('añoDesde').value = '';
    document.getElementById('añoHasta').value = '';
    document.getElementById('kmDesde').value = '';
    document.getElementById('kmHasta').value = '';
    document.getElementById('buscarMarcaModelo').value = '';
    
    // Limpiar mensajes de error
    document.getElementById('errorAño').textContent = '';
    document.getElementById('errorKm').textContent = '';
    
    // Restaurar vehículos
    vehiculosFiltrados = [...vehiculosOriginales];
    
    // Aplicar la ordenación actual
    ordenarPor(ordenActual);
}

// ==================== AUTOCOMPLETE ====================

function inicializarAutocomplete() {
    // Crear array de marcas y modelos para el autocomplete
    const sugerencias = [];
    vehiculos.forEach(vehiculo => {
        const marca = vehiculo.marca;
        const modelo = vehiculo.modelo;
        const completo = marca + ' ' + modelo;
        
        // Añadir sin duplicados
        if (!sugerencias.includes(marca)) sugerencias.push(marca);
        if (!sugerencias.includes(modelo)) sugerencias.push(modelo);
        if (!sugerencias.includes(completo)) sugerencias.push(completo);
    });
    
    // Inicializar jQuery UI Autocomplete
    $('#buscarMarcaModelo').autocomplete({
        source: sugerencias,
        minLength: 1
    });
}

// ==================== MODAL DE RESERVA ====================

function abrirModalReserva(vehiculo) {
    const modal = document.getElementById('seccionReserva');
    const infoVehiculo = document.getElementById('infoVehiculoReserva');
    
    // Limpiar contenido previo
    while (infoVehiculo.firstChild) {
        infoVehiculo.removeChild(infoVehiculo.firstChild);
    }
    
    // Crear información del vehículo usando DOM
    const h3 = document.createElement('h3');
    h3.textContent = vehiculo.marca + ' ' + vehiculo.modelo;
    infoVehiculo.appendChild(h3);
    
    // Año
    const pAño = document.createElement('p');
    const strongAño = document.createElement('strong');
    strongAño.textContent = 'Año: ';
    pAño.appendChild(strongAño);
    pAño.appendChild(document.createTextNode(vehiculo.año));
    infoVehiculo.appendChild(pAño);
    
    // Precio
    const pPrecio = document.createElement('p');
    const strongPrecio = document.createElement('strong');
    strongPrecio.textContent = 'Precio: ';
    pPrecio.appendChild(strongPrecio);
    pPrecio.appendChild(document.createTextNode(vehiculo.precio.toLocaleString('es-ES') + ' €'));
    infoVehiculo.appendChild(pPrecio);
    
    // Kilómetros
    const pKm = document.createElement('p');
    const strongKm = document.createElement('strong');
    strongKm.textContent = 'Kilómetros: ';
    pKm.appendChild(strongKm);
    pKm.appendChild(document.createTextNode(vehiculo.kilometros.toLocaleString('es-ES') + ' km'));
    infoVehiculo.appendChild(pKm);
    
    // Combustible
    const pCombustible = document.createElement('p');
    const strongCombustible = document.createElement('strong');
    strongCombustible.textContent = 'Combustible: ';
    pCombustible.appendChild(strongCombustible);
    pCombustible.appendChild(document.createTextNode(vehiculo.combustible));
    infoVehiculo.appendChild(pCombustible);
    
    // Transmisión
    const pTransmision = document.createElement('p');
    const strongTransmision = document.createElement('strong');
    strongTransmision.textContent = 'Transmisión: ';
    pTransmision.appendChild(strongTransmision);
    pTransmision.appendChild(document.createTextNode(vehiculo.transmision));
    infoVehiculo.appendChild(pTransmision);
    
    // Guardar ID del vehículo en el formulario
    document.getElementById('formularioReserva').dataset.vehiculoId = vehiculo.id;
    
    // Mostrar modal
    modal.classList.remove('oculto');
    
    // Resetear formulario
    document.getElementById('formularioReserva').reset();
    limpiarErrores();
}

function cerrarModalReserva() {
    document.getElementById('seccionReserva').classList.add('oculto');
    document.getElementById('formularioReserva').reset();
    limpiarErrores();
}

// ==================== VALIDACIÓN DEL FORMULARIO ====================

function procesarReserva(e) {
    e.preventDefault();
    
    // Limpiar errores previos
    limpiarErrores();
    
    // Obtener valores
    const nombre = document.getElementById('nombre').value.trim();
    const email = document.getElementById('email').value.trim();
    const telefono = document.getElementById('telefono').value.trim();
    const fechaReserva = document.getElementById('fechaReserva').value;
    
    let hayErrores = false;
    
    // Validar nombre (3-50 caracteres, solo letras)
    const regexNombre = /^[A-Za-zÁÉÍÓÚáéíóúÑñ\s]{3,50}$/;
    if (!regexNombre.test(nombre)) {
        mostrarError('errorNombre', 'El nombre debe tener entre 3 y 50 caracteres, solo letras');
        hayErrores = true;
    }
    
    // Validar email
    const regexEmail = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (!regexEmail.test(email)) {
        mostrarError('errorEmail', 'Introduce un email válido');
        hayErrores = true;
    }
    
    // Validar teléfono (9 dígitos)
    const regexTelefono = /^[0-9]{9}$/;
    if (!regexTelefono.test(telefono)) {
        mostrarError('errorTelefono', 'El teléfono debe tener 9 dígitos');
        hayErrores = true;
    }
    
    // Validar fecha (no puede ser anterior a hoy)
    if (!fechaReserva) {
        mostrarError('errorFecha', 'Debes seleccionar una fecha');
        hayErrores = true;
    } else {
        const fechaSeleccionada = new Date(fechaReserva);
        const hoy = new Date();
        hoy.setHours(0, 0, 0, 0);
        
        if (fechaSeleccionada < hoy) {
            mostrarError('errorFecha', 'La fecha no puede ser anterior a hoy');
            hayErrores = true;
        }
    }
    
    // Si hay errores, mostrar mensaje general y detener
    if (hayErrores) {
        mostrarMensajeGeneral('Por favor, corrige los errores en el formulario', 'error');
        return;
    }
    
    // Si no hay errores, guardar la reserva
    guardarReserva(nombre, email, telefono, fechaReserva);
}

function mostrarError(idElemento, mensaje) {
    const elemento = document.getElementById(idElemento);
    elemento.textContent = mensaje;
    
    // Marcar el input como error
    const input = elemento.previousElementSibling;
    if (input && input.tagName === 'INPUT') {
        input.classList.add('error');
    }
}

function limpiarErrores() {
    // Limpiar todos los mensajes de error
    document.querySelectorAll('.error-mensaje').forEach(elem => {
        elem.textContent = '';
    });
    
    // Quitar clase error de inputs
    document.querySelectorAll('input.error').forEach(input => {
        input.classList.remove('error');
    });
    
    // Ocultar mensaje general
    const mensajeGeneral = document.getElementById('mensajeGeneral');
    mensajeGeneral.className = 'mensaje-general';
    mensajeGeneral.textContent = '';
}

function mostrarMensajeGeneral(mensaje, tipo) {
    const elemento = document.getElementById('mensajeGeneral');
    elemento.textContent = mensaje;
    elemento.className = 'mensaje-general ' + tipo;
}

// ==================== GUARDAR EN LOCALSTORAGE ====================

function guardarReserva(nombre, email, telefono, fechaReserva) {
    const vehiculoId = parseInt(document.getElementById('formularioReserva').dataset.vehiculoId);
    const vehiculo = vehiculos.find(v => v.id === vehiculoId);
    
    // Crear objeto de reserva
    const reserva = {
        id: Date.now(),
        fecha: new Date().toISOString(),
        cliente: {
            nombre: nombre,
            email: email,
            telefono: telefono
        },
        fechaReserva: fechaReserva,
        vehiculo: {
            id: vehiculo.id,
            marca: vehiculo.marca,
            modelo: vehiculo.modelo,
            año: vehiculo.año,
            precio: vehiculo.precio,
            kilometros: vehiculo.kilometros
        }
    };
    
    // Guardar en localStorage
    const reservasExistentes = JSON.parse(localStorage.getItem('reservas') || '[]');
    reservasExistentes.push(reserva);
    localStorage.setItem('reservas', JSON.stringify(reservasExistentes));
    
    // Mostrar mensaje de éxito
    mostrarMensajeGeneral('¡Reserva realizada con éxito! Redirigiendo...', 'exito');
    
    

    // Redirigir al inicio después de 2 segundos
    setTimeout(() => {
        cerrarModalReserva();
        // Scroll al inicio
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }, 2000);
}
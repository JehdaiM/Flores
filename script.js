<<<<<<< HEAD
// Función para mostrar/ocultar el carrito flotante
function toggleCarrito() {
    const carritoFlotante = document.getElementById('carrito-flotante');
    if (carritoFlotante.style.display === 'block') {
        carritoFlotante.style.display = 'none';
    } else {
        carritoFlotante.style.display = 'block';
    }
}

// Resto del código del carrito (agregar, eliminar, vaciar)
let carrito = [];

function agregarAlCarrito(id) {
    const producto = document.querySelector(`.producto[data-id="${id}"]`);
    const nombre = producto.getAttribute('data-nombre');
    const precio = parseFloat(producto.getAttribute('data-precio'));

    const item = {
        id: id,
        nombre: nombre,
        precio: precio
    };

    carrito.push(item);
    actualizarCarrito();
}

function actualizarCarrito() {
    const listaCarrito = document.getElementById('lista-carrito');
    listaCarrito.innerHTML = '';

    carrito.forEach((item, index) => {
        const li = document.createElement('li');
        li.textContent = `${item.nombre} - $${item.precio}`;

        const botonEliminar = document.createElement('button');
        botonEliminar.textContent = 'Eliminar';
        botonEliminar.onclick = () => eliminarDelCarrito(index);

        li.appendChild(botonEliminar);
        listaCarrito.appendChild(li);
    });
}

function eliminarDelCarrito(index) {
    carrito.splice(index, 1);
    actualizarCarrito();
}

function vaciarCarrito() {
    carrito = [];
    actualizarCarrito();
}

function contactarServicioPersonalizado() {
    alert('Por favor, contáctanos al 555-1234 para más detalles sobre el servicio personalizado.');
=======
let carrito = [];

// Función para agregar un producto al carrito
function agregarAlCarrito(id) {
    const producto = document.querySelector(`.producto[data-id="${id}"]`);
    const nombre = producto.getAttribute('data-nombre');
    const precio = parseFloat(producto.getAttribute('data-precio'));

    const item = {
        id: id,
        nombre: nombre,
        precio: precio
    };

    carrito.push(item);
    actualizarCarrito();
}

// Función para actualizar la visualización del carrito
function actualizarCarrito() {
    const listaCarrito = document.getElementById('lista-carrito');
    listaCarrito.innerHTML = '';

    carrito.forEach((item, index) => {
        const li = document.createElement('li');
        li.textContent = `${item.nombre} - $${item.precio}`;

        const botonEliminar = document.createElement('button');
        botonEliminar.textContent = 'Eliminar';
        botonEliminar.onclick = () => eliminarDelCarrito(index);

        li.appendChild(botonEliminar);
        listaCarrito.appendChild(li);
    });
}

// Función para eliminar un producto del carrito
function eliminarDelCarrito(index) {
    carrito.splice(index, 1);
    actualizarCarrito();
}

// Función para vaciar el carrito
function vaciarCarrito() {
    carrito = [];
    actualizarCarrito();
}

// Función para contactar servicio personalizado
function contactarServicioPersonalizado() {
    alert('Por favor, contáctanos al 555-1234 para más detalles sobre el servicio personalizado.');
>>>>>>> 4fd3f7a236aed13810e95c509820364fd03922c1
}
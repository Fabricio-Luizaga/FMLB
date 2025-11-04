//Datos json
const productosJSON = [
    {
        id:1,
        nombre:'Cafe Moca',
        precio:70.00,
        descripcion:'Exquisito cafe con chocolate y crema',
        imagen: `imagenes/cafe-moca.jfif`
    },
    {
        id:2,
        nombre:'Te verde',
        precio:50.00,
        descripcion:'Hoja de te verde',
        imagen: 'imagenes/te_verde.jfif'
    },
    {
        id:3,
        nombre:'Smoothie de Frutas',
        precio:40.00,
        descripcion:'Mezcla de Frutas',
        imagen: 'imagenes/smoothie.jfif'
    },{
        id:4,
        nombre:'Cafe ',
        precio:55.00,
        descripcion:'Exquisito cafe del altiplano',
        imagen: 'imagenes/cafe.jfif'
    },
]
//funcion principal
function mostrarProducto() {
    const contenedor = document.querySelector('#contenedor-productos');
    productosJSON.forEach(producto => {
        const card = document.createElement('div');
        card.classList.add('productos-card');
        card.innerHTML = `
            <img src="${producto.imagen}" alt="${producto.nombre}" class="producto-img">
            <h2>${producto.nombre}</h2>
            <p>${producto.descripcion}</p>
            <p>Precio: Bs${producto.precio.toFixed(2)}</p>
            <button data-id="${producto.id}">Agregar al carrito</button>
        `;
        contenedor.appendChild(card);
    });
}

//llamar a la funcion
mostrarProducto();
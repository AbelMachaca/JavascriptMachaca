const contenedorProductos = document.getElementById('contenedor-productos')
const contenedorCarrito = document.getElementById('carrito-contenedor')
const botonVaciar = document.getElementById('vaciar-carrito')
const contadorCarrito = document.getElementById('contadorCarrito')
const cantidad = document.getElementById('cantidad')
const precioTotal = document.getElementById('precioTotal')
const cantidadTotal = document.getElementById('cantidadTotal')

let carrito = []

document.addEventListener('DOMContentLoaded', () => {
    if (localStorage.getItem('carrito')){
        carrito = JSON.parse(localStorage.getItem('carrito'))
        actualizarCarrito()
    }
})

//Use este swal para que el usuario confirme si quiere o no vaciar el carrito

botonVaciar.onclick = () => {
    Swal.fire({
        title: 'Vaciar Carrito',
        text: '¿Está seguro que desea eliminar los productos?',
        icon: 'warning',
        showCancelButton: true,
        confirmButtonText: 'Sí, seguro',
        cancelButtonText: 'No, no quiero'
    }).then((result) => {
        if (result.isConfirmed) {
            carrito.length = 0
            actualizarCarrito();
            Swal.fire('Borrado', 'Se ha eliminado los productos', 'success')
        }
    })
}

//intento 1

const stock = async () => {
    try {
        const respuesta = await fetch("./js/data.json");
        const dataJson = await respuesta.json();
        const stockProductos = dataJson;
        stockProductos.forEach((producto) => {
            const div = document.createElement("div");
            div.classList.add("producto");
            div.innerHTML = `
                <img src=${producto.img} alt= "">
                <h3>${producto.nombre}</h3>
                <p class="precioProducto">Precio:$ ${producto.precio}</p>
                <button id="agregar${producto.id}" class="boton-agregar">Agregar</button>`;
    
        contenedorProductos.appendChild(div);

    
    const boton = document.getElementById(`agregar${producto.id}`);
    boton.addEventListener("click", () => {
       agregarAlCarrito(producto.id);

        
    });
    const agregarAlCarrito = (prodId) => {
    const existe = carrito.some (prod => prod.id === prodId) 
        if (existe){ 
            const prod = carrito.map (prod => { 
                if (prod.id === prodId){
                prod.cantidad++
                }
            })
        } else { 
        const item = stockProductos.find((prod) => prod.id === prodId)
        carrito.push(item)
        }
    
        actualizarCarrito() 
    }
});  
      

} catch (e) {
        console.log(e);
    }
}


stock();




const actualizarCarrito = () => {
    
    contenedorCarrito.innerHTML = "" 
    carrito.forEach((prod) => {
        const div = document.createElement('div')
        div.className = ('productoEnCarrito')
        div.innerHTML = `
        <p>${prod.nombre}</p>
        <p>Precio:$${prod.precio}</p>
        <p>Cantidad: <span id="cantidad">${prod.cantidad}</span></p>
        <button onclick="eliminarDelCarrito(${prod.id})" class="boton-eliminar"></button>`

        contenedorCarrito.appendChild(div)
        
        localStorage.setItem('carrito', JSON.stringify(carrito))

    })
    
    contadorCarrito.innerText = carrito.length || 0   
    
    console.log(carrito)
    precioTotal.innerText = carrito.reduce((acc, prod) => acc + prod.cantidad * prod.precio, 0)
   
}


const contenedorModal = document.getElementsByClassName('modal-contenedor')[0]
const botonAbrir = document.getElementById('boton-carrito')
const botonCerrar = document.getElementById('carritoCerrar')
const modalCarrito = document.getElementsByClassName('modal-carrito')[0]


botonAbrir.addEventListener('click', ()=>{
    contenedorModal.classList.toggle('modal-active')
})
botonCerrar.addEventListener('click', ()=>{
    contenedorModal.classList.toggle('modal-active')
})

contenedorModal.addEventListener('click', (event) =>{
    contenedorModal.classList.toggle('modal-active')

})
modalCarrito.addEventListener('click', (event) => {
    event.stopPropagation() 
})


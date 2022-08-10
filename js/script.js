
// // Aplicando for

// let oportunidades = 2;
// for(let i = 1; i<=oportunidades; i++){
//     alert('Usaste tu oportunidad n°'+i);
// }


// //Aplicando While

// let passGuardado = "abel";
// let continuar = true;
// let passUsuario = prompt("Ingresá tu contraseña");
// while (continuar) {
  
//   if (passGuardado === passUsuario) {
//     alert("Empezando Js");
//     continuar = false;
//     break;
//   }
//   alert('Contraseña incorrecta');
//     passUsuario = prompt("Ingresá tu contraseña");
// } 





// while(true){
//    const precioCosto = parseFloat (prompt("ingrese el precio de costo del producto"));

//     if(!isNaN(precioCosto) && precioCosto != null && precioCosto != ""){

//       break;
//     }else{
//       alert('no es numero');
//       continue;
//     }

// }
    
//     precioCostoM = precioCosto.toFixed(2);
//     alert("El precio de costo del producto a calcular es: "+precioCostoM);
//     console.log("El precio de costo del procuto a calcular es: "+precioCostoM);
//     document.write("<h2> El precio de costo del producto a calcular es: "+precioCostoM+ "</h2>");

// function CalcularIva (precioCosto){
//   return (precioCosto * 0.21)
// }    


// const iva = CalcularIva(precioCosto);
// ivaM= iva.toFixed(2);

// alert("El IVA del producto ingresado es: "+ivaM);
// console.log("El IVA del producto ingresado es: "+ivaM);
// document.write("<h2> El IVA del producto ingresado es: "+ivaM+"</h2>");

// function SumarIva(precioCosto){
//   return (precioCosto + (precioCosto * 0.21));
// }


// const precioConIva = SumarIva(precioCosto);
// precioConIvaM= precioConIva.toFixed(2);

// alert("El precio del producto con IVA incluido es: "+precioConIvaM);
// console.log("El precio del producto con IVA incluido es: "+precioConIvaM);
// document.write("<h2> El precio del producto con IVA incluido es: "+precioConIvaM+"</h2>")


// function calculaPrecioVenta(precioConIva){
//   return (precioConIva * 1.25);
// }


// const precioVenta = calculaPrecioVenta(precioConIva);
// precioVentaM= precioVenta.toFixed(2);

// alert("El precio Sugerido de venta del producto es: "+precioVentaM);
// console.log("El precio Sugerido de venta del procuto es: "+precioVentaM);
// document.write("<h2> El precio Sugerido de venta del producto es: "+precioVentaM+"</h2>")




class Producto {
  constructor(nombre, precio, detalle, cantidad) {
    this.nombre = nombre;
    this.precio = parseFloat(precio);
    this.detalle = detalle;
    this.cantidad = cantidad;
    this.disponible = true;
  }

  sumarIva() {
    return this.precio * 1.21;
  }

  vender() {
    this.disponible = false;
  }

  precioSugerido() {
    return this.precio * 1.21 * 1.25;
  }

}

let arrayProductos = [];
let miProducto = document.querySelector("#product")
let comprobacion; 
do{
  comprobacion = prompt('Ingrese un nombre del producto o fin para terminar de agregar');
  if (comprobacion === "fin"|| comprobacion === "FIN" || comprobacion === "Fin" ){
    break;
  }else{
    nombreP = comprobacion;
    const precioP = prompt('Ingrese el precio del producto');
    const detalleP = prompt('Ingrese el detalle del producto');
    const cantidadP = prompt('Ingrese la cantidad comprada del producto');
    arrayProductos.push(new Producto(nombreP, precioP, detalleP, cantidadP));
  }
}

while (comprobacion != "fin"|| comprobacion != "FIN" || comprobacion != "Fin" )

console.log(arrayProductos);


for (const producto of arrayProductos) {
  let contenedor = document.createElement("div");
  contenedor.innerHTML = `<h3> Nombre: ${producto.nombre}</h3>
                          <p>  Precio: ${producto.precio}</p>
                          <p>  Cantidad: ${producto.cantidad}</p>
                          <p>  Detalle: ${producto.detalle}</p>`;
  document.body.appendChild(contenedor);
 
}

let ingresado = prompt('Ingresar el producto que quiero buscar');
const prodIngresado = arrayProductos.filter(producto => producto.nombre.includes(ingresado));
console.log(prodIngresado);
document.write("<h3> Lista de Productos ingresados para busqueda: </h3>");

for (const producto of prodIngresado){
  let contenedor = document.createElement("div");
  contenedor.innerHTML = `<h3> Nombre: ${producto.nombre}</h3>
                          <p>  Detalle: ${producto.detalle}</h3>
                          <p>  Precio: ${producto.precio}</p>`;
  document.body.appendChild(contenedor);
}

let ordenadosCantidad = [];
const Cantidad = arrayProductos.map(elemento => elemento);
ordenadosCantidad.sort(function(a, b) {
  return a.cantidad- b.cantidad;
  });
console.log('Ordenados por Cantidad ascendente: ');
console.log(ordenadosCantidad);
document.write("<h3> Lista de Productos ordenados por cantidad: </h3>");

for (const producto of ordenadosCantidad) {
  let contenedor = document.createElement("div");
  contenedor.innerHTML = `<h3> Nombre: ${producto.nombre}</h3>
                          <p>  Detalle: ${producto.detalle}</h3>
                          <p>  Cantidad: ${producto.cantidad}</p>`;
  document.body.appendChild(contenedor);
}

let ordenadosPrecio = [];
const Precio = arrayProductos.map(elemento => elemento);
ordenadosPrecio.sort(function(a, b) {
  return a.precio - b.precio;
});
console.log('Ordenados por Precios Ascendentes');
console.log(ordenadosPrecio);
document.write("<h3> Lista de Productos ordenados por Precio ascendente: </h3>");

for (let producto of ordenadosPrecio) {
  let contenedor = document.createElement("div");
  contenedor.innerHTML = `<h3> Nombre: ${producto.nombre}</h3>
                          <p>  Detalle: ${producto.detalle}</h3>
                          <p>  Precio: ${producto.precio}</p>`;
  document.body.appendChild(contenedor);
}


miProducto.onclick = () => {
    console.log(('Seleccionaste el producto'));
}
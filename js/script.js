
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

const arrayProductos = [];
do{
  const comprobacion = prompt('Ingrese un nombre del producto o fin para terminar de agregar');
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

while (comprobacion != "fin"|| comprobacion === "FIN" || comprobacion === "Fin" )

console.log(arrayProductos);


for (const producto of arrayProductos) {
  document.write("<h3> El producto ingresado es: " + producto.nombre + "</h3>");
  document.write("<h3> El detalle del producto ingresado es: " + producto.detalle + "</h3>");
  document.write("<h3> La cantidad en stock del producto ingresado es: " + producto.cantidad + "</h3>");
  document.write("<h3> El precio del producto con IVA es: " + producto.sumarIva() + "</h3>");

  console.log(producto.nombre);
  console.log(producto.detalle);
  console.log(producto.cantidad);
  console.log(producto.sumarIva());

}


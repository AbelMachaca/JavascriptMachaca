
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





while(true){
   var precioCosto = parseFloat (prompt("ingrese el precio de costo del producto"));

    if(!isNaN(precioCosto) && precioCosto != null && precioCosto != ""){

      break;
    }else{
      alert('no es numero');
      continue;
    }

}
    
    precioCostoM = precioCosto.toFixed(2);
    alert("El precio de costo del producto a calcular es: "+precioCostoM);
    console.log("El precio de costo del procuto a calcular es: "+precioCostoM);
    document.write("<h2> El precio de costo del producto a calcular es: "+precioCostoM+ "</h2>");

function CalcularIva (precioCosto){
  return (precioCosto * 0.21)
}    


var iva = CalcularIva(precioCosto);
ivaM= iva.toFixed(2);

alert("El IVA del producto ingresado es: "+ivaM);
console.log("El IVA del producto ingresado es: "+ivaM);
document.write("<h2> El IVA del producto ingresado es: "+ivaM+"</h2>");

function SumarIva(precioCosto){
  return (precioCosto + (precioCosto * 0.21));
}


var precioConIva = SumarIva(precioCosto);
precioConIvaM= precioConIva.toFixed(2);

alert("El precio del producto con IVA incluido es: "+precioConIvaM);
console.log("El precio del producto con IVA incluido es: "+precioConIvaM);
document.write("<h2> El precio del producto con IVA incluido es: "+precioConIvaM+"</h2>")


function calculaPrecioVenta(precioConIva){
  return (precioConIva * 1.25);
}


var precioVenta = CalculaPrecioVenta(precioConIva);
precioVentaM= precioVenta.toFixed(2);

alert("El precio Sugerido de venta del producto es: "+precioVentaM);
console.log("El precio Sugerido de venta del procuto es: "+precioVentaM);
document.write("<h2> El precio Sugerido de venta del producto es: "+precioVentaM+"</h2>")
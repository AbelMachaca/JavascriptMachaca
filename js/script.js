
// Aplicando for

let oportunidades = 2;
for(let i = 1; i<=oportunidades; i++){
    alert('Usaste tu oportunidad n°'+i);
}


//Aplicando While

let passGuardado = "abel";
let continuar = true;
let passUsuario = prompt("Ingresá tu contraseña");
while (continuar) {
  
  if (passGuardado === passUsuario) {
    alert("Empezando Js");
    continuar = false;
    break;
  }
  alert('Contraseña incorrecta');
    passUsuario = prompt("Ingresá tu contraseña");
} 





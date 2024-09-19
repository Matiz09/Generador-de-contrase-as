// Definimos variables
let cantidad = document.getElementById("cantidad");
let boton = document.getElementById("generar");
const CadenaCaracteres = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()";
let MenosDeOcho = "Debe tener 8 o más carateres";
let contraseña = document.getElementById("contrasena");
let botonborrar = document.getElementById("limpiar");
let limpiardisplay = " ";



/* Declaramos un condicional para que se puedan usar 8 o mas caracteres no menos, por medio de una funcion a la cual llamamos generar, 
haciendo enfasis en que la funcion debeb generar algo ""*/

function borrar(){
    let numeroDigitado= parseInt (botonborrar);
    if(numeroDigitado = botonborrar){
        contraseña.value = limpiardisplay;
    }
    
}

function generar(){
    let numeroDigitado = parseInt (cantidad.value);
    if( numeroDigitado < 8){
        alert("Una contraseña con pocos números de caracteres puede ser vulnerable!");
    }

let password = "";
for(let i= 0; i < numeroDigitado; i++){
        let randomCharacter = CadenaCaracteres[Math.floor(Math.random() * CadenaCaracteres.length)];
        password+=randomCharacter;
        
}

if(numeroDigitado < 8){
    contraseña.value = MenosDeOcho;
}else{
contraseña.value = password;  
}

}






//Inicia proceso

/*
let textoingesadeusuario = prompt("Escribe un texto a encriptar");
let desencriptar = prompt("2");
console.log("El usuario ingreso " + textoingesadeusuario);
console.log("desencriptar es: " +desencriptar);
*/
//separar texto del usuario


function EncriptacionMetodo(){
        var z = textoingesadeusuario
        .replace(/e/g,"enter")
        .replace(/i/g,"imes")
        .replace(/a/g,"ai")
        .replace(/o/g,"ober")
        .replace(/u/g,"ufat");
        return z;
}

function DesencriptacionMetodo(){
    var y = textoingesadeusuario
    .replace(/enter/g,"e")
    .replace(/imes/g,"i")
    .replace(/ai/g,"a")
    .replace(/ober/g,"o")
    .replace(/ufat/g,"u");
    return y;
}


/* NONONO+

function BotonEncriptar(){

let CajaAEncriptar = document.getElementById("EncriptarContenedor");


if(CajaAEncriptar.value == ""){
    alert("Caja vacia");
}else{
    
   textoingesadeusuario = cajaencriptadoravalor;
   let replica = EncriptacionMetodo();
   console.log(replica);
   document.getElementById("Mensaje").innerHTML = replica;
   document.getElementById("MensajeNoEncontrado").style.display  = "none";
    document.getElementById("FotoMensaje").style.display  = "none";
    document.getElementById("Mensaje").style.textAlign = "left";
    document.getElementById("Mensaje").innerHTML = "uwu";
   

}
}

*/


/*
function prueba(){
document.getElementById("MensajeNoEncontrado").style.display  = "none";
document.getElementById("FotoMensaje").style.display  = "none";
document.getElementById("Mensaje").innerHTML = "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur";
document.getElementById("Mensaje").style.textAlign = "left"; "whatever";
}


prueba();

*/

/*  ORIGINAL
function BotonEncriptar(){
//Si esto es estupido, pero no funciona fuera de la funcion .-.
let TextoParaEncriptar = document.getElementById("Texto-A-Encriptar");
let TextoEncriptado = document.getElementById("Texto-Encriptado");
    
//Guardamos los valores en textoingresadoporusuario
textoingesadeusuario = TextoParaEncriptar.value;
let temporal1 = EncriptacionMetodo();

//Limpia la caja por si habia algo anteriormente
console.log("temporal 1: "+temporal1);  
//Escribe le contenido procesado en EncriptacionMetodo();2
TextoEncriptado.value = "";
TextoEncriptado.value = temporal1;
console.log("Texto copiado exito Encripado"); 

}*/

function Inicio(){
    document.getElementById("Texto-Encriptado").style.display = "none";
}

Inicio();

function BotonEncriptar(){
    //Si esto es estupido, pero no funciona fuera de la funcion .-.
    let TextoParaEncriptar = document.getElementById("Texto-A-Encriptar");
    let MostrarTextoFinal = document.getElementsByClassName("grupo2");
        
    //Guardamos los valores en textoingresadoporusuario
    textoingesadeusuario = TextoParaEncriptar.value;
    let temporal1 = EncriptacionMetodo();
    
    //Limpia la caja por si habia algo anteriormente
    console.log("temporal 1: "+temporal1);  
    //Escribe le contenido procesado en EncriptacionMetodo();2
    document.getElementById("Texto-Encriptado").value = temporal1;

    document.getElementById("MensajeNoEncontrado").style.display  = "none";
    document.getElementById("FotoMensaje").style.display  = "none";
    document.getElementById("Mensaje").style.display  = "none";
    document.getElementById("Texto-Encriptado").style.display = "block";

    console.log("Texto copiado exito Encripado"); 
    
    }


/*  alternarivo modifica P

function BotonEncriptar(){
    //Si esto es estupido, pero no funciona fuera de la funcion .-.
    let TextoParaEncriptar = document.getElementById("Texto-A-Encriptar");
    let MostrarTextoFinal = document.getElementsByClassName("grupo2");
        
    //Guardamos los valores en textoingresadoporusuario
    textoingesadeusuario = TextoParaEncriptar.value;
    let temporal1 = EncriptacionMetodo();
    
    //Limpia la caja por si habia algo anteriormente
    console.log("temporal 1: "+temporal1);  
    //Escribe le contenido procesado en EncriptacionMetodo();2
    document.getElementById("Mensaje").innerHTML = temporal1;

    document.getElementById("MensajeNoEncontrado").style.display  = "none";
    document.getElementById("FotoMensaje").style.display  = "none";

    console.log("Texto copiado exito Encripado"); 
    
    }


    */
    






/*  ORIGINAL

function BotonDesencriptar(){
    //Si esto es estupido, pero no funciona fuera de la funcion .-.
    let TextoParaEncriptar = document.getElementById("Texto-A-Encriptar");
    let TextoEncriptado = document.getElementById("Texto-Encriptado");
        
    //Guardamos los valores en textoingresadoporusuario
    textoingesadeusuario = TextoEncriptado.value;
    let temporal2 = DesencriptacionMetodo();
    TextoParaEncriptar.value = "";
    //Limpia la caja por si habia algo anteriormente
    console.log("temporal 2: "+temporal2);  
    //Escribe le contenido procesado
    TextoParaEncriptar.value = temporal2;
    console.log("Texto copiado exito DESncripado");   
    }

    */
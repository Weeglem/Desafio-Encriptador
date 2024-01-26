
function Inicio(){
    //Comandos de inicio, invisiblisar el cuadro de resultado 
    document.getElementById("Texto-Encriptado").style.display = "none";
    document.getElementById("Boton-Copiar").style.display = "none";
    //Limpiar la memoria de lo que escriba el usuario por seguridad
    
}

//Ejecutar Inicio
Inicio();


function EncriptacionMetodo(){
    var z = textoingesadeusuario
    .replace(/a/g,"ai")
    .replace(/e/g,"enter")
    .replace(/i/g,"imes")
    .replace(/o/g,"ober")
    .replace(/u/g,"ufat");
    return z;
}

function DesencriptacionMetodo(){
    var y = textoingesadeusuario
    .replace(/ai/g,"a")
    .replace(/enter/g,"e")
    .replace(/imes/g,"i")
    .replace(/ober/g,"o")
    .replace(/ufat/g,"u");
    return y;
}


//NO LO RECOMIENDO SOLO FUNCIONA EN CHORME
function BotonCopiarTexto(){
    textoacopiar = document.getElementById("Texto-Encriptado").value;
    navigator.clipboard.writeText(textoacopiar);
    alert("Copiado al Clipboard: "+textoacopiar);
}


function ComprobarMAYUSCULAS(valor){  
    console.log(valor);
     let x = Boolean(valor.match(/[A-Z]/g));
     console.log("MAYUSCULAS La palabra a comprobar es: "+valor+" y devolvio "+x);
     return x;
}

function ComprobarCaracteresEspeciales(valor){  
    console.log(valor);
    let tabla = /^[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]*$/g;
    let x = Boolean(valor.match(tabla));
    console.log("CARACTERES La palabra a comprobar es: "+valor+" y devolvio "+x);
    return x;
}

function DesaparecerMensajeError(){
    document.getElementById("MensajeNoEncontrado").style.display  = "none";
    document.getElementById("FotoMensaje").style.display  = "none";
    document.getElementById("Mensaje").style.display  = "none";

    document.getElementById("Texto-Encriptado").style.display = "block";
    document.getElementById("Boton-Copiar").style.display = "block";
}





function BotonEncriptar(){
    console.log("-----------------------------------------------");
    //Si esto es estupido, pero no funciona fuera de la funcion .-.
    let TextoParaEncriptar = document.getElementById("Texto-A-Encriptar");
    textoingesadeusuario = TextoParaEncriptar.value;
        
    //Comprobaciones

    if (textoingesadeusuario == ""){
        alert("Ingresa un mensaje primero");
    }else{
        if (ComprobarMAYUSCULAS(textoingesadeusuario)){
        alert("Quita las mayusculas");
        }else{
        if(ComprobarCaracteresEspeciales(textoingesadeusuario)){
        alert("Quita los caracteres especiales"); 
        } else{
        //Guardamos los valores en textoingresadoporusuario
        let temporal = EncriptacionMetodo();
        
        //Limpia la caja por si habia algo anteriormente
        console.log("temporal: "+temporal);  
        //Escribe le contenido procesado en EncriptacionMetodo();2
        document.getElementById("Texto-Encriptado").value = temporal;

        //Borrar falta mensaje y hacer aparecer resultado
        DesaparecerMensajeError();
        

        console.log("Encriptacion terminada"); 
    }
    }
    }
}


function BotonDesencriptar(){
    console.log("-----------------------------------------------");
    //Si esto es estupido, pero no funciona fuera de la funcion .-.
    let TextoParaEncriptar = document.getElementById("Texto-A-Encriptar");
    textoingesadeusuario = TextoParaEncriptar.value;
        
    //Comprobaciones

    if (textoingesadeusuario == ""){
        alert("Ingresa un mensaje primero");
    }else{
        if (ComprobarMAYUSCULAS(textoingesadeusuario)){
        alert("Quita las mayusculas");
        }else{
        if(ComprobarCaracteresEspeciales(textoingesadeusuario)){
        alert("Quita los caracteres especiales"); 
        } else{
        //Guardamos los valores en textoingresadoporusuario
        let temporal = DesencriptacionMetodo();
        
        //Limpia la caja por si habia algo anteriormente
        console.log("temporal: "+temporal);  
        //Escribe le contenido procesado en EncriptacionMetodo();2
        document.getElementById("Texto-Encriptado").value = temporal;

        //Borrar falta mensaje y hacer aparecer resultado
        DesaparecerMensajeError();
        

        console.log("Desencriptacion terminada"); 
    }
    }
    }
}

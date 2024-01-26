
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




function BotonEncriptar(){

let CajaAEncriptar = document.getElementById("EncriptarContenedor");
let CajaADesncriptar = document.getElementById("EncriptadoContenedor");
let cajaencriptadoravalor = CajaAEncriptar.value

if(CajaAEncriptar.value == ""){
    alert("Caja vacia");
}else{
    
   textoingesadeusuario = cajaencriptadoravalor;
   let replica = EncriptacionMetodo();
   console.log(replica);
   CajaADesncriptar.innerHTML = replica;

}
}

/*
function BotonEncriptar(){

    let CajaAEncriptar = document.getElementById("EncriptarContenedor");
    let CajaADesncriptar = document.getElementById("EncriptadoContenedor");
    let cajaencriptadoravalor = CajaAEncriptar.value
    
    if(CajaADesncriptar.value == ""){
        alert("Caja vacia");
    }else{
        
       textoingesadeusuario = cajaencriptadoravalor;
       let replica = EncriptacionMetodo();
       console.log(replica);
       CajaADesncriptar.innerHTML = "";
       CajaADesncriptar.innerHTML = replica;
    
    }
    }
    
    function BotonDesencriptar(){
    
        let CajaAEncriptar = document.getElementById("EncriptarContenedor");
        let CajaADesncriptar = document.getElementById("EncriptadoContenedor");
        let cajaencriptadoravalor = CajaAEncriptar.value
        
        
        if(CajaADesncriptar.value == ""){
            alert("Caja vacia");
        }else{
            
           textoingesadeusuario = CajaADesncriptar.value;
           let replicaB = DesencriptacionMetodo();
           console.log(replicaB);
           CajaAEncriptar.innerHTML = "";
           CajaAEncriptar.innerHTML = replicaB;
        
        }
    }
*/




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

}

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
let numeroSecreto = 0;
let Intentos = 0;
let listaNumeroSorteados = [];
let numeroMaximo = 10;
console.log(numeroSecreto);

function asignarTextoElemnto(elemento,texto){
    let elemntoHTML= document.querySelector(elemento);
    elemntoHTML.innerHTML = texto;  
    return;
}
function verificarIntento (){
    let numeroDeUsuario = parseInt(document.getElementById('valorUsuario').value);
    
    
    if(numeroDeUsuario === numeroSecreto){
        asignarTextoElemnto('p',`Acertaste el número ${Intentos} ${(Intentos===1)? 'vez' : 'veces'}`);
        document.getElementById('reiniciar').removeAttribute('disabled');
    } else{
        //el usuario no acerto

        if(numeroDeUsuario > numeroSecreto){
            asignarTextoElemnto('p','El número secreto es menor');
        } else {
             asignarTextoElemnto('p','El número secreto es mayor');

        }
        Intentos++;
        limpiarCaja();
    }
    return;

}

function limpiarCaja(){
    document.querySelector('#valorUsuario').value ='';  
}

function generarNumeroSecreto() {
    let = numeroGenerado = Math.floor(Math.random()*numeroMaximo)+1;  


    console.log(numeroSecreto);
    console.log(listaNumeroSorteados); 
    // si ya sorteamos todos los números
    if(listaNumeroSorteados.length == numeroMaximo ) {
        asignarTextoElemnto('p','ya se sortearon todos los números posibles');
    } else {
        // si el numero generado esta incluido en la lista 
        if(listaNumeroSorteados.includes(numeroGenerado)){
            return generarNumeroSecreto();
        }else{
            listaNumeroSorteados.push(numeroGenerado);
            return numeroGenerado;
        }
    }
}

function condicionesIniciales(){
    asignarTextoElemnto('h1','juego del numero secreto');
    asignarTextoElemnto('p',`indica un numemro del 1 al ${numeroMaximo}`);
    numeroSecreto = generarNumeroSecreto();
    Intentos = 1;
}

function reiniciarJuego(){
    //limpiar la caja 
    limpiarCaja();
    //indicar mensaje de intervalo de números
    //generar numero aleatorio
    //inicializar el numero de intentos
    condicionesIniciales();
    //deshabilitar el boton de nuevo juego 
    document.querySelector('#reiniciar').setAttribute('disabled','true');


}

condicionesIniciales();
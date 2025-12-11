/**
 * Número mayor
 */
function numeroMayor(){
    let primerNumero = document.getElementById("primerNumero").value;
    let segundoNumero = document.getElementById("segundoNumero").value;
    let tercerNumero = document.getElementById("tercerNumero").value;
    
    let numeroMayor = Math.max(primerNumero,segundoNumero,tercerNumero);

    document.getElementById("mayor").innerHTML = "El número mayor es: " + numeroMayor;
}
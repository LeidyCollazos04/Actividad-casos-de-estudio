/**
 * Determinar si un número es par o inmpar
 */
function parImpar(){
    let numero = document.getElementById("numero").value;
    if (numero != parseInt(numero) || numero < 0){
        document.getElementById("par-impar").innerHTML = "Ingrese un número válido";
        return;
    }
     
    let division = numero % 2;
    if (division === 0){
        document.getElementById("par-impar").innerHTML = "El número " + numero + " es par";
    } else {
        document.getElementById("par-impar").innerHTML = "El número " + numero + " es impar";
    }
}
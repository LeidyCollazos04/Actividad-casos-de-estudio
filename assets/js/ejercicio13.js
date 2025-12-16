/**
 * Determinar si un triángulo es equilátero, isósceles o escaleno
 */
function tipoTriangulo(){
    let lado1 = document.getElementById("lado1").value;
    let lado2 = document.getElementById("lado2").value;
    let lado3 = document.getElementById("lado3").value;

    if (lado1 <= 0 || lado2 <= 0 || lado3 <= 0){
        document.getElementById("tipo-Triangulo").innerHTML = "¡Valor no valido!"
        return;
    }

    if (lado1 === lado2 && lado2 === lado3){
        document.getElementById("tipo-Triangulo").innerHTML = "Es un triángulo equilátero";
    }else if (lado1 === lado2 || lado1 === lado3 || lado2 === lado3){
        document.getElementById("tipo-Triangulo").innerHTML = "Es un triángulo isósceles";
    }else{
        document.getElementById("tipo-Triangulo").innerHTML = "Es un triángulo escaleno";
    }
}
/**
 * Calcular la masa corporal de un deportista
 */
function masaCorporal(){
    let altura = document.getElementById("altura").value;
    let peso = document.getElementById("peso").value;
    let masaC = peso / (altura * altura);

    let masaRedondeada = Math.round(masaC * 100) / 100;

    document.getElementById("imc").innerHTML = "Indice de masa corporal: " + masaRedondeada;

    if (masaC < 16){
        document.getElementById("diagnostico").innerHTML = "Diagnostico: Criterio de ingreso en hospital";
    }else if (masaC < 16 ) {
        document.getElementById("diagnostico").innerHTML = "Diagnostico: Infrapeso";
    }else if (masaC < 18){
        document.getElementById("diagnostico").innerHTML = "Diagnostico: Bajo peso";
    }else if (masaC < 25){
        document.getElementById("diagnostico").innerHTML = "Diagnostico: Peso normal";
    }else if (masaC < 30){
        document.getElementById("diagnostico").innerHTML = "Diagnostico: Sobrepeso (Obesidad de grado I)"
    }else if (masaC < 35){
        document.getElementById("diagnostico").innerHTML = "Diagnostico: Sobrepeso crónico (Obesidad de grado II )"
    }else if (masaC < 40){
        document.getElementById("diagnostico").innerHTML = "Diagnostico: Sobrepeso crónico (Obesidad de grado III)"
    }else {
        document.getElementById("diagnostico").innerHTML = "Diagnostico: Obesidad mórbida (Obesidad de grado IV)"
    }
}
/**
 * Determinar el estado del clima según la temperatura
 */
function estadoClima(){
    let temperatura = document.getElementById("temperatura").value;

    if (temperatura < 0){
        document.getElementById("estado").innerHTML = "Diagnóstico: Clima helado"
    }else if (temperatura < 10){
        document.getElementById("estado").innerHTML = "Diagnóstico: Clima muy frío"
    }else if (temperatura < 20){
        document.getElementById("estado").innerHTML = "Diagnóstico: Clima frío"
    }else if (temperatura < 30){
        document.getElementById("estado").innerHTML = "Diagnóstico: Normal"
    }else if (temperatura < 40){
        document.getElementById("estado").innerHTML = "Diagnóstico: Hace calor"
    }else {
        document.getElementById("estado").innerHTML = "Diagnóstico: Hace mucho calor"
    }
}
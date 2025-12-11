/**
 * Atributos de la llanta de un vehículo
 */
function llantas(){
    let diametro = document.getElementById("diametro").value;
        if (diametro > 1.4){
            console.log("La rueda es para un vehículo grande");
        } else if (diametro <= 1.4 && diametro > 0.8){
            window.alert("La rueda es para un vehículo mediano");
        } else {
            document.getElementById("dato-llanta").innerHTML = "La rueda es para un vehículo pequeño";
        }

    let grosor = document.getElementById("grosor").value;
        if ((diametro > 1.4 && grosor < 0.4) || (diametro <= 1.4 && diametro > 0.8 && grosor < 0.25)){
            document.getElementById("dato-llanta").innerHTML = "El grosor para esta rueda es inferior al recomendado";
        }
        else{
            document.getElementById("dato-llanta").innerHTML = "El grosor de la llanta es el adecuado";
        }
    }
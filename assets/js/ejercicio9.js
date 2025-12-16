/**
 * Atributos de la llanta de un vehículo
 */
function evaluarLlanta() {
    let grosor = document.getElementById("grosor").value;
    let diametro = document.getElementById("diametro").value;

    // Clasificación según el diámetro
    if (diametro > 1.4) {
        console.log("La rueda es para un vehículo grande");
    } else if (diametro <= 1.4 && diametro > 0.8) {
        alert("La rueda es para un vehículo mediano");
    } else {
        console.log("La rueda es para un vehículo pequeño");
    }

    // Validación del grosor recomendado
    if (
        (diametro > 1.4 && grosor < 0.4) ||
        (diametro <= 1.4 && diametro > 0.8 && grosor < 0.25)
    ) {
        console.log("El grosor para esta rueda es inferior al recomendado");
    }
}
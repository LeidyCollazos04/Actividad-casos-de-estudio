/**
 * Verificar el tipo de riesgo en un laboratorio
 */
function riesgoBiologico(){
    const nivel = parseInt (document.getElementById ("nivel").value);
    let tipo;
    switch (nivel){
        case 1:
            tipo = "Riesgo biológico";
            break;
        case 2:
            tipo = "Riesgo químico";
            break;
        case 3:
            tipo = "Riesgo físico";
            break;
        case 4:
            tipo = "Riesgo ergonómico";
            break;
        case 5:
            tipo = "Riesgo psicosocial";
            break;
        default:
            tipo = "¡Nivel de riesgo no válido!";
    }
    document.getElementById("tipo-riesgo").innerHTML = tipo;
}

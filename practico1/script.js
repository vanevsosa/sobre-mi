    // Funcion para obtener el resultado de la operacion seleccionada traída desde el html
function calcular() {
    let resultado;
    let numero1 = document.getElementById("numero1").value;
    let numero2 = document.getElementById("numero2").value;
    let operacion = document.getElementById("operacion").value;

    // Validar que los campos no estén vacíos
    if (operacion==="none"||numero1===""||numero2==="") {
        alert("Complete todos los campos");
    } else {
    // Pasamos los value numero1 y numero2 a números
        numero1 = Number(numero1);
        numero2 = Number(numero2);

    // if anidados para las operaciones
        if(operacion==="sumar") {
            resultado=numero1+numero2;
        } else if(operacion==="restar") {
            resultado=numero1-numero2;
        } else if(operacion==="multiplicar") {
        resultado=numero1*numero2;
        } else if(operacion==="dividir") {
        if(numero2===0) {
            alert("La operación no es válida");
    } else {
        resultado=numero1/numero2;
    }
    // Acá doy límite de 20 dígitos al resultado
        } if((resultado.toString()).length > 20) {
        alert("El resultado tiene demasiados caracteres");
        } else {
    
    // Evento click para ebtener el resultado
        document.getElementById("resultado").innerHTML = (resultado);
        }
    }
}


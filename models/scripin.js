function mostrarMenu() {
    return (
        "Seleccione una opción:\n" +
        "1. Calcular prima normal\n" +
        "2. Calcular prima según faltas injustificadas\n" +
        "3. Salir"
    );
}

function primaNormal() {
    var salarioMensual = prompt("Ingrese su salario mensual:");
    var diasTrabajados = prompt("Ingrese sus días trabajados:");

    var resultadoPrima = salarioMensual * diasTrabajados / 360;
    console.log("Su prima normal es: " + resultadoPrima);
    return resultadoPrima;
}

function PrimaSegunFaltas() {
    var salarioMensual = prompt("Ingrese su salario mensual:");
    var diasTrabajados = prompt("Ingrese sus días trabajados:");
    var ausenciaInjustificada = prompt("Ingrese el número de faltas injustificadas:");
    var descuentoPorDiasNoTrabajados = 20000;

    var resultadoPrima = salarioMensual * diasTrabajados / 360;

    switch (true) {
        case (ausenciaInjustificada >= 5):
            var resultadoPrima2 = resultadoPrima - descuentoPorDiasNoTrabajados;
            console.log("Su prima según sus faltas injustificadas es: " + resultadoPrima2);
            break;
        case (ausenciaInjustificada < 5):
            console.log("No se aplica descuento por faltas injustificadas.");
            break;
        default:
            console.log("Entrada no válida.");
            break;
    }
}

function iniciarSistema() {
    let opcion;

    do {
        opcion = prompt(mostrarMenu());

        switch (opcion) {
            case '1':
                primaNormal();
                break;
            case '2':
                PrimaSegunFaltas();
                break;
            case '3':
                console.log("Saliendo del sistema.");
                break;
            default:
                console.log("Opción no válida. Intente de nuevo.");
                break;
        }

        prompt("Presione Enter para continuar...");
    } while (opcion !== '3');
}

iniciarSistema();

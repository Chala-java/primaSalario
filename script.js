function primaSegunDiasNoLaboradas(){
    var salarioBase=prompt("ingrese su salario mensual")
    var diasTrabajados=prompt("ingrese sus dias trabajados")
    var primaNormal = salarioBase*diasTrabajados/360

    if(diasTrabajados<=180){
        console.log("esta es su prima"+primaNormal)
    }else{
        console.log("que su numero horas ingresadas es invalido")
    }
}

function primaSegunFaltasInjustificadas (){ 
    var salarioBase2=prompt("ingrese su salario mensual")
    var diasTrabajados2=prompt("ingrese sus dias trabajados")
    var primaNormal2 = salarioBase2*diasTrabajados2/360
    var diasInjustificados =prompt("ingrese sus dias injustificados")

    var descuentoFaltas=100000

    var  descuentoPrimaFaltas= primaNormal2 - descuentoFaltas

    if(diasInjustificados>5 && diasTrabajados2<=180){
        console.log("esta es su prima segun faltas injustificadas"+descuentoPrimaFaltas)
        
    }else if(diasInjustificados<5){

        console.log("esta es su prima normal"+primaNormal2)
    }else(
        console.log("que su numero dias ingresadas es invalido")
    )

    }

    
primaSegunDiasNoLaboradas()
primaSegunFaltasInjustificadas()
function ejercicio1(){
    var importe= parseFloat(prompt("Ingrese el importe de la compra: "));
    var des;


    if (importe>=800 && importe<=1000){
    des=importe*0.02
    document.write("EL importe es: "+importe)
    document.write("<br>El descuento del 2% es: "+des)
    document.write("<br>El importe de compra final es: "+(importe-des))
    }
    

    else if (importe>=1500 && importe<=3500){
    des=importe*0.03
    document.write("EL importe es: "+importe)
    document.write("<br>El descuento del 3% es: "+des)
    document.write("<br>El importe de compra final es: "+(importe-des))    
    }


    else if (importe>=3500){
    des= importe*0.04
    document.write("EL importe es: "+importe)
    document.write("<br>El descuento del 4% es: "+des)
    document.write("<br>El importe de compra final es: "+(importe-des))    
    }

    else if (importe<=800){
        document.write("EL importe es: "+importe)
        document.write("<br>No hay descuento para este tipo de importe")
        }

    else(importe>=1000);
        document.write("EL importe es: "+importe)
        document.write("<br>No hay descuento para este tipo de importe")

}


function ejercicio2(){
    alumno = prompt("Ingrese el nombre del alumno")
    exparcial = parseFloat(prompt("Ingrese la nota del examen parcial"));
    exfinal = parseFloat(prompt("Ingrese la nota del examen final"));
    practi = parseFloat(prompt("Ingrese el promedio de practicas"));

    promedio = (exparcial+(exfinal*2)+practi)/4;

    if (promedio>=13){
        document.write("Alumno: "+alumno)
        document.write("<br>La nota de su examen parcial es: "+exparcial)
        document.write("<br>La nota de su examen final es: "+exfinal)
        document.write("<br>La nota de su promedio de p es: "+practi)
        document.write("<br>El alumno esta aprobado con :"+promedio)
    }
    else{
        document.write("Usted esta desaprobado")
    }
    
}
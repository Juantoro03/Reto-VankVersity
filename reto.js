alert("Bienvenid@ a -El Futuro En Tus Manos. La educación financiera es la clave para tomar decisiones inteligentes, aprovechar oportunidades y construir un futuro económico sólido. Aprende, planifica y haz que tu futuro esté en tus manos.")
function temas() {
        let tema=prompt("Cual tema deseas conocer: \n1-● Introducción a las Finanzas Personales\n2-● Presupuesto y Ahorro\n3-● Conceptos Básicos de Inversión \n4-● Salir del Menú")
         switch (tema){
        
            case "1":
               
                modulo1()
                break;
            case "2":
                modulo2()
                break;
            case "3":
                modulo3()
                break;
            case "4":
                mensaje()
                break;
        }

}
temas()


var estadoFinanciero;

function mensaje(){
    alert("Gracias por Visitarnos, te esperamos pronto")
}

function modulo1(){
    alert("Módulo 1-Conceptos Financieros Fundamentales \nAquí tienes una descripción básica de los principales conceptos financieros que te ayudarán a gestionar mejor tus finanzas:\n Ingresos: Todo el dinero que recibes, ya sea de tu trabajo, negocios, inversiones o cualquier otra fuente. Los ingresos son la base para planificar tus finanzas.\nEgresos: Son todos los gastos que realizas, como pagos de servicios, compras, deudas o entretenimiento. Mantener un control de tus egresos es clave para evitar el desbalance financiero.\nAhorro: Es la parte de tus ingresos que decides reservar para metas futuras o imprevistos. El ahorro te da seguridad y es esencial para construir un fondo de emergencia o invertir.\nDeuda: Es el dinero que debes a terceros, como préstamos o tarjetas de crédito. Gestionar la deuda de manera responsable implica evitar excesos y cumplir con los pagos para mantener una buena salud financiera.\nComprender estos conceptos es el primer paso para lograr estabilidad y tomar el control de tu economía.")
    if(confirm("¿deseas ver los demas módulos? (aceptar: Sí - cancelar: No)")){
        temas()
    }else{
        mensaje()
    }
}

function modulo2(){
     let ahorro=parseFloat(prompt("ingresa el porcentaje de tus ingresos que destinas para el ahorro:(0-100%)"))
     let deudas=confirm("tienes deudas(aceptar: si - cancelar: no)");

    if(ahorro>59 &&ahorro<101){
        if(deudas){
            alert("¡tienes unas finanzas excelentes, recuerda estar al día con tus deudas! ")

        }else{
            alert("¡tus finanzas son excelentes, sigue así!")
        }
        estadoFinanciero="excelente"
    }else if(ahorro>20 &&ahorro<60){
        if(deudas){
            alert("¡tus finanzas son moderadas pero debes pagar tus deudas, crea una estrategia financiera!")

        }else{
            alert("¡tus deudas son moderadas pero pueden mejorar, crea una estrategia financiera !")
        }
        estadoFinanciero="moderado"

    }else if(ahorro>0 && ahorro<21){
        if(deudas){
            alert("¡Ten cuidado tus finanzas estan malas y tienes deudas pendientes, debes empezar a actuar ahora!")

        }else{
            alert("¡tus finanzas no son buenas, debes empezar a actuar ahora! ")
        }
        estadoFinanciero="malo"

    }else{
        alert("debes ingresar un valor entre 0-100")
        modulo2()
    }
    if(confirm("¿deseas ver los demas módulos? (aceptar: Sí - cancelar: No)")){
        temas()
    }else{
        mensaje()
    }
}

function modulo3(){
    
    if(estadoFinanciero==undefined){
        alert("primero debes calcular tus estado de salud financiera ")
        modulo2()
    }else{
        if(estadoFinanciero==="excelente"){
            alert(
                "Finanzas Excelentes:\n" +
                "- Invierte y diversifica: Explora acciones, bienes raíces, bonos y fondos indexados.\n" +
                "- Planifica a largo plazo: Optimiza ahorros para la jubilación y estrategias fiscales.\n" +
                "- Crea ingresos pasivos: Busca nuevas fuentes, como negocios o propiedades.\n" +
                "- Invierte en ti mismo: Mejora tus habilidades con cursos y mentorías."
              );

        }else if(estadoFinanciero==="moderado"){
            
            alert(
                "Finanzas Moderadas:\n" +
                "- Ahorra para emergencias: Destina entre 3 y 6 meses de gastos básicos.\n" +
                "- Reduce deudas: Prioriza las de alto interés.\n" +
                "- Haz un presupuesto: Identifica y recorta gastos innecesarios.\n" +
                "- Comienza a invertir: Inicia con productos de bajo riesgo."
              );

        }else{
            alert(
                "Finanzas Malas:\n" +
                "- Organiza tus finanzas: Identifica ingresos, gastos y deudas.\n" +
                "- Elimina deudas: Paga las de mayor interés y negocia mejores términos.\n" +
                "- Controla gastos: Adopta un presupuesto estricto y evita nuevas deudas.\n" +
                "- Busca ingresos extras: Trabajos adicionales o monetiza un pasatiempo.\n" +
                "- Edúcate financieramente: Aprende sobre ahorro y manejo de deudas."
              );

        }
        if(confirm("¿deseas ver los demas módulos? (aceptar: Sí - cancelar: No)")){
            temas()
        }else{
            mensaje()
        }

    }
    

    
}


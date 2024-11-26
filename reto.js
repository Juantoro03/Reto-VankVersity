function temas() {
    alert("Bienvenid@ a El Futuro En Tus Manos. La educación financiera es la clave para tomar decisiones inteligentes, aprovechar oportunidades y construir un futuro económico sólido. Aprende, planifica y haz que tu futuro esté en tus manos.")

    let controlMenu=true
    while(controlMenu==true){
        let tema=prompt("Cual tema deseas conocer: \n1-● Introducción a las Finanzas Personales\n2-● Presupuesto y Ahorro\n3-● Conceptos Básicos de Inversión")
         switch (tema){
        
            case "1":
                alert("Introducción a las Finanzas Personales \nLas finanzas personales abarcan la gestión del dinero en aspectos como el ahorro, la inversión, las deudas y la planificación. Aprender a manejarlas nos permite alcanzar metas financieras, mejorar nuestra calidad de vida y garantizar estabilidad económica, tanto en el presente como en el futuro.")
                
                break;
            case "2":
                alert("Presupuesto y Ahorro\n El presupuesto y el ahorro son pilares fundamentales de unas finanzas personales saludables. Un presupuesto permite organizar los ingresos y controlar los gastos, asegurando que el dinero se destine a lo realmente importante. Por su parte, el ahorro es clave para afrontar imprevistos, cumplir metas y construir un futuro financiero seguro. Juntos, son herramientas esenciales para lograr estabilidad y tomar el control de tus finanzas.")
                break;
            case "3":
                alert("Conceptos Básicos de Inversión \nLa inversión consiste en destinar recursos, generalmente dinero, a instrumentos o proyectos con el objetivo de obtener ganancias o rendimientos en el futuro. Entre los conceptos clave están: \n Riesgo y retorno: A mayor riesgo, generalmente, mayor es el potencial de ganancia, pero también la posibilidad de pérdida. \nDiversificación: Distribuir las inversiones en diferentes activos para reducir el riesgo.\nHorizonte temporal: El tiempo que se planea mantener una inversión antes de obtener resultados.\nLiquidez: La facilidad con la que un activo puede convertirse en efectivo sin perder valor.\nEntender estos principios permite tomar decisiones informadas y alineadas con tus objetivos financieros.")

        }
        let continuar=confirm("deseas continuar: (aceptar-cancelar)")
        alert(continuar)

        if(!continuar){
            controlMenu=false;
        }
    }
    modulo1()
}
temas()

function modulo1(){
    alert("Módulo 1- \nConceptos Financieros Fundamentales \nAquí tienes una descripción básica de los principales conceptos financieros que te ayudarán a gestionar mejor tus finanzas:\n Ingresos: Todo el dinero que recibes, ya sea de tu trabajo, negocios, inversiones o cualquier otra fuente. Los ingresos son la base para planificar tus finanzas.\nEgresos: Son todos los gastos que realizas, como pagos de servicios, compras, deudas o entretenimiento. Mantener un control de tus egresos es clave para evitar el desbalance financiero.\nAhorro: Es la parte de tus ingresos que decides reservar para metas futuras o imprevistos. El ahorro te da seguridad y es esencial para construir un fondo de emergencia o invertir.\nDeuda: Es el dinero que debes a terceros, como préstamos o tarjetas de crédito. Gestionar la deuda de manera responsable implica evitar excesos y cumplir con los pagos para mantener una buena salud financiera.\nComprender estos conceptos es el primer paso para lograr estabilidad y tomar el control de tu economía.")

    modulo2()

}

function modulo2(){
    alert("Módulo 2: Calculadora De Presupuesto Personal")
    let ahorro=parseFloat(prompt("ingresa el porcetaje de tus ingresos que destinas para el ahorro:(0-100%"));
    let deudas=confirm("tienes deudas(aceptar: si - cancelar: no)")

    if( ahorro>50 && ahorro<101 ){
        if(deudas===true){
            alert("Tu índice de salud financiera es: Excelente. No necesitas mejorar tus estrategias de ahorro pero debes pagar tus deudas")
        }else{
            alert("Tu índice de salud financiera es: Excelente. No necesitas mejorar tus estrategias de ahorro.")
        }
        
    }else if(ahorro>20 && ahorro<51 ){
        if(deudas===true){
            alert("Tu índice de salud financiera es: moderado. No necesitas mejorar tus estrategias de ahorro pero debes pagar tus deudas")
        }else{
            alert("Tu índice de salud financiera es: moderado. No necesitas mejorar tus estrategias de ahorro.")
        }
        
    }else if(ahorro>=0 && ahorro<21 ){
        if(deudas===true){
            alert("Tu índice de salud financiera es: malo.  necesitas mejorar tus estrategias de ahorro y debes pagar tus deudas")
        }else{
            alert("Tu índice de salud financiera es: malo. necesitas mejorar tus estrategias de ahorro.")
        }
        

    }else{
        alert("el porcentaje debe estar en el rango esperado")
        modulo2()
    }
    modulo3(ahorro,deudas)
}

function modulo3(ahorro,deudas){
    alert("Módulo 3:  Consejos Prácticos de Finanzas Personales")
    let saludFinanciera=""

    if(ahorro>60 &&ahorro<101){
        if(deudas===true){
            alert("tienes un pocentaje de ahorro excelente pero debes ponerte al día con tus deudas consejo: \n Prioriza el pago de deudas con mayor tasa de interés y busca consolidar tus compromisos financieros.")
        }else{
            alert("Sigue así tienes un pocentaje de ahorro excelente!!")
        }
        
        saludFinanciera="excelente"
    }else if(ahorro>20 &&ahorro<61){
        if(deudas===true){
            alert("tu ahorro es moderado pero debes ponerte al día con tus deudas consejo: \n Prioriza el pago de deudas con mayor tasa de interés y busca consolidar tus compromisos financieros.")

        }else{
            alert("tu ahorro es moderado, puedes mejorarlo!!")
        }
        
        saludFinanciera="moderada"

    }else if(ahorro>=0 && ahorro<21){
        if(deudas===true){
            alert("Tienes poco ahorro consejo:Implementa la regla del 50/30/20: 50% para necesidades, 30% para gustos y 20% para ahorro e inversión. ademas debes ponerte al día con tus deudas consejo: \n Prioriza el pago de deudas con mayor tasa de interés y busca consolidar tus compromisos financieros.")

        }else{
            alert("Tienes poco ahorro consejo:Implementa la regla del 50/30/20: 50% para necesidades, 30% para gustos y 20% para ahorro e inversión. ")
        }
        
        saludFinanciera="mala"
    }

    reporteFinal(saludFinanciera)
}

function reporteFinal(saludFinanciera){
    
    if(saludFinanciera==="excelente"){
        alert("Resumen Final:\n■ Nivel de Salud Financiera: Excelente \n■ Recomendación: Sigue así, llegaras muy lejos con tus finanzas!")
    }else if(saludFinanciera==="moderada"){
        alert("Resumen Final:\n■ Nivel de Salud Financiera: Moderada \n■ Recomendación: Puedes mejorar tus finanzas, tu puedes!")

    }else{
        alert("Resumen Final:\n■ Nivel de Salud Financiera: Mala \n■ Recomendación: Debes ponerle cuidado a tus finanzas para que puedas lograr grandes cosas!")
        
    }

    if(confirm("deseas volver a realizar el estudio de la Salud Financiera? (aceptar-cancelar)")){
        temas()
    }else{
        alert("Esperamos que te hayas aprendido sobre la importancia de las finanzas personales, sigue educandote!")
    }

}
function loadImage(url){
    return new Promise(resolve =>{
        const xhr = new XMLHttpRequest();
        xhr.open('GET', url , true);
        xhr.responseType = "blob";
        xhr.onload = function (e) {
            const reader = new FileReader();
            reader.onload = function(event) {
                const res = event.target.result;
                resolve(res);
            }
            const file = this.response;
            reader.readAsDataURL(file);
        }
        xhr.send();
    });
}

let signaturePad = null;

window.addEventListener('load', async () => {
    const canvas = document.querySelector("canvas");
    canvas.height = canvas.offsetHeight;
    canvas.width = canvas.offsetWidth;

    signaturePad = new SignaturePad(canvas, {});
    const form = document.querySelector('#form');
    form.addEventListener('submit', (e) => {
        e.preventDefault();

        //item 1
        let ts = document.getElementById('ts').value;

        //item 2
        let nombre = document.getElementById('nombre').value;
        let apellidop = document.getElementById('apellidop').value;
        let apellidom = document.getElementById('apellidom').value;
        let run = document.getElementById('run').value;
        let fnacimiento = document.getElementById('fnacimiento').value;
        let sexo = document.querySelector('input[name="sexo"]:checked').value;
        let nacionalidad = document.getElementById('nacionalidad').value;

        //item 3
        let region = document.getElementById('region').value;
        let comuna = document.getElementById('comuna').value;
        let calle = document.getElementById('calle').value;
        let numero = document.getElementById('numero').value;
        let pobla = document.getElementById('pobla').value;
        let dep = document.getElementById('dep').value;
        let tp = document.getElementById('tp').value;
        let tel = document.getElementById('tel').value;
        let correo = document.getElementById('correo').value;
        let autorizo = document.querySelector('input[name="autorizo"]:checked').value;

        //item 4
        let estadoActual = document.getElementById('estadoActual').value;
        let mot = document.getElementById('mot').value;
        let pen = document.getElementById('pen').value;
        let tcontratado = document.getElementById('tcontratado').value;

        //item 5
        let rut = document.getElementById('rut').value;
        let rsocial = document.getElementById('rsocial').value;
        let domi = document.getElementById('domi').value;
        let emTel = document.getElementById('emTel').value;
        let rimponible = document.getElementById('rimponible').value;
        let inicio = document.getElementById('inicio').value;
        let fin = document.getElementById('fin').value;
        //-----------------------------------------------------------
        let rut2 = document.getElementById('rut2').value;
        let rsocial2 = document.getElementById('rsocial2').value;
        let domi2 = document.getElementById('domi2').value;
        let emTel2 = document.getElementById('emTel2').value;
        let rimponible2 = document.getElementById('rimponible2').value;
        let inicio2 = document.getElementById('inicio2').value;
        let fin2 = document.getElementById('fin2').value;
        let rentfinal = document.getElementById('rentfinal').value;

        // item 6
        let carRut = document.getElementById('carRut').value;
        let carApellido = document.getElementById('carApellido').value;
        let carNombre = document.getElementById('carNombre').value;
        let carNac = document.getElementById('carNac').value;
        let carSexo = document.querySelector('input[name="carSexo"]:checked').value;
        let par = document.getElementById('par').value;
        let accion = document.getElementById('accion').value;
        //----------------------------------------------------------------------------
        let carRut2 = document.getElementById('carRut2').value;
        let carApellido2 = document.getElementById('carApellido2').value;
        let carNombre2 = document.getElementById('carNombre2').value;
        let carNac2 = document.getElementById('carNac2').value;
        let carSexo2 = document.querySelector('input[name="carSexo2"]:checked').value;
        let par2 = document.getElementById('par2').value;
        let accion2 = document.getElementById('accion2').value;
        //----------------------------------------------------------------------------
        let carRut3 = document.getElementById('carRut3').value;
        let carApellido3 = document.getElementById('carApellido3').value;
        let carNombre3 = document.getElementById('carNombre3').value;
        let carNac3 = document.getElementById('carNac3').value;
        let carSexo3 = document.querySelector('input[name="carSexo3"]:checked').value;
        let par3 = document.getElementById('par3').value;
        let accion3 = document.getElementById('accion3').value;
        //----------------------------------------------------------------------------
        let carRut4 = document.getElementById('carRut4').value;
        let carApellido4 = document.getElementById('carApellido4').value;
        let carNombre4 = document.getElementById('carNombre4').value;
        let carNac4 = document.getElementById('carNac4').value;
        let carSexo4 = document.querySelector('input[name="carSexo4"]:checked').value;
        let par4 = document.getElementById('par4').value;
        let accion4 = document.getElementById('accion4').value;
        //----------------------------------------------------------------------------
        let carRut5 = document.getElementById('carRut5').value;
        let carApellido5 = document.getElementById('carApellido5').value;
        let carNombre5 = document.getElementById('carNombre5').value;
        let carNac5 = document.getElementById('carNac5').value;
        let carSexo5 = document.querySelector('input[name="carSexo5"]:checked').value;
        let par5 = document.getElementById('par5').value;
        let accion5 = document.getElementById('accion5').value;

        //item 7 
        let estpublic = document.getElementById('estpublic').value;
        let establecimiento = document.getElementById('establecimiento').value;
        let establecimientoComuna = document.getElementById('establecimientoComuna').value;
        let establecimientoRegion = document.getElementById('establecimientoRegion').value;




        generatePDF(ts, 
            nombre, apellidop, apellidom, fnacimiento, run, sexo, nacionalidad , region, comuna, calle, numero , pobla, dep, tp, tel, correo, autorizo, 
            estadoActual, mot, pen, tcontratado, 
            rut, rsocial, domi, emTel, rimponible, inicio, fin, rut2, rsocial2, domi2, emTel2, rimponible2, inicio2, fin2, rentfinal, 
            carRut, carApellido, carNombre, carNac, carSexo, par, accion, 
            carRut2, carApellido2, carNombre2, carNac2, carSexo2, par2, accion2, 
            carRut3, carApellido3, carNombre3, carNac3, carSexo3, par3, accion3, 
            carRut4, carApellido4, carNombre4, carNac4, carSexo4, par4, accion4, 
            carRut5, carApellido5, carNombre5, carNac5, carSexo5, par5, accion5, 
            estpublic, establecimiento, establecimientoComuna, establecimientoRegion);
    })
})



async function generatePDF(ts, 
    nombre, apellidop, apellidom, fnacimiento, run, sexo, nacionalidad , region, comuna, calle, numero , pobla, dep, tp, tel, correo, autorizo, 
    estadoActual, mot, pen, tcontratado,
    rut, rsocial, domi, emTel, rimponible, inicio, fin, rut2, rsocial2, domi2, emTel2, rimponible2, inicio2, fin2, rentfinal, 
    carRut, carApellido, carNombre, carNac, carSexo, par, accion, 
    carRut2, carApellido2, carNombre2, carNac2, carSexo2, par2, accion2, 
    carRut3, carApellido3, carNombre3, carNac3, carSexo3, par3, accion3, 
    carRut4, carApellido4, carNombre4, carNac4, carSexo4, par4, accion4, 
    carRut5, carApellido5, carNombre5, carNac5, carSexo5, par5, accion5, 
    estpublic, establecimiento, establecimientoComuna, establecimientoRegion) {
    const image1 = await loadImage("images/Form1.jpg");
    const image2 = await loadImage("images/Form2.jpg");
    const signatureImage = signaturePad.toDataURL(); 

    const pdf = new jsPDF('p', 'pt','letter');

    pdf.addImage(image1, 'PNG', 0, 0, 565, 792);
    if(ts=="af"){
        pdf.rect(75, 150, 4, 4, 'F');
    }else if (ts =="ac") {
        pdf.rect(75, 157, 4, 4, 'F');
    } else if (ts =="in") {
        pdf.rect(75, 164, 4, 4, 'F');
    } else if (ts == "mo") {
        pdf.rect(337, 149, 4, 4, 'F');
    } else if (ts =='ca') {
        pdf.rect(337, 156, 4, 4, 'F');
    } else {
        console.log("elemento vacio");
    }


    if (sexo == "m") {
        pdf.rect(380, 220, 4,4, 'F')
    } else {
        pdf.rect(333, 220,4,4, 'F')
    }
    
    if (tp == "pp") {
        pdf.rect(159, 290, 4,4, 'F')
    } else if (tp == "pd"){
        pdf.rect(241, 290, 4,4, 'F')
    } else if (tp == "aa"){
        pdf.rect(338, 290, 4,4, 'F')
    } else if (tp == "ao") {
        pdf.rect(411, 290, 4,4, 'F')
    } else if (tp == "os"){
        pdf.rect(479, 290, 4,4, 'F')
    } else {
        console.log("TP vacia")
    }

    if (autorizo== "1") {
        pdf.rect(326, 318, 4,4, 'F')
    } else if (autorizo == "0") {
        pdf.rect(347, 325, 4,4, 'F')
    } else {
        console.log("Autorizo vacio")
    }

    pdf.setFontSize(10)
    pdf.text(apellidop, 147, 201);
    pdf.text(apellidom, 277,201);
    pdf.text(nombre, 397,201);

    pdf.text(run.toString(), 100, 225);
    pdf.text(fnacimiento.toString(),215,225);
    pdf.text(nacionalidad,460,225);

    pdf.text(calle,110,260);
    pdf.text(numero,268,260);
    pdf.text(pobla,313,260);
    pdf.text(dep,490,260);

    pdf.text(comuna,150,281);
    pdf.text(comuna,330,281);
    pdf.text(region,490,281);

    pdf.text(tel,170,310);
    pdf.text(correo,335,310);
    
    if (estadoActual == "contratado") {
        pdf.text(rut,80,478)
        pdf.text(rsocial,190,478)
        pdf.text(domi,330,478)

        pdf.text(emTel,80,500)
        pdf.text(rimponible,200,500)
        pdf.text(inicio,360,500)
        pdf.text(fin,452,500)
    } else if (estadoActual == "pensionado"){
        pdf.text(rut2,80,478)
        pdf.text(rsocial2,190,478)
        pdf.text(domi2,330,478)

        pdf.text(emTel2,80,500)
        pdf.text(rimponible2,200,500)
        pdf.text(inicio2,360,500)
        pdf.text(fin2,452,500)

    } else if (estadoActual = "PyC"){
        pdf.text(rut,80,478)
        pdf.text(rsocial,190,478)
        pdf.text(domi,330,478)

        pdf.text(emTel,80,500)
        pdf.text(rimponible,200,500)
        pdf.text(inicio,360,500)
        pdf.text(fin,452,500)

        pdf.text(rut2,80,519)
        pdf.text(rsocial2,190,519)
        pdf.text(domi2,330,519)

        pdf.text(emTel2,80,540)
        pdf.text(rimponible2,200,540)
        pdf.text(inicio2,360,540)
        pdf.text(fin2,452,540)
    }
    if(tcontratado =="ci"){
        pdf.rect(72, 385, 4,4, 'F')
    }
    if (tcontratado =="cf") {
        pdf.rect(72, 393, 4,4, 'F')
    }
    if (tcontratado =="co") {
        pdf.rect(72, 401, 4,4, 'F')
    }
    if (tcontratado =="cj") {
        pdf.rect(173, 385, 4,4, 'F')
    }
    if (tcontratado =="tps") {
        pdf.rect(173, 393, 4,4, 'F')
    }

    if (otr =="ind") {
        pdf.rect(334, 385, 4,4, 'F')
    }
    if (otr =="ces") {
        pdf.rect(334, 393, 4,4, 'F')
    }

    if (mot =="vz") {
        pdf.rect(72, 418, 4,4, 'F')
    }
    if (mot =="vs") {
        pdf.rect(72, 426, 4,4, 'F')
    }
    if (mot =="od") {
        pdf.rect(72, 432, 4,4, 'F')
    }
    if (mot =="iz") {
        pdf.rect(154, 418, 4,4, 'F')
    }
    if (mot =="pt") {
        pdf.rect(154, 426, 4,4, 'F')
    }

    if (pen =="ips") {
        pdf.rect(334, 418, 4,4, 'F')
    }
    if (pen =="afp") {
        pdf.rect(334, 426, 4,4, 'F')
    }
    if (pen =="cia") {
        pdf.rect(409, 418, 4,4, 'F')
    }
    if (pen =="mutual") {
        pdf.rect(409, 426, 4,4, 'F')
    }

    




    pdf.text(rentfinal,205,555)


    pdf.addPage();
    pdf.addImage(image2, 'PNG', 0, 0, 565, 792);
    pdf.addImage(signatureImage,'PNG', 420, 231, 96, 13);

    pdf.text(carRut,80,90)
    pdf.text(carApellido,190,90)
    pdf.text(carNombre,310,90)
    pdf.text(carNac,425,90)
    pdf.text(carSexo,480,90)
    pdf.text(par,495,90)
    pdf.text(accion,510,90)

    pdf.text(carRut2,80,104)
    pdf.text(carApellido2,190,104)
    pdf.text(carNombre2,310,104)
    pdf.text(carNac2,425,104)
    pdf.text(carSexo2,480,104)
    pdf.text(par2,495,104)
    pdf.text(accion2,510,104)

    pdf.text(carRut3,80,122)
    pdf.text(carApellido3,190,122)
    pdf.text(carNombre3,310,122)
    pdf.text(carNac3,425,122)
    pdf.text(carSexo3,480,122)
    pdf.text(par3,495,122)
    pdf.text(accion3,510,122)

    pdf.text(carRut4,80,134)
    pdf.text(carApellido4,190,134)
    pdf.text(carNombre4,310,134)
    pdf.text(carNac4,425,134)
    pdf.text(carSexo4,480,134)
    pdf.text(par4,495,134)
    pdf.text(accion4,510,134)

    pdf.text(carRut5,80,146)
    pdf.text(carApellido5,190,146)
    pdf.text(carNombre5,310,146)
    pdf.text(carNac5,425,146)
    pdf.text(carSexo5,480,146)
    pdf.text(par5,495,146)
    pdf.text(accion5,510,146)
    
    let nomcom = nombre + " " + apellidop + " " + apellidom;
    if (estpublic=="si") {
        pdf.rect(75, 186, 4,4, 'F')
        pdf.text(establecimiento,111,186)
        pdf.text(establecimientoComuna,111,186)
        pdf.text(establecimientoRegion,111,186)
    }
    if (estpublic=="no") {
        pdf.rect(495, 186, 4,4, 'F')
    }
    pdf.text(nomcom,148,233)
    pdf.text(run,330,233)


    pdf.save("pr.pdf");
}

async function verCargas(){
    let cantCargas = document.getElementById('cantCargas').value;
    if (cantCargas == "0") {
        carga1.hidden = "hidden";
        carga2.hidden = "hidden";
        carga3.hidden = "hidden";
        carga4.hidden = "hidden";
        carga5.hidden = "hidden";
        
    } else if (cantCargas == "1"){
        carga1.hidden = false;
        carga2.hidden = "hidden";        
        carga3.hidden = "hidden";        
        carga4.hidden = "hidden";        
        carga5.hidden = "hidden";        
    } else if (cantCargas == "2"){
        carga1.hidden = false;
        carga2.hidden = false;
        carga3.hidden = "hidden";        
        carga4.hidden = "hidden";        
        carga5.hidden = "hidden"; 
    } else if (cantCargas == "3"){
        carga1.hidden = false;
        carga2.hidden = false;
        carga3.hidden = false;        
        carga4.hidden = "hidden";        
        carga5.hidden = "hidden"; 
    } else if (cantCargas == "4"){
        carga1.hidden = false;
        carga2.hidden = false;
        carga3.hidden = false;        
        carga4.hidden = false;        
        carga5.hidden = "hidden"; 
    } else if (cantCargas == "5"){
        carga1.hidden = false;
        carga2.hidden = false;
        carga3.hidden = false;        
        carga4.hidden = false;        
        carga5.hidden = false; 
    }
}

async function dest(){
    let estpublic = document.getElementById('estpublic').value;
    let est = document.getElementById('est');
    if (estpublic=="si") {
        est.hidden= false;
    } else {
        est.hidden="hidden"
    }
}

async function estado(){
    let estadoActual = document.getElementById('estadoActual').value;
    let contratado = document.getElementById('contratado');
    let pensionado = document.getElementById('pensionado');
    let otros = document.getElementById('otros');
    let empleador = document.getElementById('empleador');
    let pagadora = document.getElementById('pagadora');

    if (estadoActual=="contratado") {
        contratado.hidden = false;
        pensionado.hidden = "hidden";
        otros.hidden = "hidden"; 
        empleador.hidden = false; 
        pagadora.hidden = "hidden"; 

    } else if (estadoActual=="pensionado") {
        contratado.hidden = "hidden"; 
        pensionado.hidden = false;
        otros.hidden = "hidden";
        empleador.hidden = "hidden"; 
        pagadora.hidden = false;

    } else if (estadoActual == "otros") {
        contratado.hidden = "hidden"; 
        pensionado.hidden = "hidden";
        otros.hidden = false;
        empleador.hidden = "hidden"; 
        pagadora.hidden = "hidden"; 
    
    } else if (estadoActual == "PyC"){
        contratado.hidden = false; 
        pensionado.hidden = false;
        otros.hidden = "hidden";
        empleador.hidden = false;
        pagadora.hidden = false; 

    } else if (estadoActual == "PeI") {
        contratado.hidden = "hidden"; 
        pensionado.hidden = false;
        otros.hidden = false;
        empleador.hidden = "hidden"; 
        pagadora.hidden = false; 

    } else {
        contratado.hidden = "hidden"; 
        pensionado.hidden = "hidden";
        otros.hidden = "hidden";
        empleador.hidden = "hidden"; 
        pagadora.hidden = "hidden"; 
    }
}

function checkRut(run) {
    // Despejar Puntos
    var valor = run.value.replace('.', '');
    // Despejar Guión
    valor = valor.replace('-', '');

    // Aislar Cuerpo y Dígito Verificador
    cuerpo = valor.slice(0, -1);
    dv = valor.slice(-1).toUpperCase();

    // Formatear RUN
    run.value = cuerpo + '-' + dv

    // Si no cumple con el mínimo ej. (n.nnn.nnn)
    if (cuerpo.length < 7) {
        run.setCustomValidity("RUT Incompleto");
        return false;
    }

    // Calcular Dígito Verificador
    suma = 0;
    multiplo = 2;

    // Para cada dígito del Cuerpo
    for (i = 1; i <= cuerpo.length; i++) {

        // Obtener su Producto con el Múltiplo Correspondiente
        index = multiplo * valor.charAt(cuerpo.length - i);

        // Sumar al Contador General
        suma = suma + index;

        // Consolidar Múltiplo dentro del rango [2,7]
        if (multiplo < 7) {
            multiplo = multiplo + 1;
        } else {
            multiplo = 2;
        }

    }

    // Calcular Dígito Verificador en base al Módulo 11
    dvEsperado = 11 - (suma % 11);

    // Casos Especiales (0 y K)
    dv = (dv == 'K') ? 10 : dv;
    dv = (dv == 0) ? 11 : dv;

    // Validar que el Cuerpo coincide con su Dígito Verificador
    if (dvEsperado != dv) {
        run.setCustomValidity("RUT Inválido");
        return false;
    }

    // Si todo sale bien, eliminar errores (decretar que es válido)
    run.setCustomValidity('');
}
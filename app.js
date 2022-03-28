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
        let inscrito = document.querySelector('input[name="inscrito"]:checked').value;
        let establecimiento = document.getElementById('establecimiento').value;
        let establecimientoComuna = document.getElementById('establecimientoComuna').value;
        let establecimeintoRegion = document.getElementById('establecimeintoRegion').value;




        generatePDF();
    })
})

async function generatePDF() {
    const image1 = await loadImage("images/Form1.jpg");
    const image2 = await loadImage("images/Form2.jpg");
    const signatureImage = signaturePad.toDataURL(); 

    const pdf = new jsPDF('p', 'pt','letter');

    pdf.addImage(image1, 'PNG', 0, 0, 565, 792);
    pdf.addPage();
    pdf.addImage(image2, 'PNG', 0, 0, 565, 792);
    pdf.addImage(signatureImage,'PNG', 420, 231, 96, 13)
    pdf.save("rellenar.pdf")
}
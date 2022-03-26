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
        generatePDF();
    })
})

async function generatePDF() {
    const image1 = await loadImage("images/Form1.jpg");
    const image2 = await loadImage("images/Form2.jpg");

    const pdf = new jsPDF('p', 'pt','letter');

    pdf.addImage(image1, 'PNG', 0, 0, 565, 792);
    pdf.addPage();
    pdf.addImage(image2, 'PNG', 0, 0, 565, 792);

    pdf.save("prueba.pdf")
}

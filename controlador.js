document.getElementById('downloadBtn').addEventListener('click', function() {


    // Ruta del archivo PDF
    const pdfPath = './manual.pdf'; // Cambia esto por la ruta de tu archivo PDF

    // Crear un elemento de enlace (a)
    const link = document.createElement('a');
    link.href = pdfPath;
    link.download = 'manualCreativo.pdf'; // Nombre con el que se descargará el archivo

    link.click();

    
});
import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';

function downloadPDF() {
    const input = document.getElementById('cv-preview');
    html2canvas(input).then((canvas) => {
        const imgData = canvas.toDataURL('image/png');
        const pdf = new jsPDF();
        pdf.addImage(imgData, 'PNG', 0, 0);
        pdf.save("cv.pdf");
    });
}

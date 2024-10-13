import React, { useState } from 'react';
import Form from './Form';
import CVPreview from './CVPreview';
import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';
import './App.css';

function App() {
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        titre: '',
        address: '',
        phone: '',
        email: '',
        experience: '',
        formation: '',
        software: '',
        skills: '',
        language: ''
    });

    const handleSubmit = (data) => {
        setFormData(data);  
    };

    const downloadPDF = () => {
        const input = document.getElementById('cv-preview');
        html2canvas(input, { scale: 2 }).then((canvas) => {
            const imgData = canvas.toDataURL('image/png');
            const pdf = new jsPDF('p', 'mm', 'a4'); 
            const imgWidth = pdf.internal.pageSize.getWidth(); 
            const pageHeight = pdf.internal.pageSize.getHeight(); 
            const imgHeight = canvas.height * imgWidth / canvas.width;
            let heightLeft = imgHeight;
            let position = 0;

            pdf.addImage(imgData, 'PNG', 0, position, imgWidth, imgHeight);
            heightLeft -= pageHeight;

            while (heightLeft >= 0) {
                position = heightLeft - imgHeight;
                pdf.addPage();
                pdf.addImage(imgData, 'PNG', 0, position, imgWidth, imgHeight);
                heightLeft -= pageHeight;
            }

            pdf.save("cv.pdf");
        });
    };

    return (
        <div id="app-container">
            <Form handleSubmit={handleSubmit} />
            <CVPreview formData={formData} />
            <button onClick={downloadPDF}>Download in PDF</button>
        </div>
    );
}

export default App;

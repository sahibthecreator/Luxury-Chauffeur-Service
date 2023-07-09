import axios from 'axios'
import pdfMake from 'pdfmake/build/pdfmake';
import pdfFonts from 'pdfmake/build/vfs_fonts';
import { Document, Packer, Paragraph, TextRun } from "docx"



pdfMake.vfs = pdfFonts.pdfMake.vfs;

export async function getCoverLetter(data) {
    //const response = await axios.post(`http://localhost:3070/coverletter`, { data });
    //return response.data;
    // in case if api will not work, you can return dummy text just for showcase purposes
    return 'Dear Ms. Sarah Loper, I am writing to apply for the Dump Truck Operator position with C & S Paving Inc. I have completed a truck-driving course and obtained a CDL Class B license. I also have a good driving record and personal insurance. I have strong time management skills with the ability to adhere to a tight schedule and to make all pick-up and deliveries on time. I have the knowledge and ability to check the materials being picked up to make sure they match the requisition form and to make sure the weight complies with the legal requirements. I possess the skills to operate the controls accurately and I am familiar with the Federal Motor Carrier Safety Regulations associated with driving a dump truck. I have active listening skills with the ability to follow directions given verbally, in writing or through diagrams. I have excellent hand-eye coordination and the ability to judge distance accurately, which is needed to place the bed exactly where it needs to be in order to fill it or to dump the contents. I also have the ability to dump materials in the specified amounts required. I have excellent hearing with the ability to stay focused and aware of the other equipment, trucks and workers in the area. I also have the ability to perform general maintenance on the trucks to help keep them in good working condition. I know and adhere to all OSHA/MSHA regulations and I have the ability to learn and follow all company rules and guidelines. Please call (555)-555-5555 to arrange an interview. Respectfully, Gertrude Vidales';
}

export async function getEssay(data) {
    // const response = await axios.post(`http://localhost:3070/essay`, { data });
    // return response.data;
    // in case if api will not work, you can return dummy text just for showcase purposes
    return "At the beginning of the 17th century, social manners, the cultivation of politeness, and the training of an accomplished gentleman became the theme of many essayists. This theme was first exploited by the Italian Baldassare Castiglione in his Il libro del cortegiano (1528; The Book of the Courtier). The influence of the essay and of genres allied to it, such as maxims, portraits, and sketches, proved second to none in molding the behavior of the cultured classes, first in Italy, then in France, and, through French influence, in most of Europe in the 17th century. Among those who pursued this theme was the 17th-century Spanish Jesuit Baltasar Gracián in his essays on the art of worldly wisdom.";
}

export async function saveDocument(data) {
    const response = await axios.post(`http://localhost:3070/document`, { data });
    return response.data;
}

export async function getAllByUserId(userId) {
    const response = await axios.get(`http://localhost:3070/documents/${userId}`);
    return response.data;
}

export async function deleteDocument(doc) {
    const response = await axios.delete(`http://localhost:3070/documents/${doc.id}`);
    return response.data;
}

export function generatePDF(doc) {
    const docDefinition = {
        content: doc.content,
    };
    const pdfDocGenerator = pdfMake.createPdf(docDefinition);
    pdfDocGenerator.download('document.pdf');
}

export async function generateDocx(rawDoc) {
    const doc = new Document({

        title: "My Document",
        sections: [{
            children: [
                new Paragraph({
                    children: [new TextRun(rawDoc.content)],
                }),
            ],
        }]
    });

    Packer.toBlob(doc).then((blob) => { // Generate the document as a blob
        const link = document.createElement('a');
        link.href = window.URL.createObjectURL(blob);
        link.download = 'document.docx';
        link.click();
        window.URL.revokeObjectURL(link.href); // to free up memory
    });
}

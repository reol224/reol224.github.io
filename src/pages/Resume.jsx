import React, { useState } from "react";
import { Row } from "react-bootstrap";
import { Document, Page, pdfjs } from "react-pdf";
import "react-pdf/dist/esm/Page/TextLayer.css";
import "react-pdf/dist/esm/Page/AnnotationLayer.css";
import { Container } from "react-bootstrap";
import resumePDF from "../assets/resume.pdf"; // Import the resume PDF file

pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`;

export default function Resume() {
  const [width] = useState(window.innerWidth);

  return (
    <Container fluid className="resume-section">
      <div className="flex flex-col items-center justify-center">
        <div className="flex flex-col flex-col-reverse md:flex md:flex-row md:items-center justify-center py-8">
          <div className="flex items-center text-center md:text-justify justify-center md:justify-normal">
            <Row className="resume">
              <Document
                file={resumePDF} // Use the imported resume PDF file
                className="d-flex justify-content-center"
              >
                <Page pageNumber={1} scale={width > 786 ? 1.7 : 0.6} />
              </Document>
            </Row>
          </div>
        </div>
      </div>
    </Container>
  );
}

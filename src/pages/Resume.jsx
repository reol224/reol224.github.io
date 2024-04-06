import CopyEmailButton from "../components/CopyEmailButton";
import { getConfigData } from "../data/configReader";
import React, { useState, useEffect } from "react";
import { Row } from "react-bootstrap";
import { Document, Page, pdfjs } from "react-pdf";
import "react-pdf/dist/esm/Page/TextLayer.css";
import "react-pdf/dist/esm/Page/AnnotationLayer.css";
import { Container } from "react-bootstrap";

pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`;

export default function Resume() {
  const [width] = useState(window.innerWidth);
  const configData = getConfigData();
  const resume = "src/assets/resume.pdf";
  return (
    <>
      <Container fluid className="resume-section">
        <div className="flex flex-col items-center justify-center">
          <div className="flex flex-col flex-col-reverse md:flex md:flex-row md:items-center justify-center py-8">
            <div className="flex items-center text-center md:text-justify justify-center md:justify-normal">
              <Row className="resume">
                <Document
                  file={resume}
                  className="d-flex justify-content-center"
                >
                  <Page pageNumber={1} scale={width > 786 ? 1.7 : 0.6} />
                </Document>
              </Row>
            </div>
          </div>
        </div>
      </Container>
    </>
  );
}

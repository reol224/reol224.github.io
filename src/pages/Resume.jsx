import { useEffect, useRef, useState } from "react";
import { Document, Page, pdfjs } from "react-pdf";
import "react-pdf/dist/esm/Page/TextLayer.css";
import "react-pdf/dist/esm/Page/AnnotationLayer.css";
import resumePDF from "../assets/resume.pdf";

pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`;

export default function Resume() {
  const pageContainerRef = useRef(null);
  const [pageWidth, setPageWidth] = useState(0);

  useEffect(() => {
    const pageContainer = pageContainerRef.current;
    if (!pageContainer) return undefined;

    const observer = new ResizeObserver(([entry]) => {
      setPageWidth(Math.floor(entry.contentRect.width));
    });

    observer.observe(pageContainer);
    return () => observer.disconnect();
  }, []);

  return (
    <section className="resume-section">
      <h1 className="markdown-title">
        <span className="syntax-heading">#</span> resume.pdf
      </h1>
      <div className="resume-page" ref={pageContainerRef}>
        {pageWidth > 0 && (
          <Document file={resumePDF} className="d-flex justify-content-center">
            <Page pageNumber={1} width={pageWidth} />
          </Document>
        )}
      </div>
    </section>
  );
}

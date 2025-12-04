import { useRef, useState } from "react";
import html2canvas from "html2canvas";
import jsPDF from "jspdf";

type UseCertificatePDFOptions = {
  fileName: string;
  title?: string;
  text?: string;
};

export function useCertificatePDF(options: UseCertificatePDFOptions) {
  const certificateRef = useRef<HTMLDivElement>(null);
  const [isGenerating, setIsGenerating] = useState(false);
  const isShareSupported = typeof navigator !== "undefined" && typeof navigator.share === "function";

  const buildPdf = async () => {
    if (!certificateRef.current) return null;

    const element = certificateRef.current;
    const hadMobileHidden = element.classList.contains("mobile-hidden");
    if (hadMobileHidden) {
      element.classList.remove("mobile-hidden");
      await new Promise((resolve) => requestAnimationFrame(() => resolve(null)));
    }

    const canvas = await html2canvas(element, {
      scale: 2,
      useCORS: true,
      logging: false,
      backgroundColor: "#ffffff",
    });

    if (hadMobileHidden) element.classList.add("mobile-hidden");

    const pdf = new jsPDF("landscape", "mm", "a4");

    const pageWidth = pdf.internal.pageSize.getWidth();
    const pageHeight = pdf.internal.pageSize.getHeight();
    const marginX = pageWidth * 0.05; // 5% margin on each side => ~90% usable width
    const marginY = pageHeight * 0.05; // 5% margin on each side => ~90% usable height
    const usableWidth = pageWidth - marginX * 2;
    const usableHeight = pageHeight - marginY * 2;
    const imgWidth = canvas.width;
    const imgHeight = canvas.height;
    if (imgWidth === 0 || imgHeight === 0) {
      return pdf;
    }

    const scale = Math.min(usableWidth / imgWidth, usableHeight / imgHeight);
    const targetWidth = imgWidth * scale;
    const targetHeight = imgHeight * scale;
    const offsetX = marginX + (usableWidth - targetWidth) / 2;
    const offsetY = marginY + (usableHeight - targetHeight) / 2;
    const imgData = canvas.toDataURL("image/png");
    pdf.addImage(imgData, "PNG", offsetX, offsetY, targetWidth, targetHeight);

    return pdf;
  };

  const handleShare = async () => {
    if (!isShareSupported) return;

    setIsGenerating(true);
    try {
      const pdf = await buildPdf();
      if (!pdf) return;

      const pdfBlob = pdf.output("blob");
      const file = new File([pdfBlob], options.fileName, { type: "application/pdf" });

      await navigator.share({
        title: options.title || "Certificado",
        text: options.text || "Certificado gerado",
        files: [file],
      });
    } catch (err) {
      console.error("Erro ao gerar/compartilhar PDF:", err);
    } finally {
      setIsGenerating(false);
    }
  };

  const handleGeneratePDF = async () => {
    setIsGenerating(true);
    try {
      const pdf = await buildPdf();
      if (!pdf) return;
      pdf.save(options.fileName);
    } catch (err) {
      console.error("Erro ao gerar PDF:", err);
    } finally {
      setIsGenerating(false);
    }
  };

  return {
    certificateRef,
    isGenerating,
    isShareSupported,
    handleShare,
    handleGeneratePDF,
  };
}

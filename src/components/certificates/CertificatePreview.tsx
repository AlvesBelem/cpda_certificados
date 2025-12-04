"use client";

import Image from "next/image";
import { ReactNode, RefObject, CSSProperties } from "react";
import { cn } from "@/lib/utils";

export const SCREEN_CERTIFICATE_WIDTH_MM = 279.168;
export const SCREEN_CERTIFICATE_HEIGHT_MM = 174.979;
export const PRINT_CERTIFICATE_WIDTH_MM = 297; // A4 landscape width
export const PRINT_CERTIFICATE_HEIGHT_MM = 210; // A4 landscape height

type CertificatePreviewProps = {
  certificateRef?: RefObject<HTMLDivElement | null>;
  children: ReactNode;
  widthMm?: number;
  heightMm?: number;
  contentClassName?: string;
  mobileImage?: string;
  mobileAlt?: string;
  allowOverflow?: boolean;
  autoHeight?: boolean;
  printWidthMm?: number;
  printHeightMm?: number;
};

const baseContainerClass = "certificate-preview relative rounded-[24px] bg-transparent";
const baseContentClass =
  "certificate-content relative flex h-full flex-col overflow-hidden rounded-[32px] bg-white p-6 text-center md:p-10 print:mx-auto print:my-auto print:h-auto print:w-[90%] print:max-w-[267mm] print:rounded-3xl print:p-12";

export function CertificatePreview({
  certificateRef,
  children,
  widthMm = SCREEN_CERTIFICATE_WIDTH_MM,
  heightMm = SCREEN_CERTIFICATE_HEIGHT_MM,
  contentClassName,
  mobileImage,
  mobileAlt = "Previa do certificado",
  allowOverflow = false,
  autoHeight = false,
  printWidthMm = PRINT_CERTIFICATE_WIDTH_MM,
  printHeightMm = PRINT_CERTIFICATE_HEIGHT_MM,
}: CertificatePreviewProps) {
  const containerClass = cn(baseContainerClass, allowOverflow ? "overflow-visible" : "overflow-hidden");

  const previewStyle: CSSProperties = { width: "100%", maxWidth: `${widthMm}mm` };
  if (!autoHeight) {
    previewStyle.height = `${heightMm}mm`;
  }

  const actualPreview = (
    <div
      ref={certificateRef}
      className={cn(containerClass, "print:hidden mobile-hidden md:static md:opacity-100 md:pointer-events-auto md:w-full")}
      style={previewStyle}
    >
      <div className={cn(baseContentClass, contentClassName)}>{children}</div>
    </div>
  );

  const mobilePlaceholder = mobileImage ? (
    <div className="certificate-mobile-photo md:hidden print:hidden">
      <div className="certificate-mobile-photo-frame">
        <Image src={mobileImage} alt={mobileAlt} width={600} height={380} className="h-full w-full rounded-[20px] object-cover" />
      </div>
    </div>
  ) : null;

  return (
    <>
      <div className="certificate-preview-wrapper">
        {mobilePlaceholder}
        {actualPreview}
      </div>
      <div className={cn(containerClass, "certificate-preview-print hidden print:block")} style={{ width: `${printWidthMm}mm`, height: autoHeight ? "auto" : `${printHeightMm}mm` }}>
        <div className={cn(baseContentClass, contentClassName)}>{children}</div>
      </div>
    </>
  );
}

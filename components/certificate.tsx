"use client";

import { useRef, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Shield, Download, Share2 } from "lucide-react";
import type { ParticipantCertificate } from "@/types/certificate";
import html2canvas from "html2canvas";
import { jsPDF } from "jspdf";

interface CertificateProps {
  data: ParticipantCertificate;
  verificationStatus: boolean;
}

export function Certificate({ data, verificationStatus }: CertificateProps) {
  const certificateRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Force desktop viewport on mobile
    const viewport = document.querySelector("meta[name=viewport]");
    if (viewport) {
      viewport.setAttribute("content", "width=1024, initial-scale=1");
    } else {
      const meta = document.createElement("meta");
      meta.name = "viewport";
      meta.content = "width=1024, initial-scale=1";
      document.head.appendChild(meta);
    }

    // Cleanup
    return () => {
      const viewport = document.querySelector("meta[name=viewport]");
      if (viewport) {
        viewport.setAttribute("content", "width=device-width, initial-scale=1");
      }
    };
  }, []);

  const downloadCertificate = async () => {
    if (!certificateRef.current) return;

    const canvas = await html2canvas(certificateRef.current, {
      scale: 3,
      useCORS: true,
      allowTaint: true,
      logging: false,
      backgroundColor: "#ffffff",
      imageTimeout: 0,
      onclone: (doc) => {
        doc.fonts.ready.then(() => {
          console.log("Fonts loaded");
        });
      },
    });

    // Get canvas dimensions
    const canvasWidth = canvas.width;
    const canvasHeight = canvas.height;

    // A4 dimensions in mm (297 x 210 for landscape)
    const pdfWidth = 297;
    const pdfHeight = 210;

    // Calculate scaling ratio to fit certificate properly
    const ratio = Math.min(pdfWidth / canvasWidth, pdfHeight / canvasHeight);
    const imgWidth = canvasWidth * ratio;
    const imgHeight = canvasHeight * ratio;

    // Calculate margins to center the image
    const marginX = (pdfWidth - imgWidth) / 2;
    const marginY = (pdfHeight - imgHeight) / 2;

    const pdf = new jsPDF({
      orientation: "landscape",
      unit: "mm",
      format: "a4",
      compress: true,
    });

    pdf.addImage(
      canvas.toDataURL("image/jpeg", 1.0),
      "JPEG",
      marginX, // Add margin to center horizontally
      marginY, // Add margin to center vertically
      imgWidth,
      imgHeight,
      undefined,
      "FAST"
    );

    pdf.save(`certificate-${data.name}-${data.id}.pdf`);
  };

  const shareOnLinkedIn = async () => {
    if (!certificateRef.current) return;

    try {
      // Generate certificate image
      const canvas = await html2canvas(certificateRef.current, {
        scale: 2,
        useCORS: true,
        allowTaint: true,
        backgroundColor: "#ffffff",
      });

      // Convert canvas to blob
      const blob = await new Promise<Blob>((resolve) => {
        canvas.toBlob(
          (blob) => {
            resolve(blob!);
          },
          "image/jpeg",
          0.9
        );
      });

      // Create a File from the Blob
      const file = new File([blob], `certificate-${data.id}.jpg`, {
        type: "image/jpeg",
      });

      // Certificate URL and additional post content
      const url = `${process.env.NEXT_PUBLIC_APP_URL}/certificate?id=${data.id}`;
      const title = `My Certificate of Participation - LLM Security Bootcamp`;
      const text = `I participated in the Two-Day Bootcamp on LLM Security at VIT-AP University in association with IIT Madras.
I'm excited to share that I've earned my certificate! Check it out and learn more about my journey.`;

      // Try using Web Share API (if supported)
      if (
        navigator.share &&
        navigator.canShare &&
        navigator.canShare({ files: [file] })
      ) {
        try {
          await navigator.share({
            files: [file],
            title,
            text,
            url,
          });
          return;
        } catch (error) {
          console.error("Error sharing via Web Share API:", error);
        }
      }

      // Fallback to LinkedIn URL sharing (LinkedIn only supports the URL parameter)
      const linkedInUrl = `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(
        url
      )}`;
      window.open(linkedInUrl, "_blank", "width=600,height=600");
    } catch (error) {
      console.error("Error generating certificate image:", error);
    }
  };

  return (
    <div className="w-[1024px] mx-auto p-4">
      <br />
      <br />
      <div className="mb-4 flex justify-between items-center">
        <div className="flex items-center gap-2">
          <Shield
            className={verificationStatus ? "text-green-500" : "text-red-500"}
          />
          <span
            className={verificationStatus ? "text-green-700" : "text-red-700"}
          >
            {verificationStatus
              ? "Verified Certificate"
              : "Invalid Certificate"}
          </span>
        </div>
      </div>
      {/* Download and Share buttons */}
      <div className="relative mt-8">
        <div className="bg-white/80 backdrop-blur-sm p-2 md:p-0 shadow-lg md:shadow-none md:bg-transparent flex flex-col md:flex-row gap-2 md:gap-4 md:justify-start items-stretch md:items-center">
          <Button
            className="w-screen md:w-auto px-4 py-3 md:py-4 text-sm md:text-base font-semibold bg-purple-600 hover:bg-purple-700 text-white rounded-lg md:rounded-xl shadow-lg transition-all"
            onClick={downloadCertificate}
          >
            <Download className="mr-2 h-4 w-4 md:h-6 md:w-6" />
            Download Certificate
          </Button>
          <Button
            className="w-screen md:w-auto px-4 py-3 md:py-4 text-sm md:text-base font-semibold bg-blue-600 hover:bg-blue-700 text-white rounded-lg md:rounded-xl shadow-lg transition-all"
            onClick={shareOnLinkedIn}
          >
            <Share2 className="mr-2 h-4 w-4 md:h-6 md:w-6" />
            Share on LinkedIn
          </Button>
        </div>
      </div>
      <br />
      <Card
        className="relative p-8 bg-gradient-to-br from-white via-gray-50/30 to-white border-8 border-double border-gray-200 overflow-hidden"
        ref={certificateRef}
      >
        {/* Border Design */}
        <div className="absolute inset-0 border-4 border-solid border-gray-300 rounded-lg pointer-events-none z-10" />
        <div className="absolute inset-4 border border-solid border-gray-200 rounded-lg pointer-events-none z-10" />

        {/* Corner Ornaments - Simplified */}
        <div className="absolute top-0 left-0 w-40 h-40">
          <div className="absolute top-4 left-4 w-full h-full border-l-4 border-t-4 border-gray-300 rounded-tl-3xl" />
        </div>
        <div className="absolute top-0 right-0 w-40 h-40 transform rotate-90">
          <div className="absolute top-4 left-4 w-full h-full border-l-4 border-t-4 border-gray-300 rounded-tl-3xl" />
        </div>
        <div className="absolute bottom-0 left-0 w-40 h-40 transform -rotate-90">
          <div className="absolute top-4 left-4 w-full h-full border-l-4 border-t-4 border-gray-300 rounded-tl-3xl" />
        </div>
        <div className="absolute bottom-0 right-0 w-40 h-40 transform rotate-180">
          <div className="absolute top-4 left-4 w-full h-full border-l-4 border-t-4 border-gray-300 rounded-tl-3xl" />
        </div>

        {/* Side Decorations */}
        <div className="absolute top-1/2 -translate-y-1/2 left-0 w-16 h-32 border-r-2 border-gray-200" />
        <div className="absolute top-1/2 -translate-y-1/2 right-0 w-16 h-32 border-l-2 border-gray-200" />

        <div className="text-center space-y-8 py-16 px-8 relative">
          <img
            src="/combined-logos-5.jpeg"
            alt="Logo"
            className="h-20 mx-auto mb-8"
          />

          <div>
            <h1 className="text-4xl font-serif text-purple-900 mb-2">
              Certificate of Participation
            </h1>
            <div className="w-32 h-1 bg-gradient-to-r from-purple-200 via-purple-400 to-purple-200 mx-auto"></div>
          </div>

          <div className="space-y-4">
            <p className="text-xl text-gray-600 font-light">
              This is to certify that
            </p>
            <div className="space-y-1">
              <h2 className="text-3xl font-semibold text-purple-800 font-serif">
                {data.name}
              </h2>
              {data.register_no && (
                <p className="text-lg text-gray-600">
                  Registration Number: {data.register_no}
                </p>
              )}
            </div>
            <p className="text-xl text-gray-600">
              from{" "}
              <span className="font-semibold italic">{data.institution}</span>
            </p>
          </div>

          <p className="text-lg leading-relaxed max-w-3xl mx-auto text-gray-700">
            has successfully participated in the
            <span className="font-semibold">
              {" "}
              Two-Day Bootcamp on LLM Security{" "}
            </span>
            held on February 21-22, 2025 at VIT-AP University, organized in
            association with IIT Madras, Managed by Null Vijayawada.
          </p>

          <div className="mt-16 flex justify-between items-end px-16">

            <div className="text-center">
              <img
                src="/signature/hari_seetha_mam.png"
                alt="Signature"
                className="h-10 mx-auto mb-3"
              />
              <div className="text-base font-semibold text-gray-800">
                Dr. Hari Seetha
              </div>
              <div className="text-sm text-gray-600">
                Director COE Artificial Intelligence and Robotics
              </div>
            </div>

            <div className="text-center">
              <img
                src="/signature1.png"
                alt="Signature"
                className="h-16 mx-auto mb-3"
              />
              <div className="text-base font-semibold text-gray-800">
                Dr. S. Sudhakar Ilango
              </div>
              <div className="text-sm text-gray-600">Dean, SCOPE</div>
            </div>

            <div className="text-center">
              <img
                src="/signature2.png"
                alt="Signature"
                className="h-16 mx-auto mb-3"
              />
              <div className="text-base font-semibold text-gray-800">
                Dr. S. V. Kota Reddy
              </div>
              <div className="text-sm text-gray-600">
                Vice Chancellor, VIT-AP
              </div>
            </div>
          </div>

          <div className="mt-12">
            <div className="flex flex-col items-center gap-4">
              {/* Digital Signature Info */}
              <div className="flex justify-center items-center gap-4 text-sm text-gray-600">
                <span>Certificate ID: {data.id}</span>
                <span className="w-1.5 h-1.5 rounded-full bg-gray-400"></span>
                <span>Issue Date: {data.issueDate}</span>
              </div>

              {/* QR Code */}
              {data.qrCode && (
                <div className="mt-4">
                  <img
                    src={data.qrCode}
                    alt="Verification QR Code"
                    className="w-24 h-24"
                  />
                </div>
              )}

              {/* Digital Signature */}
              <div className="text-xs text-gray-500 mt-2">
                Digital Signature: {data.signature.slice(0, 16)}...
              </div>

              {/* Verification Link */}
              {data.verificationUrl && (
                <div className="text-xs text-gray-500">
                  Verify at: {data.verificationUrl}
                </div>
              )}
            </div>
          </div>
        </div>
      </Card>
    </div>
  );
}

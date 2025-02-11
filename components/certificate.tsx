'use client';

import { useRef, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Shield, Download } from 'lucide-react';
import type { ParticipantCertificate } from '@/types/certificate';
import html2canvas from 'html2canvas';
import { jsPDF } from 'jspdf';

interface CertificateProps {
  data: Omit<ParticipantCertificate, 'verified'> & {
    verified: boolean;
    qrCode?: string;
    verificationUrl?: string;
  };
}

export function Certificate({ data }: CertificateProps) {
  const certificateRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Force desktop viewport on mobile
    const viewport = document.querySelector('meta[name=viewport]');
    if (viewport) {
      viewport.setAttribute('content', 'width=1024, initial-scale=1');
    } else {
      const meta = document.createElement('meta');
      meta.name = 'viewport';
      meta.content = 'width=1024, initial-scale=1';
      document.head.appendChild(meta);
    }

    // Cleanup
    return () => {
      const viewport = document.querySelector('meta[name=viewport]');
      if (viewport) {
        viewport.setAttribute('content', 'width=device-width, initial-scale=1');
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
      backgroundColor: '#ffffff',
      imageTimeout: 0,
      onclone: (doc) => {
        doc.fonts.ready.then(() => {
          console.log('Fonts loaded');
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
      orientation: 'landscape',
      unit: 'mm',
      format: 'a4',
      compress: true
    });

    pdf.addImage(
      canvas.toDataURL('image/jpeg', 1.0),
      'JPEG',
      marginX, // Add margin to center horizontally
      marginY, // Add margin to center vertically
      imgWidth,
      imgHeight,
      undefined,
      'FAST'
    );

    pdf.save(`certificate-${data.name}-${data.id}.pdf`);
  };

  return (
    <div className="w-[1024px] mx-auto p-4">
      <br />
      <br />
      <div className="mb-4 flex justify-between items-center">
        <div className="flex items-center gap-2">
          <Shield className={data.verified ? "text-green-500" : "text-red-500"} />
          <span className={data.verified ? "text-green-700" : "text-red-700"}>
            {data.verified ? "Verified Certificate" : "Invalid Certificate"}
          </span>
        </div>
      </div>

      <Card className="p-8 bg-gradient-to-br from-white to-gray-50 border-8 border-double border-gray-200" ref={certificateRef}>
        <div className="text-center space-y-8 py-16 px-8 relative">
          {/* Decorative elements */}
          <div className="absolute top-0 left-0 w-24 h-24 border-l-4 border-t-4 border-purple-200"></div>
          <div className="absolute top-0 right-0 w-24 h-24 border-r-4 border-t-4 border-purple-200"></div>
          <div className="absolute bottom-0 left-0 w-24 h-24 border-l-4 border-b-4 border-purple-200"></div>
          <div className="absolute bottom-0 right-0 w-24 h-24 border-r-4 border-b-4 border-purple-200"></div>
          
          <img src="/combined-logos-5.jpeg" alt="Logo" className="h-20 mx-auto mb-8" />
          
          <div>
            <h1 className="text-4xl font-serif text-purple-900 mb-2">Certificate of Participation</h1>
            <div className="w-32 h-1 bg-gradient-to-r from-purple-200 via-purple-400 to-purple-200 mx-auto"></div>
          </div>
          
          <div className="space-y-4">
            <p className="text-xl text-gray-600 font-light">This is to certify that</p>
            <h2 className="text-3xl font-semibold text-purple-800 font-serif">{data.name}</h2>
            <p className="text-xl text-gray-600">
              from <span className="font-semibold italic">{data.institution}</span>
            </p>
          </div>
          
          <p className="text-lg leading-relaxed max-w-3xl mx-auto text-gray-700">
            has successfully participated in the
            <span className="font-semibold"> Two-Day Bootcamp on LLM Security </span>
            held on February 21-22, 2025 at VIT-AP University, organized in 
            association with IIT Madras, Managed by Null Vijayawada.
          </p>

          <div className="mt-16 flex justify-between items-end px-16">
            <div className="text-center">
              <img src="/signature1.png" alt="Signature" className="h-16 mx-auto mb-3" />
              <div className="text-base font-semibold text-gray-800">Dr. Chester Rebeiro</div>
              <div className="text-sm text-gray-600">Principal Investigator, IITM</div>
            </div>
            
            <div className="text-center">
              <img src="/signature2.png" alt="Signature" className="h-16 mx-auto mb-3" />
              <div className="text-base font-semibold text-gray-800">Dr. S V Kota Reddy</div>
              <div className="text-sm text-gray-600">Vice Chancellor, VIT-AP</div>
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
                  <img src={data.qrCode} alt="Verification QR Code" className="w-24 h-24" />
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

      {/* Download button with optimized mobile UI */}
      <div className=" relative bottom-0 left-0 right-0 mt-8 md:static md:mt-8">
        <div className="bg-white/80 backdrop-blur-sm p-2 md:p-0 shadow-lg md:shadow-none md:bg-transparent">
          <Button 
            className="w-[30%] md:w-auto  py-3 md:py-4 text-base md:text-lg font-semibold bg-purple-600 hover:bg-purple-700 text-white rounded-lg md:rounded-xl shadow-lg transition-all"
            onClick={downloadCertificate}
          >
            <Download className="mr-2 h-4 w-4 md:h-6 md:w-6" />
            Download Certificate
          </Button>
        </div>
      </div>
    </div>
  );
}

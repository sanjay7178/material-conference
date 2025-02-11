'use client';

import { useRef } from 'react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Shield, Download } from 'lucide-react';
import type { ParticipantCertificate } from '@/types/certificate';
import html2canvas from 'html2canvas';
import { jsPDF } from 'jspdf';

interface CertificateProps {
  data: ParticipantCertificate;
}

export function Certificate({ data }: CertificateProps) {
  const certificateRef = useRef<HTMLDivElement>(null);

  const downloadCertificate = async () => {
    if (!certificateRef.current) return;

    const canvas = await html2canvas(certificateRef.current);
    const imgData = canvas.toDataURL('image/png');
    
    const pdf = new jsPDF({
      orientation: 'landscape',
      unit: 'px',
      format: [canvas.width, canvas.height]
    });
    
    pdf.addImage(imgData, 'PNG', 0, 0, canvas.width, canvas.height);
    pdf.save(`certificate-${data.id}.pdf`);
  };

  return (
    <div className="max-w-4xl mx-auto p-4">
      <div className="mb-4 flex justify-between items-center">
        <div className="flex items-center gap-2">
          <Shield className={data.verified ? "text-green-500" : "text-red-500"} />
          <span className={data.verified ? "text-green-700" : "text-red-700"}>
            {data.verified ? "Verified Certificate" : "Invalid Certificate"}
          </span>
        </div>
        <Button onClick={downloadCertificate}>
          <Download className="mr-2 h-4 w-4" />
          Download
        </Button>
      </div>

      <Card className="p-8 bg-white" ref={certificateRef}>
        <div className="text-center space-y-6 py-12">
          <img src="/combined-logos-5.jpeg" alt="Logo" className="h-16 mx-auto mb-8" />
          
          <h1 className="text-3xl font-serif">Certificate of Participation</h1>
          
          <p className="text-lg text-gray-600">This is to certify that</p>
          
          <h2 className="text-2xl font-semibold text-purple-800">{data.name}</h2>
          
          <p className="text-lg text-gray-600">
            from <span className="font-semibold">{data.institution}</span>
          </p>
          
          <p className="text-lg leading-relaxed max-w-2xl mx-auto">
            has successfully participated in the Two-Day Bootcamp on LLM Security
            held on February 21-22, 2025 at VIT-AP University, organized in 
            association with IIT Madras , Managed by Null Vijayawada .

          </p>

          <div className="mt-12 flex justify-between items-end px-12">
            <div className="text-center">
              <img src="/signature1.png" alt="Signature" className="h-12 mx-auto mb-2" />
              <div className="text-sm text-gray-600">Dr. Chester Rebeiro</div>
              <div className="text-sm text-gray-500">Principal Investigator, IITM</div>
            </div>
            
            <div className="text-center">
              <img src="/signature2.png" alt="Signature" className="h-12 mx-auto mb-2" />
              <div className="text-sm text-gray-600">Dr. S V Kota Reddy</div>
              <div className="text-sm text-gray-500">Vice Chancellor, VIT-AP</div>
            </div>
          </div>

          <div className="mt-8 text-sm text-gray-500">
            Certificate ID: {data.id} • Issue Date: {data.issueDate}
          </div>
        </div>
      </Card>
    </div>
  );
}

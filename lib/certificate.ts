import { ParticipantCertificate } from '@/types/certificate';
import crypto from 'crypto';
import QRCode from 'qrcode';

const PRIVATE_KEY = process.env.CERTIFICATE_PRIVATE_KEY || 'your-private-key';
const API_URL = process.env.NEXT_PUBLIC_API_URL_CF || 'https://cert-server.saisanjay7660.workers.dev';

export async function getCertificate(id: string): Promise<ParticipantCertificate | null> {
  try {
    const response = await fetch(`${API_URL}/api/certificate/${id}`);
    if (!response.ok) return null;
    console.log('response:', response);
    const cert = await response.json();
    
    // Create a signature using the certificate data
    const signature = crypto
      .createHmac('sha256', PRIVATE_KEY)
      .update(`${cert.id}${cert.name}${cert.institution}${cert.issueDate}`)
      .digest('hex');

    const verificationUrl = `${process.env.NEXT_PUBLIC_APP_URL}/certificate?id=${cert.id}`;
    const qrCode = await QRCode.toDataURL(verificationUrl);

    return {
      ...cert,
      signature,
      verified: true,
      verificationUrl,
      qrCode,
    };
  } catch (error) {
    console.error('Error fetching certificate:', error);
    return null;
  }
}

export function verifyCertificate(cert: ParticipantCertificate) {
  const expectedSignature = crypto
    .createHmac('sha256', PRIVATE_KEY)
    .update(`${cert.id}${cert.name}${cert.institution}${cert.issueDate}`)
    .digest('hex');

  return expectedSignature === cert.signature;
}

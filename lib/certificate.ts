import { ParticipantCertificate } from '@/types/certificate';
import crypto from 'crypto';
import QRCode from 'qrcode';

// Mock database - replace with your actual database implementation
const certificateDB: Record<string, Omit<ParticipantCertificate, 'signature' | 'verified'>> = {
  'CERT-001': {
    id: 'CERT-001',
    name: 'John Doe',
    institution: 'VIT-AP University',
    issueDate: '2025-02-22',
  },
  'CERT-002': {
    id: 'CERT-002',
    name: 'Jane Smith',
    institution: 'VIT-AP University',
    issueDate: '2025-02-22',
  },
  'CERT-003': {
    id: 'CERT-003',
    name: 'Alice Johnson',
    institution: 'VIT-AP University',
    issueDate: '2025-02-22',
  },
};

const PRIVATE_KEY = process.env.CERTIFICATE_PRIVATE_KEY || 'your-private-key';

export async function getCertificate(id: string) : Promise<ParticipantCertificate | null> {
  const cert = certificateDB[id];
  if (!cert) return null;

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
}

export function verifyCertificate(cert: ParticipantCertificate) {
  const expectedSignature = crypto
    .createHmac('sha256', PRIVATE_KEY)
    .update(`${cert.id}${cert.name}${cert.institution}${cert.issueDate}`)
    .digest('hex');

  return expectedSignature === cert.signature;
}

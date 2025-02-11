import { ParticipantCertificate } from '@/types/certificate';
import crypto from 'crypto';

// Mock database - replace with your actual database implementation
const certificateDB: Record<string, Omit<ParticipantCertificate, 'signature' | 'verified'>> = {
  'CERT-001': {
    id: 'CERT-001',
    name: 'John Doe',
    institution: 'VIT-AP University',
    issueDate: '2025-02-22',
  },
  // Add more certificates...
};

// declare function getCertificate(id: string): ParticipantCertificate | null;

// interface ParticipantCertificate {
//   id: string;
//   name: string;
//   institution: string;
//   issueDate: string;
//   signature: string;
//   verified: boolean;
// }

const PRIVATE_KEY = process.env.CERTIFICATE_PRIVATE_KEY || 'your-private-key';

export function getCertificate(id: string) : ParticipantCertificate | null {
  const cert = certificateDB[id];
  if (!cert) return null;

  // Create a signature using the certificate data
  const signature = crypto
    .createHmac('sha256', PRIVATE_KEY)
    .update(`${cert.id}${cert.name}${cert.institution}${cert.issueDate}`)
    .digest('hex');

  return {
    ...cert,
    signature,
    verified: true,
  };
}

export function verifyCertificate(cert: ParticipantCertificate) {
  const expectedSignature = crypto
    .createHmac('sha256', PRIVATE_KEY)
    .update(`${cert.id}${cert.name}${cert.institution}${cert.issueDate}`)
    .digest('hex');

  return expectedSignature === cert.signature;
}

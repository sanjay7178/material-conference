export interface ParticipantCertificate {
  id: string;
  register_no?: string;  // Add this field
  name: string;
  institution: string;
  issueDate: string;
  signature: string;
  verified: boolean;
  verificationUrl?: string;
  qrCode?: string;
}

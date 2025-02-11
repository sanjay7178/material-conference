import { getCertificate } from '@/lib/certificate';
import { Certificate } from '@/components/certificate';
import { notFound } from 'next/navigation';

export default async function CertificatePage({
  searchParams,
}: {
  searchParams: { id?: string };
}) {
  if (!searchParams.id) {
    return (
      <div className="container py-20 text-center">
        <h1 className="text-2xl font-bold mb-4">Certificate Verification</h1>
        <p className="text-gray-600">Please provide a certificate ID to verify.</p>
      </div>
    );
  }

  const certificate = getCertificate(searchParams.id);

  if (!certificate) {
    notFound();
  }

  return (
    <div className="container py-10">
      <Certificate data={certificate} />
    </div>
  );
}

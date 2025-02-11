import { getCertificate } from "@/lib/certificate";
import { Certificate } from "@/components/certificate";
import { CertificateSearch } from "@/components/certificate-search";
import { notFound } from "next/navigation";
import { XCircle, AlertCircle } from "lucide-react";

export default async function CertificatePage({
  searchParams,
}: {
  searchParams: { id?: string };
}) {
  if (!searchParams.id) {
    return (
      <div className="container py-20">
        <CertificateSearch />
      </div>
    );
  }

  try {
    const certificate = await getCertificate(searchParams.id);

    if (!certificate) {
      return (
        <div className="container py-20 text-center">
          <XCircle className="h-16 w-16 mx-auto mb-4 text-red-500" />
          <h1 className="text-2xl font-bold mb-4">Certificate Not Found</h1>
          <p className="text-gray-600 mb-8">
            We couldn't find a certificate with that ID. Please check the ID and try again.
          </p>
          <CertificateSearch />
        </div>
      );
    }

    return (
      <div className="container py-10">
        <Certificate data={certificate} verificationStatus={certificate.verified} />
      </div>
    );
  } catch (error) {
    console.error("Error fetching certificate:", error);
    return (
      <div className="container py-20 text-center">
        <AlertCircle className="h-16 w-16 mx-auto mb-4 text-yellow-500" />
        <h1 className="text-2xl font-bold mb-4">Error</h1>
        <p className="text-gray-600 mb-8">
          Failed to load certificate. Please try again later.
        </p>
        <CertificateSearch />
      </div>
    );
  }
}

import { getCertificate } from "@/lib/certificate";
import { Certificate } from "@/components/certificate";
import { CertificateSearch } from "@/components/certificate-search";
import { notFound } from "next/navigation";
import { XCircle, AlertCircle } from "lucide-react";

// Add dynamic metadata export
export async function generateMetadata({ searchParams }: { searchParams: { id?: string } }) {
  if (searchParams.id) {
    const certificate = await getCertificate(searchParams.id);
    if (certificate) {
      return {
        title: `Certificate of Participation - ${certificate.name}`,
        description: `Certificate verifying that ${certificate.name} of ${certificate.institution} participated in Two-Day Bootcamp on LLM Security.`,
        openGraph: {
          title: `Certificate of Participation - ${certificate.name}`,
          description: `Certificate for ${certificate.name} from ${certificate.institution}. Earned on ${certificate.issueDate}.`,
          url: `${process.env.NEXT_PUBLIC_APP_URL}/certificate?id=${certificate.id}`,
          images: [
            {
              // You may replace the path below with a static certificate image/logo that best represents your certificate.
              url: `${process.env.NEXT_PUBLIC_APP_URL}/combined-logos-5.jpeg`,
              width: 1200,
              height: 630,
              alt: `Certificate of ${certificate.name}`,
            }
          ],
        },
      };
    }
  }
  return {
    title: 'Verify Your Certificate',
    description: 'Enter your certificate ID to verify its authenticity.',
  };
}

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

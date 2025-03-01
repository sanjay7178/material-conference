'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Search } from 'lucide-react';

export function CertificateSearch() {
  const [certId, setCertId] = useState('');
  const router = useRouter();

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (certId) {
      router.push(`/certificate?id=${certId.trim()}`);
    }
  };

  return (
    <form onSubmit={handleSearch} className="flex flex-col items-center gap-4">
      <h1 className="text-2xl font-bold text-gray-900">Verify Your Certificate</h1>
      <p className="text-gray-600 mb-4">Enter your certificate ID to verify its authenticity</p>
      
      <div className="flex w-full max-w-lg gap-2">
        <Input
          type="text"
          placeholder="Enter Certificate ID (e.g., VITAP-01 or LLM-01) or Yor Short Name (eg., lokesh)"
          value={certId}
          onChange={(e) => setCertId(e.target.value)}
          className="flex-1"
        />
        <Button type="submit">
          <Search className="mr-2 h-4 w-4" />
          Verify
        </Button>
      </div>
    </form>
  );
}

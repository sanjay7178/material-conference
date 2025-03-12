import { Metadata } from "next";

export const metadata: Metadata = {
  title: "OpenAI API Key Redemption | LLM Security Bootcamp",
  description: "Request and receive your OpenAI API key for the LLM Security Bootcamp",
};

export default function OpenAIKeyRedeemLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}

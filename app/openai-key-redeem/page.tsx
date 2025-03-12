"use client";

import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { CheckCircle, AlertCircle, Loader2 } from "lucide-react";
import { useRouter } from "next/navigation";

export default function OpenAIKeyRedeem() {
  const router = useRouter();
  const [email, setEmail] = useState<string>("");
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [message, setMessage] = useState<string>("");
  
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!email || !email.includes("@")) {
      setStatus("error");
      setMessage("Please enter a valid email address");
      return;
    }
    
    setStatus("loading");
    setMessage("");
    
    try {
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_API_URL_CF || "https://cert-server.saisanjay7660.workers.dev"}/api/openai/get-key`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ email }),
        }
      );
      
      const data = await response.json();
      
      if (response.ok && data.success) {
        setStatus("success");
        setMessage(data.message || "Your OpenAI key has been sent to your email.");
      } else {
        setStatus("error");
        setMessage(data.message || "Failed to retrieve your key. Please try again later.");
      }
    } catch (error) {
      setStatus("error");
      setMessage("An error occurred. Please try again later.");
      console.error("Error requesting OpenAI key:", error);
    }
  };
  
  return (
    <div className="container max-w-4xl py-12">
      <div className="flex flex-col items-center justify-center py-8">
        <h1 className="text-4xl font-bold mb-8 text-center">OpenAI API Key Redemption</h1>
        
        <Card className="w-full max-w-md shadow-lg">
          <CardHeader>
            <CardTitle>Request Your OpenAI API Key</CardTitle>
            <CardDescription>
              Enter your email address below to receive your OpenAI API key
            </CardDescription>
          </CardHeader>
          
          <form onSubmit={handleSubmit}>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="email">Email</Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="Enter your email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  disabled={status === "loading" || status === "success"}
                  required
                />
              </div>
              
              {status === "success" && (
                <div className="bg-green-50 p-4 rounded-lg flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-green-500 mt-0.5" />
                  <p className="text-green-800">{message}</p>
                </div>
              )}
              
              {status === "error" && (
                <div className="bg-red-50 p-4 rounded-lg flex items-start gap-3">
                  <AlertCircle className="h-5 w-5 text-red-500 mt-0.5" />
                  <p className="text-red-800">{message}</p>
                </div>
              )}
            </CardContent>
            
            <CardFooter>
              <Button
                type="submit"
                className="w-full"
                disabled={status === "loading" || status === "success" || !email}
              >
                {status === "loading" && (
                  <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                )}
                {status === "success" ? "Key Sent!" : "Request Key"}
              </Button>
            </CardFooter>
          </form>
        </Card>
        
        {status === "success" && (
          <div className="mt-8">
            <Button variant="outline" onClick={() => router.push("/")}>
              Return to Home
            </Button>
          </div>
        )}
        
        <div className="mt-8 text-center max-w-md">
          <p className="text-sm text-gray-600">
            Note: The key will be sent to the email address you've provided.
            Please check your inbox (and spam folder) for an email from OpenAI Key Redeem.
          </p>
        </div>
      </div>
    </div>
  );
}

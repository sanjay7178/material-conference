"use client";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export function LocationSection() {
  return (
    <section className="relative min-h-screen py-10 flex items-center justify-center bg-gray-50">
      <div className="container">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="w-full h-[550px] rounded-lg overflow-hidden">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d61209.6921644595!2d80.47960198794533!3d16.495488415114703!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a35f27d40f21c55%3A0x1490eacd54859850!2sVIT-AP%20University!5e0!3m2!1sen!2sin!4v1737750766593!5m2!1sen!2sin"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
          <div className="space-y-12">
            <div>
              <h2 className="text-2xl font-bold mb-4">Organizer</h2>
              <p className="text-muted-foreground mb-4">
                Organized by: VIT-AP University in association with IITM ,
                Managed by Null Vijaywada
              </p>
              <Button
                variant="link"
                className="text-purple-600 p-0 h-auto font-semibold"
                onClick={() => (window.location.href = "/team")}
              >
                OPEN TEAM PAGE
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </div>

            <div>
              <h2 className="text-2xl font-bold mb-4">
                What is a Null Vijayawada?
              </h2>
              <p className="text-muted-foreground mb-4">
                Null Vijayawada chapter is a part of India's largest open
                security community and the first Null chapter in Andhra Pradesh.
              </p>
              <Button
                variant="link"
                className="text-purple-600 p-0 h-auto font-semibold"
                onClick={() =>
                  (window.location.href =
                    "https://null.community/chapters/28-vijayawada")
                }
              >
                READ MORE
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </div>

            {/* <div>
              <h2 className="text-2xl font-bold mb-4">What is Null Vijayawada?</h2>
              <p className="text-muted-foreground mb-4">
                Null Vijayawada is a community-led developer events hosted by Null Community
                Developer Groups around the globe.
              </p>
              <Button
                variant="link"
                className="text-purple-600 p-0 h-auto font-semibold"
              >
                READ MORE
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </div> */}
          </div>
        </div>

        <div className="mt-20 py-10">
          <div className="grid grid-cols-3 md:grid-cols-5 gap-8 items-center justify-items-center">
            {[...Array(10)].map((_, i) => (
              <img
              key={i}
              src={
                i % 3 === 0
                ? "/vit-ap.svg"
                : i % 3 === 1
                ? "/iitm.svg"
                : "/null.svg"
              }
              alt={
                i % 3 === 0
                ? "vit-ap"
                : i % 3 === 1
                ? "iitm"
                : "null"
              }
              className="h-12 opacity-60 hover:opacity-100 transition-opacity"
              />
            ))}
          </div>
          <div className="text-center mt-12">
            <Button variant="link" className="text-purple-600 font-semibold">
              BECOME A PARTNER
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}

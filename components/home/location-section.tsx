"use client";
import { Button } from "@/components/ui/button";
import { Skeleton } from "@/components/ui/skeleton";
import { ArrowRight } from "lucide-react";
import { useState, useEffect } from "react";

export function LocationSection() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <section className="relative min-h-screen py-6 md:py-10 flex items-center justify-center bg-gray-50">
      <div className="container px-4 md:px-6">
        <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
          <div className="w-full h-[300px] md:h-[550px] rounded-lg overflow-hidden">
            {isLoading ? (
              <Skeleton className="w-full h-full" />
            ) : (
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d61209.6921644595!2d80.47960198794533!3d16.495488415114703!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a35f27d40f21c55%3A0x1490eacd54859850!2sVIT-AP%20University!5e0!3m2!1sen!2sin!4v1737750766593!5m2!1sen!2sin"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            )}
          </div>
          <div className="space-y-8 md:space-y-12">
            <div>
              <h2 className="text-xl md:text-2xl font-bold mb-3 md:mb-4">
                Organizer
              </h2>
              <p className="text-sm md:text-base text-muted-foreground mb-3 md:mb-4">
                Organized by: VIT-AP University in association with IITM ,
                Managed by Null Vijayawada
              </p>
              <Button
                variant="link"
                className="text-purple-600 p-0 h-auto font-semibold text-sm md:text-base"
                onClick={() => (window.location.href = "/team")}
              >
                OPEN TEAM PAGE
                <ArrowRight className="ml-2 h-3 w-3 md:h-4 md:w-4" />
              </Button>
            </div>

            <div>
              <h2 className="text-xl md:text-2xl font-bold mb-3 md:mb-4">
                What is a Null Vijayawada?
              </h2>
              <p className="text-sm md:text-base text-muted-foreground mb-3 md:mb-4">
                Null Vijayawada chapter is a part of India's largest open
                security community and the first Null chapter in Andhra Pradesh.
              </p>
              <Button
                variant="link"
                className="text-purple-600 p-0 h-auto font-semibold text-sm md:text-base"
                onClick={() =>
                  (window.location.href =
                    "https://null.community/chapters/28-vijayawada")
                }
              >
                READ MORE
                <ArrowRight className="ml-2 h-3 w-3 md:h-4 md:w-4" />
              </Button>
            </div>
          </div>
        </div>
        <div className="mt-8 md:mt-20 py-4 md:py-10 overflow-hidden flex flex-col items-center">
          <div className="flex flex-wrap justify-center gap-8 md:gap-12 px-4">
            {[
              {
          src: "/vit-ap.svg",
          alt: "vit-ap",
          href: "https://vitap.ac.in",
              },
              { src: "/iitm.svg", alt: "iitm", href: "https://iitm.ac.in" },
              { src: "/null.svg", alt: "null", href: "https://null.community" },
              {
          src: "/cystar.jpg",
          alt: "cystar",
          href: "https://cystar.iitm.ac.in",
              },
              { src: "/vtbif.png", alt: "vtbif", href: "https://vtbif.org" },
              { src: "/Amazon_Web_Services_Logo.svg", alt: "aws", href: "https://aws.com" },
              { src: "/df.svg", alt: "Digitalfortress in", href: "https://digitalfortress.in" },
            ].map((logo, i) => (
              <a
          key={i}
          href={logo.href}
          target="_blank"
          rel="noopener noreferrer"
          className="hover:scale-105 transition-transform"
              >
          <img
            src={logo.src}
            alt={logo.alt}
            className="h-10 md:h-16 w-auto opacity-60 hover:opacity-100 transition-opacity"
          />
              </a>
            ))}
          </div>
          <div className="text-center mt-6 md:mt-12">
            <Button
              variant="link"
              className="text-purple-600 font-semibold text-sm md:text-base"
            >
              BECOME A PARTNER
              <ArrowRight className="ml-2 h-3 w-3 md:h-4 md:w-4" />
            </Button>
          </div>
          <div className="mt-8 md:mt-20 py-4 md:py-10 overflow-hidden">
            <h2 className="text-lg md:text-2xl font-bold mb-3 md:mb-4 text-center">
              API Partner
            </h2>
            <div className="flex justify-center">
              <a
          href="https://www.navigatelabsai.com/"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:scale-105 transition-transform"
              >
          <img
            src="/navlabs.png"
            alt="Navigate Labs"
            className="h-14 md:h-20 w-auto opacity-60 hover:opacity-100 transition-opacity"
          />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

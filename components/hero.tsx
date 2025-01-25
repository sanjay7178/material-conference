import { Button } from "@/components/ui/button";
import { Button as Button2 } from "@/components/ui/mui-button";
import { Scroll } from "lucide-react";
import { ScrollIndicator } from "./scroll-indicator";

export function Hero() {
  return (
    <div className="relative min-h-screen flex items-center justify-center">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: `url('/AI-Technology-Creation-Concept.gif')`,
        }}
      >
        <div className="absolute inset-0 bg-black/50" />
      </div>

      {/* Content */}
      <div className="relative container text-center text-white space-y-8">
        <div className="flex justify-center mb-4">
          <div className="flex flex-wrap justify-center gap-4 md:gap-8">
        <a href="https://cystar.iitm.ac.in/" target="_blank" className="flex items-center">
          <img src="/cystar.jpg" alt="Sponsor 1" className="h-12 md:h-20 object-contain" />
        </a>
        <a href="https://iitm.ac.in" target="_blank" className="flex items-center">
          <img src="/iitm.svg" alt="Sponsor 2" className="h-12 md:h-20 object-contain" />
        </a>
        <a href="https://vitap.ac.in" target="_blank" className="flex items-center">
          <img src="/vitap.png" alt="Sponsor 3" className="h-12 md:h-20 object-contain" />
        </a>
        <a href="https://null.community" target="_blank" className="flex items-center">
          <img src="/null.jpeg" alt="Sponsor 4" className="h-12 md:h-20 object-contain" />
        </a>
          </div>
        </div>
        <div className="space-y-4">
          <h1 className="text-4xl md:text-6xl font-bold">
            Two days Bootcamp on LLM Security
          </h1>
          <p className="text-xl md:text-2xl">
            Amaravati. 21 & 22 February, 2025
          </p>
          <p className="text-lg md:text-xl">
            Organized by: VIT-AP University in association with IITM , Managed
            by Null Vijayawada
          </p>
        </div>
        <div className="flex items-center justify-center gap-4">
          {/* <Button2  className="text-white border-white hover:bg-white/10" sx={{ borderRadius: '0px' }}>
            VIEW HIGHLIGHTS
          </Button2> */}
          <Button2 className="primary" sx={{ borderRadius: "0px" }}>
            REGISTER
          </Button2>
        </div>
      </div>

      <ScrollIndicator />
    </div>
  );
}

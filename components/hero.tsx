import { Button } from "@/components/ui/button"
import { Button  as Button2 } from "@/components/ui/mui-button"


export function Hero() {
  return (
    <div className="relative min-h-screen flex items-center justify-center">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: `url('https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-wCcrLvRx7VdZgCBSW8bH2xVukZd024.png')`,
        }}
      >
        <div className="absolute inset-0 bg-black/50" />
      </div>

      {/* Content */}
      <div className="relative container text-center text-white space-y-8">
        <div className="flex justify-center mb-8">
          <img src="/gdg-logo-full.svg" alt="GDG DevFest Season 2018" className="h-16" />
        </div>
        <div className="space-y-4">
          <h1 className="text-4xl md:text-6xl font-bold">GDG DevFest Season 2018</h1>
          <p className="text-xl md:text-2xl">Lviv. October 12-13, 2018</p>
          <p className="text-lg md:text-xl">Join the community, learn new things!</p>
        </div>
        <div className="flex items-center justify-center gap-4">
          {/* <Button2  className="text-white border-white hover:bg-white/10" sx={{ borderRadius: '0px' }}>
            VIEW HIGHLIGHTS
          </Button2> */}
          <Button2 className="primary" sx={{ borderRadius: '0px' }}>
              REGISTER
            </Button2>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
        <div className="w-6 h-10 border-2 border-white rounded-full p-1">
          <div className="w-1.5 h-3 bg-white rounded-full animate-bounce mx-auto" />
        </div>
      </div>
    </div>
  )
}


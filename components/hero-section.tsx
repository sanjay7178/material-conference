import { Button } from "@/components/ui/mui-button"

export function HeroSection() {
  return (
    <section className="relative h-[80vh] flex items-center justify-center bg-[url('https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-Iu5s4QXEUqfhLsnygOfBZ8QkSMjaZo.png')] bg-cover bg-center">
      <div className="absolute inset-0 bg-black/50" />
      <div className="relative container text-center text-white space-y-6">
        <h1 className="text-4xl md:text-6xl font-bold">GDG DevFest Season 2024</h1>
        <p className="text-xl md:text-2xl">Lviv. October 12-13, 2024</p>
        <p className="text-lg md:text-xl">Join the community, learn new things!</p>
        <div className="flex items-center justify-center gap-4">
          <Button
            className="outline"
            variant="outlined"
            sx={{ color: 'white', borderColor: 'white' }}
          >
            VIEW HIGHLIGHTS
          </Button>
          <Button className="primary" sx={{ borderRadius: '0px' }}>
            BUY TICKET
          </Button>
        </div>
      </div>
    </section>
  )
}


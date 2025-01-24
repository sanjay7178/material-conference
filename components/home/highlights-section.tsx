import { Button } from "@/components/ui/button"

const images = [
  "/placeholder.svg",
  "/placeholder.svg",
  "/placeholder.svg",
  "/placeholder.svg",
  "/placeholder.svg",
  "/placeholder.svg",
  "/placeholder.svg",
  "/placeholder.svg",
]

export function HighlightsSection() {
  return (
    <section className="relative">
      <div className="grid grid-cols-2 md:grid-cols-4">
        {images.map((image, index) => (
          <div key={index} className="aspect-square">
            <img
              src={image || "/placeholder.svg"}
              alt={`Highlight ${index + 1}`}
              className="w-full h-full object-cover"
            />
          </div>
        ))}
      </div>

      <div className="absolute inset-0 flex items-center justify-center bg-purple-600/90">
        <div className="text-center text-white">
          <h2 className="text-3xl font-bold mb-4">#dfua16 highlights</h2>
          <p className="mb-6 max-w-2xl">
            This year's festival built lots of excitement. Check out photos from featured talks, hands-on learning
            sessions, and after-hours fun.
          </p>
          <Button variant="outline" className="text-white border-white hover:bg-white/10">
            SEE ALL PHOTOS
          </Button>
        </div>
      </div>
    </section>
  )
}


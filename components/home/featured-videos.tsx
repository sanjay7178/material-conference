import { Card, CardContent } from "@/components/ui/card"
import { Play } from "lucide-react"

const videos = [
  {
    title: "Making mistakes and building products",
    thumbnail: "/placeholder.svg",
  },
  {
    title: "You can still work offline",
    thumbnail: "/placeholder.svg",
  },
  {
    title: "Building Cloud-powered conversational apps",
    thumbnail: "/placeholder.svg",
  },
]

export function FeaturedVideos() {
  return (
    <section className="relative min-h-screen flex items-center justify-center">
      <div className="container">
        <h2 className="text-3xl font-bold mb-12">DFUA'16 featured videos</h2>
        <div className="grid md:grid-cols-3 gap-6">
          {videos.map((video, index) => (
            <Card key={index} className="overflow-hidden">
              <CardContent className="p-0">
                <div className="relative aspect-video group cursor-pointer">
                  <img
                    src={video.thumbnail || "/placeholder.svg"}
                    alt={video.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-black/50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                    <div className="w-16 h-16 rounded-full bg-white/20 flex items-center justify-center">
                      <Play className="w-8 h-8 text-white" />
                    </div>
                  </div>
                </div>
                <div className="p-4">
                  <h3 className="font-medium line-clamp-2">{video.title}</h3>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}


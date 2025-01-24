import { Card, CardContent } from "@/components/ui/card"
import { Play } from "lucide-react"

const videos = [
  {
    title: "Making mistakes and building products from 1st to 30M users",
    thumbnail: "/placeholder.svg",
  },
  {
    title: "When your app is asleep",
    thumbnail: "/placeholder.svg",
  },
  {
    title: "Applying NASA coding guidelines to JavaScript or airspace is closer than you may think",
    thumbnail: "/placeholder.svg",
  },
]

export function VideosSection() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container">
        <h2 className="text-3xl font-bold mb-12">DFUA'24 featured videos</h2>
        <div className="grid md:grid-cols-3 gap-6">
          {videos.map((video, index) => (
            <Card key={index} className="overflow-hidden">
              <CardContent className="p-0 relative group">
                <img
                  src={video.thumbnail || "/placeholder.svg"}
                  alt={video.title}
                  className="w-full aspect-video object-cover"
                />
                <div className="absolute inset-0 bg-black/50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                  <Play className="w-12 h-12 text-white" />
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


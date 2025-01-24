import { Button } from "@/components/ui/button"

const previousSpeakers = Array(14)
  .fill(null)
  .map((_, i) => ({
    image: "/placeholder.svg",
    name: `Previous Speaker ${i + 1}`,
  }))

export function PreviousSpeakers() {
  return (
    <section className="py-20">
      <h2 className="text-3xl font-bold mb-12">Previous speakers</h2>
      <div className="grid grid-cols-5 md:grid-cols-7 lg:grid-cols-10 gap-6 mb-8">
        {previousSpeakers.map((speaker, i) => (
          <div key={i} className="aspect-square">
            <img
              src={speaker.image || "/placeholder.svg"}
              alt={speaker.name}
              className="w-full h-full rounded-full object-cover"
            />
          </div>
        ))}
      </div>
      <div className="text-center">
        <Button variant="link" className="text-purple-600 hover:text-purple-700">
          VIEW ALL
        </Button>
      </div>
    </section>
  )
}


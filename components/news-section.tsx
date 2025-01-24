import { Card, CardContent } from "@/components/ui/card"

const news = [
  {
    title: "We're looking for speakers",
    date: "FEB 12, 2024",
    description:
      "GDG DevFest Ukraine was announced, for the sixth year in a row, the conference will bring together 900 developers, managers and...",
    image: "/placeholder.svg",
  },
  {
    title: "Announcing GDG DevFest Ukraine 2024",
    date: "FEB 6, 2024",
    description: "It is official. GDG DevFest Ukraine 2024 is going to take place in Lviv, on October 13-14.",
    image: "/placeholder.svg",
  },
  {
    title: "Thank you all for your support",
    date: "SEP 29, 2023",
    description: "Our team wants to thank one more time our partners, who made GDG DevFest Ukraine 2023 possible...",
    image: "/placeholder.svg",
  },
]

export function NewsSection() {
  return (
    <section className="py-20">
      <div className="container">
        <h2 className="text-3xl font-bold mb-12">The latest news</h2>
        <div className="grid md:grid-cols-3 gap-6">
          {news.map((item, index) => (
            <Card key={index}>
              <CardContent className="p-0">
                <img
                  src={item.image || "/placeholder.svg"}
                  alt={item.title}
                  className="w-full aspect-video object-cover"
                />
                <div className="p-6">
                  <p className="text-sm text-muted-foreground mb-2">{item.date}</p>
                  <h3 className="font-bold text-lg mb-2">{item.title}</h3>
                  <p className="text-muted-foreground">{item.description}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}


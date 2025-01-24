import { BlogGrid } from "@/components/blog/blog-grid"
import { BlogList } from "@/components/blog/blog-list"

// This would typically come from a CMS or API
const posts = [
  {
    id: "looking-for-speakers",
    title: "We're looking for speakers",
    excerpt:
      "GDG DevFest Ukraine was announced, for the sixth year in a row, the conference will bring together 900 developers, managers and...",
    date: "FEB 12, 2017",
    image: "/placeholder.svg",
    category: "Announcement",
  },
  {
    id: "announcing-devfest-2017",
    title: "Announcing GDG DevFest Ukraine 2017",
    excerpt: "It is official. GDG DevFest Ukraine 2017 is going to take place in Lviv, on October 13-14.",
    date: "FEB 6, 2017",
    image: "/placeholder.svg",
    category: "Event",
  },
  {
    id: "thank-you-support",
    title: "Thank you all for your support",
    excerpt: "Our team wants to thank one more time our partners, who made GDG DevFest Ukraine 2016 possible...",
    date: "SEP 29, 2016",
    image: "/placeholder.svg",
    category: "Community",
  },
  {
    id: "devfest-rocked",
    title: "DevFest Ukraine rocked - SUMMARY",
    excerpt: "GDG DevFest Ukraine 2016",
    date: "SEP 10, 2016",
    image: "/placeholder.svg",
    category: "Event",
  },
]

export default function BlogPage() {
  return (
    <div className="min-h-screen py-20">
      <div className="container">
        <div className="max-w-2xl mb-12">
          <h1 className="text-4xl font-bold mb-4">Blog</h1>
          <p className="text-lg text-muted-foreground">
            Latest news, updates, and stories from the GDG DevFest Ukraine team.
          </p>
        </div>

        <div className="space-y-20">
          <BlogGrid posts={posts.slice(0, 3)} />
          <BlogList posts={posts.slice(3)} />
        </div>
      </div>
    </div>
  )
}


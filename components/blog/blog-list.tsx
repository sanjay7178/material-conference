import Link from "next/link"
import { Card, CardContent } from "@/components/ui/card"

interface Post {
  id: string
  title: string
  excerpt: string
  date: string
  image: string
}

export function BlogList({ posts }: { posts: Post[] }) {
  return (
    <div className="space-y-6 md:space-y-8">
      {posts.map((post) => (
        <Link key={post.id} href={`/blog/${post.id}`}>
          <Card className="overflow-hidden hover:shadow-lg transition-shadow">
            <CardContent className="p-0">
              <div className="flex flex-col sm:flex-row gap-4 md:gap-6">
                <img
                  src={post.image || "/placeholder.svg"}
                  alt={post.title}
                  className="w-full sm:w-48 md:w-64 aspect-video object-cover rounded-lg"
                />
                <div className="space-y-2 md:space-y-3">
                  <div className="flex items-center gap-2 text-xs md:text-sm text-muted-foreground">
                    <span>{post.date}</span>
                  </div>
                  <h2 className="text-lg md:text-xl font-semibold">{post.title}</h2>
                  <p className="text-sm md:text-base text-muted-foreground line-clamp-2 md:line-clamp-3">
                    {post.excerpt}
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </Link>
      ))}
    </div>
  )
}


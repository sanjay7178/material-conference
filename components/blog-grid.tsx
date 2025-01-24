import Link from "next/link"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

interface Post {
  id: string
  title: string
  excerpt: string
  date: string
  image: string
  category: string
}

export function BlogGrid({ posts }: { posts: Post[] }) {
  return (
    <div className="grid md:grid-cols-3 gap-6">
      {posts.map((post) => (
        <Link key={post.id} href={`/blog/${post.id}`}>
          <Card className="overflow-hidden h-full group">
            <CardContent className="p-0">
              <div className="relative aspect-[16/9]">
                <img src={post.image || "/placeholder.svg"} alt={post.title} className="object-cover w-full h-full" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-transparent" />
                <div className="absolute bottom-0 p-6 text-white">
                  <Badge variant="secondary" className="mb-3">
                    {post.category}
                  </Badge>
                  <h3 className="text-2xl font-bold mb-2 group-hover:text-purple-400 transition-colors">
                    {post.title}
                  </h3>
                  <p className="text-sm text-gray-300 line-clamp-2">{post.excerpt}</p>
                  <p className="text-sm text-gray-400 mt-4">{post.date}</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </Link>
      ))}
    </div>
  )
}


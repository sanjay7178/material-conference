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
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
      {posts.map((post) => (
        <div key={post.id} className="space-y-3 md:space-y-4">
          <img
            src={post.image}
            alt={post.title}
            className="w-full aspect-video object-cover rounded-lg"
          />
          <div className="space-y-2">
            <div className="flex items-center gap-2 text-xs md:text-sm text-muted-foreground">
              <span>{post.category}</span>
              <span>•</span>
              <span>{post.date}</span>
            </div>
            <h2 className="text-lg md:text-xl font-semibold line-clamp-2">{post.title}</h2>
            <p className="text-sm md:text-base text-muted-foreground line-clamp-3">
              {post.excerpt}
            </p>
          </div>
        </div>
      ))}
    </div>
  )
}


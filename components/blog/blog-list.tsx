import Link from "next/link"
import { BlogPost } from "@/types/blog"
import { Card, CardContent } from "@/components/ui/card"

export function BlogList({ posts }: { posts: BlogPost[] }) {
  return (
    <div className="space-y-8 md:space-y-12">
      {posts.map((post) => (
        <Link key={post.slug} href={`/blog/${post.slug}`}>
          <Card className="overflow-hidden hover:shadow-lg transition-shadow ">
            <CardContent className="p-0">
              <div className="flex flex-col sm:flex-row gap-4 md:gap-6">
                <img
                  src={post.heroImage}
                  alt={post.title}
                  className="w-full sm:w-48 md:w-64 aspect-video object-cover"
                />
                <div className="p-4 space-y-2">
                  <p className="text-sm text-muted-foreground">{post.date}</p>
                  <h2 className="text-lg font-semibold">{post.title}</h2>
                  {post.excerpt && (
                    <p className="text-muted-foreground line-clamp-2">{post.excerpt}</p>
                  )}
                </div>
              </div>
            </CardContent>
          </Card>
        </Link>
      ))}
    </div>
  )
}

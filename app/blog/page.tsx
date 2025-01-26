import { getAllPosts } from '@/lib/blog-data';
import { BlogList } from '@/components/blog/blog-list';
import Link from 'next/link';

export default function BlogPage() {
  const posts = getAllPosts();
  
  return (

    
<div className="relative">
      <div className="relative h-[40vh] md:h-[60vh] bg-[url('/news.jpg')] bg-cover bg-center flex items-center justify-center">
        <div className="absolute inset-0 bg-black/50" />
        <div className="relative container h-full flex items-center px-4 md:px-6">
          <div className="max-w-3xl text-white">
            <h1 className="text-2xl md:text-3xl font-bold mb-4 md:mb-6">News</h1>
            <p className="text-base md:text-xl text-gray-200 mb-8 md:mb-12">
            Latest news, updates, and stories from the Null Vijayawada team.


            </p>
          </div>
        </div>
      </div>
      
      <div className="space-y-8 px-4 md:px-6 py-8 md:py-12 container max-w-9xl mx-auto">
        {posts.map((post) => (
          <article key={post.id} className="p-4 border border-gray-200 rounded-lg">
            <h2 className="text-xl font-semibold mb-2">
              <Link href={`/blog/${post.slug}`}>
                {post.title}
              </Link>
            </h2>
            <p className="text-sm text-gray-600 mb-3">{post.date}</p>
            <p className="text-gray-800">{post.excerpt}</p>
          </article>
        ))}
      </div>
    </div>
  );
}

import { getAllPosts } from '@/lib/blog-data';
import { BlogList } from '@/components/blog/blog-list';

export default function BlogPage() {
  const posts = getAllPosts();
  
  return (

    
<div className="relative">
      <div className="relative h-[40vh] md:h-[60vh] bg-[url('/news.jpg')] bg-cover bg-center flex items-center justify-center">
        <div className="absolute inset-0 bg-black/50" />
        <div className="relative container h-full flex items-center px-4 md:px-6">
          <div className="max-w-3xl text-white">
            <h1 className="text-3xl md:text-5xl font-bold mb-4 md:mb-6">News</h1>
            <p className="text-base md:text-xl text-gray-200 mb-8 md:mb-12">
            Latest news, updates, and stories from the Null Vijayawada team.


            </p>
          </div>
        </div>
      </div>
      
      <div className="container mx-auto px-4 md:px-6 py-8 md:py-16">
        <div className="space-y-12 md:space-y-20">
        <BlogList posts={posts} />

        </div>
      </div>
    </div>
  );
}

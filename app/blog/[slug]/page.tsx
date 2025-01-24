import { getAllPosts, getPostBySlug } from '@/lib/blog-data';
import { notFound } from 'next/navigation';

export default function BlogPost({ params }: { params: { slug: string } }) {
  const post = getPostBySlug(params.slug);

  if (!post) {
    notFound();
  }

  return (
    <article>
      <div 
        className="h-[40vh] md:h-[60vh] relative flex items-center justify-center bg-cover bg-center" 
        style={{ backgroundImage: `url(${post.heroImage})` }}
      >
        <div className="absolute inset-0 bg-black/50" />
        <div className="container relative h-full flex items-end pb-10 md:pb-20 px-4 md:px-6">
          <div className="max-w-3xl text-white">
            <h1 className="text-3xl md:text-5xl font-bold mb-2 md:mb-4">{post.title}</h1>
            <p className="text-base md:text-lg opacity-90">{post.date}</p>
          </div>
        </div>
      </div>

      <div className="container py-10 md:py-20 px-4 md:px-6">
        <div className="max-w-3xl mx-auto prose prose-sm md:prose-lg prose-zinc dark:prose-invert">
          {post.content.split("\n\n").map((paragraph, index) => (
            <p key={index} className="text-base md:text-lg mb-4 md:mb-6">
              {paragraph}
            </p>
          ))}

          <div className="mt-8 md:mt-12">
            <button className="w-full sm:w-auto bg-purple-600 text-white px-4 md:px-6 py-2.5 md:py-3 text-sm md:text-base rounded-lg font-medium hover:bg-purple-700 transition-colors">
              SUBMIT A PROPOSAL
            </button>
          </div>
        </div>
      </div>
    </article>
  );
}

// Generate static paths for all blog posts
export async function generateStaticParams() {
  const posts = getAllPosts();
  return posts.map((post) => ({
    slug: post.slug,
  }));
}


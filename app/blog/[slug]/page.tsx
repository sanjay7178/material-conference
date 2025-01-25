import { getAllPosts, getPostBySlug } from '@/lib/blog-data';
import { notFound } from 'next/navigation';
import { MDXRemote } from 'next-mdx-remote/rsc';

const components = {
  h1: (props: any) => (
    <h1 {...props} className="text-4xl font-bold my-6" />
  ),
  h2: (props: any) => (
    <h2 {...props} className="text-3xl font-bold my-5" />
  ),
  h3: (props: any) => (
    <h3 {...props} className="text-2xl font-bold my-4" />
  ),
  h4: (props: any) => (
    <h4 {...props} className="text-xl font-bold my-3" />
  ),
  p: (props: any) => (
    <p {...props} className="my-4 leading-7" />
  ),
  ul: (props: any) => (
    <ul {...props} className="my-4 ml-6 list-disc space-y-2" />
  ),
  ol: (props: any) => (
    <ol {...props} className="my-4 ml-6 list-decimal space-y-2" />
  ),
  li: (props: any) => (
    <li {...props} className="leading-7" />
  ),
  strong: (props: any) => (
    <strong {...props} className="font-bold" />
  ),
  a: (props: any) => (
    <a {...props} className="text-purple-600 hover:text-purple-700 underline" />
  ),
};

export default function BlogPost({ params }: { params: { slug: string } }) {
  const post = getPostBySlug(params.slug);

  if (!post) {
    notFound();
  }

  return (
    <article className="min-h-screen">
      <div 
        className="h-[40vh] md:h-[60vh] relative bg-cover bg-center"
        style={{ backgroundImage: `url(${post.heroImage})` }}
      >
        <div className="absolute inset-0 bg-black/50" />
        <div className="container relative h-full flex items-end pb-10 md:pb-20 px-4 md:px-6">
          <div className="max-w-3xl text-white">
            <h1 className="text-2xl md:text-4xl font-bold mb-2 md:mb-4">{post.title}</h1>
            <p className="text-base md:text-lg opacity-90">{post.date}</p>
          </div>
        </div>
      </div>

      <div className="container py-10 md:py-20 px-4 md:px-6">
        <div className="max-w-3xl mx-auto">
          <div className="prose prose-lg max-w-none">
            <MDXRemote 
              source={post.content}
              components={components}
            />
            <div className="mt-8 md:mt-12">
              <button className="w-full sm:w-auto bg-purple-600 text-white px-4 md:px-6 py-2.5 md:py-3 text-sm md:text-base rounded-lg font-medium hover:bg-purple-700 transition-colors">
                SUBMIT A PROPOSAL
              </button>
            </div>
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


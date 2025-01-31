import React from 'react';
import Link from 'next/link';
import { getAllPosts } from '@/lib/blog-data';
import { BlogPost } from '@/types/blog';

interface NewsItem {
  slug: string;
  title: string;
  date: string;
  excerpt: string;
}

export default function NewsContainer() {
  // Get the latest 3 blog posts
  const newsItems: NewsItem[] = getAllPosts()
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
    .slice(0, 3)
    .map((post: BlogPost) => ({
      slug: post.slug,
      title: post.title,
      date: new Date(post.date).toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'long',
        day: 'numeric'
      }),
      excerpt: post.excerpt || post.title || ''
    }));

  return (
    <div className="w-full max-w-3xl mx-auto px-4">
      <h2 className="text-2xl font-bold mb-6">Latest News</h2>
      <div className="space-y-6">
        {newsItems.map((item) => (
          <div key={item.slug} className="border-l-4 border-purple-600 pl-4 hover:border-purple-800">
            <div className="text-sm text-gray-500">{item.date}</div>
            <h3 className="text-lg font-semibold mt-1">{item.title}</h3>
            <p className="text-gray-600 mt-2">{item.excerpt}</p>
            <Link 
              href={`/blog/${item.slug}`} 
              className="text-purple-600 hover:text-purple-800 mt-2 inline-block"
            >
              Read more →
            </Link>
          </div>
        ))}
      </div>
      <div className="mt-8 text-center">
        <Link 
          href="/blog" 
          className="text-purple-600 hover:text-purple-800 font-semibold"
        >
          View all news →
        </Link>
      </div>
    </div>
  );
}

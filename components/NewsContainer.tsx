'use client';
import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { getAllPosts } from '@/lib/blog-data';
import { BlogPost } from '@/types/blog';

interface NewsItem {
  slug: string;
  title: string;
  date: string;
  excerpt: string;
  isLatest: boolean;
  isImportant: boolean;
}

export default function NewsContainer() {
  const [activeIndex, setActiveIndex] = useState(0);

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
      excerpt: post.excerpt || post.title || '',
      isLatest: true, // Assuming the top 3 posts are the latest
      isImportant: post.tags.includes('important') // Assuming 'tags' is an array in BlogPost
    }));

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((current) => (current + 1) % newsItems.length);
    }, 5000); // Scroll every 5 seconds

    return () => clearInterval(interval);
  }, [newsItems.length]);

  return (
    <div className="w-full max-w-3xl mx-auto">
      <h2 className="text-2xl font-bold mb-6">Latest News</h2>
      <div className="relative h-[200px] overflow-hidden">
        <div 
          className="flex transition-transform duration-700 ease-in-out absolute w-full"
          style={{ 
            transform: `translateX(-${activeIndex * 100}%)`,
            width: `${newsItems.length * 100}%`
          }}
        >
          {newsItems.map((item) => (
            <div
              key={item.slug}
              className="w-full px-2 flex-shrink-0"
            >
              <div className="border-l-4 border-purple-600 pl-4 hover:border-purple-800 bg-white/50 backdrop-blur-sm p-4 rounded-r">
                <div className="text-sm text-gray-500">{item.date}</div>
                <h3 className="text-lg font-semibold mt-1">{item.title}</h3>
                <p className="text-gray-600 mt-2 line-clamp-2">{item.excerpt}</p>
                <div className="flex space-x-2 mt-2">
                  {item.isLatest && <span className="text-xs bg-green-200 text-green-800 px-2 py-1 rounded">Latest</span>}
                  {item.isImportant && <span className="text-xs bg-red-200 text-red-800 px-2 py-1 rounded">Important</span>}
                </div>
                <Link 
                  href={`/blog/${item.slug}`} 
                  className="text-purple-600 hover:text-purple-800 mt-2 inline-block"
                >
                  Read more →
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="mt-4 flex justify-center space-x-2">
        {newsItems.map((_, index) => (
          <button
            key={index}
            onClick={() => setActiveIndex(index)}
            className={`w-2 h-2 rounded-full transition-all ${
              index === activeIndex ? 'bg-purple-600 w-4' : 'bg-purple-300'
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
      <div className="mt-6 text-center">
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

import { NextResponse } from 'next/server';
import { BlogPost } from '@/types/blog';

const posts: Record<string, BlogPost> = {
  "looking-for-speakers": {
    id: "1",
    slug: "looking-for-speakers",
    title: "We're looking for speakers",
    date: "Jan 26, 2025",
    heroImage: "/cfs.jpg",
    content: `// ...existing content...`
  },
  // "llm-security-workshop": {
  //   id: "2",
  //   slug: "llm-security-workshop",
  //   title: "Call for Industry Experts: LLM Security Workshop",
  //   date: "Feb 15, 2024",
  //   heroImage: "/workshop-banner.jpg",
  //   content: `// ...existing content...`
  // }
};

export async function GET(
  request: Request,
  { params }: { params: { slug: string } }
) {
  const post = posts[params.slug];
  
  if (!post) {
    return NextResponse.json(
      { error: 'Post not found' },
      { status: 404 }
    );
  }

  return NextResponse.json(post);
}

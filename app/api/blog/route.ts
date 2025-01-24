import { NextResponse } from 'next/server';
import { BlogPost } from '@/types/blog';

const posts: BlogPost[] = [
  {
    id: "1",
    slug: "looking-for-speakers",
    title: "We're looking for speakers",
    date: "Jan 26, 2025",
    heroImage: "/cfs.jpg",
    excerpt: "GDG DevFest Ukraine was announced, for the sixth year in a row...",
    content: `GDG DevFest Ukraine was announced, for the sixth year in a row...`
  },
  {
    id: "2",
    slug: "llm-security-workshop",
    title: "Call for Industry Experts: LLM Security Workshop",
    date: "Feb 15, 2024",
    heroImage: "/workshop-banner.jpg",
    excerpt: "We are excited to announce a comprehensive two-day workshop on Large Language Model Security and MLOps...",
    content: `We are excited to announce a comprehensive two-day workshop...`
  }
];

export async function GET() {
  return NextResponse.json(posts);
}

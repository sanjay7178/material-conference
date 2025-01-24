import { BlogPost } from '@/types/blog';

export const blogPosts: Record<string, BlogPost> = {
  "looking-for-speakers": {
    id: "looking-for-speakers",
    slug: "looking-for-speakers",
    title: "We're looking for speakers",
    date: "Jan 26, 2025",
    heroImage: "/cfs.jpg",
    excerpt: "GDG DevFest Ukraine was announced, for the sixth year in a row...",
    content: `// ...existing content...`
  },
  "llm-security-workshop": {
    id: "llm-security-workshop",
    slug: "llm-security-workshop",
    title: "Call for Industry Experts: LLM Security Workshop",
    date: "Feb 15, 2024",
    heroImage: "/workshop-banner.jpg",
    excerpt: "We are excited to announce a comprehensive two-day workshop...",
    content: `// ...existing content...`
  }
};

export function getAllPosts(): BlogPost[] {
  return Object.values(blogPosts);
}

export function getPostBySlug(slug: string): BlogPost | undefined {
  return blogPosts[slug];
}

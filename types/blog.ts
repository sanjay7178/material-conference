export interface BlogPost {
  id : string;
  slug: string;
  title: string;
  date: string;
  content: string;
  excerpt: string;
  heroImage?: string;
  submitProposalUrl?: string;
  submitProposalLabel?: string;
}

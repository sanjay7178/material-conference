export interface BlogPost {
  id: string;
  title: string;
  date: string;
  content: string;
  heroImage: string;
  excerpt?: string;
  slug: string;
  submitProposalLabel?: string;
  submitProposalUrl?: string;
}

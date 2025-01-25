import { BlogPost } from "@/types/blog";

export const blogPosts: Record<string, BlogPost> = {
  "looking-for-speakers": {
    id: "looking-for-speakers",
    slug: "looking-for-speakers",
    title: "We're looking for speakers",
    date: "Jan 26, 2025",
    heroImage: "/cfs.jpg",
    excerpt:
      "GDG DevFest Ukraine was announced, for the sixth year in a row...",
    content: `// ...existing content...`,
  },
  "llm-security-workshop": {
    id: "llm-security-workshop",
    slug: "llm-security-workshop",
    title: "Call for Industry Experts: LLM Security Workshop",
    date: "Feb 15, 2024",
    heroImage: "/workshop-banner.jpg",
    excerpt:
      "Join us for a comprehensive two-day LLM Security Bootcamp aimed at providing hands-on experience with security principles and best practices for Large Language Models.",
    content: `
      ## Event Details
      **Dates**: February 21-22, 2025
      **Location**: VIT-AP University, Amaravati
        
      ## Overview
      The LLM Security Bootcamp aims to provide a comprehensive understanding of security principles and best practices specific to Large Language Models (LLMs). The bootcamp will include hands-on sessions, and practical exercises. The target audience is students from various engineering disciplines with an interest in Artificial Intelligence and cybersecurity.
        
      ## Objectives
      - To educate students on security aspects of Large Language Models (LLMs)
      - To provide exposure to real-world applications of LLMs in cybersecurity
      - To bridge the gap between theoretical knowledge and industry practices in LLM security
        
      ## Workshop Schedule
        
      ### Day 1
        
      #### Session 1: Adversarial Robustness
      - Understanding and mitigating adversarial attacks on LLMs
      - Hands-on: Crafting adversarial prompts
      - Practice: Testing LLM defenses using prompt examples
      - API Requirement: OpenAI GPT API
        
      #### Session 2: Data Privacy and Security
      - Protecting sensitive data in LLM interactions
      - Hands-on: Simulating and detecting sensitive data leakage
      - Practice: Implementing differential privacy measures
      - API Requirement: Hugging Face API
        
      ### Day 2
        
      #### Session 3: Bias and Fairness Mitigation
      - Identifying and mitigating biases in LLM-generated content
      - Hands-on: Auditing LLM outputs for bias
      - Practice: Fine-tuning a model with debiased datasets
      - API Requirement: Google Vertex AI
        
      #### Session 4: Detection and Mitigation of Misuse
      - Techniques to identify and mitigate malicious use cases
      - Hands-on: Developing toxicity filters
      - Practice: Moderating generated content with ethical guidelines
      - API Requirement: Anthropic Claude API
        
      ## Requirements
      Participants will need access to various API keys for hands-on sessions:
      - OpenAI GPT API
      - Hugging Face API
      - Google Vertex AI
      - Anthropic Claude API
        
      Join us for this exciting opportunity to learn about LLM security from industry experts!
        
      [Register Now](#registration)
    `,
  },
};

export function getAllPosts(): BlogPost[] {
  return Object.values(blogPosts);
}

export function getPostBySlug(slug: string): BlogPost | undefined {
  return blogPosts[slug];
}

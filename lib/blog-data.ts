import { BlogPost } from "@/types/blog";

export const blogPosts: Record<string, BlogPost> = {
  "llm-security-workshop": {
    id: "llm-security-workshop",
    slug: "llm-security-workshop",
    title: "Call for Industry Experts: LLM Security Workshop",
    date: "Jan 26, 2025",
    heroImage: "/workshop-banner.jpg",
    tags: ["important"],
    excerpt:
      "Join us for a comprehensive two-day LLM Security Bootcamp aimed at providing hands-on experience with security principles and best practices for Large Language Models.",
    content: `
[//]: # Event Details
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

    `,
    submitProposalLabel: "Propose a Session",
    submitProposalUrl: "",
  },

  "call-for-volunteers": {
    id: "call-for-volunteers",
    slug: "call-for-volunteers",
    title: "Call for Volunteers: LLM Security Workshop",
    date: "Jan 26, 2025",
    heroImage: "/volunteer-banner.jpg",
    tags: ["regular"],
    excerpt:
      "We are seeking 20 event co-coordinators for the Two-Day Bootcamp on LLM Security.",
    content: `
      I hope this message finds you well. We are excited to announce the upcoming Two-Day Bootcamp on LLM Security to be held in Amaravati (Venue : VIT AP University) on 21st & 22nd February, 2025. This event is being organized by VIT-AP University in association with IITM and managed by Null Vijayawada.

      To ensure the success of this event, we are seeking **20** event co-coordinators to assist with various responsibilities such as event logistics, participant support, and on-site management.

      ## Event Details
      **Title**: Two-Day Bootcamp on LLM Security  
      **Date**: 21st & 22nd February, 2025  
      **Location**: Amaravati  
      **Organized by**: VIT-AP University in association with IITM  
      **Managed by**: Null Vijayawada

      ### Principal Investigator 
      - Dr Chester Rebeiro, IITM

      ### Convenors
      - Dr. Hari Seetha
      - Dr. Sudhakar Ilango

      ### Coordinators
      - Dr. Sibi Chakkaravarthy S
      - Dr. Ganesh Reddy Karri
      - Dr. Nandha Kumar
      - Dr. Priyanka S
      

      We are confident that your involvement will help make this bootcamp a success. Please confirm your interest in volunteering by today. If you have any questions, feel free to reach out to me directly at sanjay - +91 6302635053, Hari krishna - 9361816271.

      Thank you for your support and enthusiasm in contributing to the success of this significant event.
        `,
    submitProposalLabel: "Sign Up to Volunteer",
    submitProposalUrl:
      "https://docs.google.com/forms/d/e/1FAIpQLSfnmevFFJLZVOTQsvNINAR8LoC01cdLQNmhu26WWMThhymLCA/viewform",
  }
  
  ,
};

export function getAllPosts(): BlogPost[] {
  return Object.values(blogPosts);
}

export function getPostBySlug(slug: string): BlogPost | undefined {
  return blogPosts[slug];
}

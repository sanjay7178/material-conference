import { BlogPost } from "@/types/blog";

export const blogPosts: Record<string, BlogPost> = {
  "llm-security-workshop": {
    id: "llm-security-workshop",
    slug: "llm-security-workshop",
    title: "Call for Industry Experts and Proposals: LLM Security Workshop",
    date: "Jan 26, 2025",
    heroImage: "/workshop-banner.jpg",
    tags: ["important"],
    excerpt:
      "Call for Industry Experts in Cybersecurity: Share your expertise on LLM Security and AI-based security aspects in our upcoming two-day workshop. Travel support and honorarium provided.",
    content: `
# Call for Industry Experts: LLM Security Workshop

## [Submit a Proposal](https://forms.gle/3Jon7tLCLfmWQK68A)

**Dates**: February 21-22, 2025  
**Location**: VIT-AP University, Amaravati

## Overview
We invite industry experts in cybersecurity and AI to share their knowledge and practical experience in our comprehensive two-day LLM Security Workshop. This is an opportunity to shape the next generation of cybersecurity professionals by providing hands-on training and real-world insights.

## What We Offer
- Travel reimbursement to VIT-AP University
- One night accommodation
- Honorary payment for the session
- Complimentary meals during the event

## Workshop Topics of Interest

### Day 1 Sessions
1. **Adversarial AI & LLM Security**
   - Current threats and defense mechanisms
   - Real-world case studies
   - Hands-on demonstration of security vulnerabilities
   - Industry best practices

2. **Data Privacy in LLM Applications**
   - Enterprise-grade security measures
   - Practical approaches to data protection
   - Industry compliance and standards
   - Real-world implementation strategies

### Day 2 Sessions
3. **AI Security Frameworks**
   - Latest developments in AI security
   - Implementation of security protocols
   - Risk assessment methodologies
   - Best practices from industry

4. **Emerging Threats in AI Security**
   - Current challenges in LLM security
    - Advanced protection mechanisms
    - Future trends and preparedness
    - Case studies from industry
---
### Additional Areas of Interest
- Multimodal AI security
- Security in AI-powered robotics
- Edge AI security
- AI security in healthcare
- Security in recommendation systems
- Privacy-preserving machine learning

 **Reinforcement Learning Security**
   - Security in autonomous systems
   - Adversarial attacks on RL agents
   - Safe RL deployment strategies
   - Robustness in multi-agent systems

## Format
- 2-hour session per topic
- 1 hour theoretical presentation
- 1 hour hands-on workshop/demonstration
- Q&A and interaction with students

## Who Should Apply
- Cybersecurity professionals with AI expertise
- Computer Vision security researchers
- NLP security specialists
- RL security experts
- AI safety researchers
- Industry practitioners in any AI security domain

## How to Submit
Please send your:
- Proposed topic and session outline
- Brief bio and expertise
- Previous speaking experiences
- Preferred session slot

Submit your proposal by February 10th, 2025

For queries contact:
- Sanjay: +91 9966018440
- Hari Krishna: +91 9361816271
Mail :  nullvja@gmail.com

Submit your proposal by February 10th, 2025


For more details visit :  www.nullvijayawada.org
X:   x.com/nullvja
LinkedIn :  https://www.linkedin.com/company/nullvja



Join us in shaping the future of AI security education!
    `,
    submitProposalLabel: "Propose a Session",
    submitProposalUrl: "https://forms.gle/3Jon7tLCLfmWQK68A",
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

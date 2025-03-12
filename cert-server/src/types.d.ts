interface Env {
  DB: D1Database;
  resend_key?: string;
}

interface Certificate {
  id: string;
  register_no?: string;
  name: string;
  institution: string;
  issueDate: string;
  created_at?: string;
}

interface OpenAIKey {
  id: number;
  email: string;
  name: string;
  openai_key: string;
  used: boolean;
  created_at: string;
}

interface Env {
  DB: D1Database;
}

interface Certificate {
  id: string;
  register_no?: string;
  name: string;
  institution: string;
  issueDate: string;
  created_at?: string;
}

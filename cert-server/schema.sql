CREATE TABLE IF NOT EXISTS certificates (
  id TEXT PRIMARY KEY,
  register_no TEXT,
  name TEXT NOT NULL,
  institution TEXT NOT NULL,
  issueDate TEXT NOT NULL,
  created_at DATETIME DEFAULT CURRENT_TIMESTAMP
);

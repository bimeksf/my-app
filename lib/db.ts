import Database from 'better-sqlite3';
import path from 'path';

const db = new Database(path.resolve(process.cwd(), 'db.sqlite'));

db.exec(`
  CREATE TABLE IF NOT EXISTS cards (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  title TEXT NOT NULL,
  slug TEXT UNIQUE,
  date TEXT, 
  author TEXT,
  description TEXT NOT NULL,
  tags TEXT -- bude obsahovat např. "blog,nextjs,sqlite"
);
`);

export default db;

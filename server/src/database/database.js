import sqlite3 from "sqlite3";
import { open } from "sqlite";

async function openDb() {
  return open({
    filename: "src/database/database.sqlite",
    driver: sqlite3.Database,
  });
}
async function initialDb() {
  const db = await openDb();

  await db.exec(`CREATE TABLE IF NOT EXISTS users (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    name TEXT,
    email TEXT,
    created_date DATETIME DEFAULT (datetime('now')),
    updated_date DATETIME DEFAULT (datetime('now'))
  )`);

  await db.exec(`CREATE TABLE IF NOT EXISTS posts (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    title TEXT NOT NULL,
    content TEXT NOT NULL,
    created_date DATETIME DEFAULT (datetime('now')),
    updated_date DATETIME DEFAULT (datetime('now'))
  )`);
}
initialDb();

export async function closeDb() {
  const db = await openDb();
  await db.close();
}

export default openDb;

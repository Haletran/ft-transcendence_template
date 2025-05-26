// you can use sqlite3 or knexjs if you want but not prisma
import Database from "better-sqlite3";
import { z } from "zod";

// this interface will be like a class in C++
// you add the properties of the user model here
export interface User {
  id: number;
  username: string;
  password: string;
  created_at: string;
  // add more properties needed
}

// this schema is used to validate the data when user registers or logs in
// you can use this schema to validate the data before inserting it into the database
// this is done to ensure that the data is valid and to prevent SQL injection attacks
// here is the link to the documentation: https://zod.dev/
const registerSchema = z.object({
  username: z.string().min(3).max(20),
  email: z.string().email(),
  password: z.string().min(8).max(100),
});

const loginSchema = z.object({
  username: z.string().min(3).max(20),
  password: z.string().min(8).max(100),
});

export class UserModel {
  private db: Database.Database;

  constructor(database: Database.Database) {
    this.db = database;
  }

  createTable(): void {
    this.db.exec(`
      CREATE TABLE IF NOT EXISTS users (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        username TEXT UNIQUE NOT NULL,
        password TEXT NOT NULL,
        created_at DATETIME DEFAULT CURRENT_TIMESTAMP
      )
    `);
  }

  // here you an create function to interact with the database
  // like a function to create a user since this is a user model
  // here is an example to get a user by id
  getUserById(id: number): User | null {
    try {
      if (typeof id !== "number" || id <= 0) {
        throw new Error("Invalid user ID");
      }
      const idSchema = z.number().int().positive();
      idSchema.parse(id);
      const stmt = this.db.prepare("SELECT * FROM users WHERE id = ?");
      const user = stmt.get(id);
      if (!user) {
        throw new Error("User not found");
      }
      return user as User;
    } catch (error: any) {
      console.error("Error getting user by ID:", error);
      return null;
    }
  }
}

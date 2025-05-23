// you can use sqlite3 or knexjs if you want but not prisma
import Database from 'better-sqlite3'

// this interface will be like a class in C++
// you add the properties of the user model here
export interface User {
  id: number
  username: string
  password: string
  created_at: string
  // add more properties needed
}

export class UserModel {
  private db: Database.Database

  constructor(database: Database.Database) {
    this.db = database
  }

  createTable(): void {
    this.db.exec(`
      CREATE TABLE IF NOT EXISTS users (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        username TEXT UNIQUE NOT NULL,
        password TEXT NOT NULL,
        created_at DATETIME DEFAULT CURRENT_TIMESTAMP
      )
    `)
  }

  // here you an create function to interact with the database
  // like a function to create a user since this is a user model
  // here is an example to gete a user by id
  getUserById(id: number): User | null {
    const stmt = this.db.prepare('SELECT * FROM users WHERE id = ?')
    const user = stmt.get(id)
    if (!user) {
      return null
    }
    return user as User
  }
}
import Database from 'better-sqlite3'
import { UserModel } from '../models/User'

export class DatabaseManager {
  private db: Database.Database
  public users: UserModel

  constructor() {
    // i've setup this path since it's the same as the one in the docker-compose file
    this.db = new Database('/root/db/database.db')
    this.users = new UserModel(this.db)
    this.initializeTables()
  }

  private initializeTables(): void {
    this.users.createTable()
  }

  getDatabase(): Database.Database {
    return this.db
  }

  close(): void {
    this.db.close()
  }
}

export const dbManager = new DatabaseManager()
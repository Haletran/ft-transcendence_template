import fastify from 'fastify'
import cors from '@fastify/cors'
import Database from 'better-sqlite3'
import { join } from 'path'

const DB_PATH = '/root/db/database.sqlite'

const db = new Database(DB_PATH)

db.exec(`
  CREATE TABLE IF NOT EXISTS users (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    username TEXT NOT NULL UNIQUE,
    email TEXT UNIQUE,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
  )
`)

const server = fastify()

server.register(cors, {
  origin: ['http://backend:8080', 'http://localhost:3000'], 
  methods: ['GET', 'POST', 'PUT', 'PATCH', 'DELETE'],
  credentials: true
})

server.decorate('db', db)

server.register((instance, opts, done) => {
  instance.get('/ping', async (request, reply) => {
    return { message: 'pong' }
  })

  instance.get('/users/:id', async (request, reply) => {
    const { id } = request.params as { id: string }
    return { id, name: 'Lorem Ipsum' }
  })

  instance.get('/auth/register', async (request, reply) => {
    const { username, password } = request.query as { username: string, password: string }
    if (username && password) {
      return { message: 'User registered successfully' }
    } else {
      reply.status(400).send({ error: 'Invalid registration data' })
    }
  })
  instance.get('/auth/login', async (request, reply) => {
    const { username, password } = request.query as { username: string, password: string }
    if (username === 'admin' && password === 'password') {
      return { token: 'fake-jwt-token' }
    } else {
      reply.status(401).send({ error: 'Invalid credentials' })
    }
  })
  instance.get('/auth/logout', async (request, reply) => {
    return { message: 'Logged out' }
  })
  instance.get('/auth/me', async (request, reply) => {
    const token = request.headers['authorization']?.split(' ')[1]
    if (token === 'fake-jwt-token') {
      return { id: 1, username: 'admin' }
    } else {
      reply.status(401).send({ error: 'Unauthorized' })
    }
  })

  done()
}, { prefix: '/api' })


server.listen({ port: 8080, host: '0.0.0.0' }, (err, address) => {
  if (err) {
    console.error(err)
    process.exit(1)
  }
  console.log(`Server listening at ${address}`)
})

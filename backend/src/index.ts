import fastify from 'fastify'
import cors from '@fastify/cors'
import { dbManager } from './database/manager'

const PORT = process.env.PORT ? parseInt(process.env.PORT) : 8080
const server = fastify()

// this is a middleware to allow CORS
// so that the frontend can call the backend else you will have CORS errors
server.register(cors, {
  origin: ['http://backend:8080', 'http://localhost:3000'], // add other URL if needed
  methods: ['GET', 'POST', 'PUT', 'PATCH', 'DELETE'],
  credentials: true
})

declare module 'fastify' {
  interface FastifyInstance {
    db: any
  }
}

server.decorate('db', dbManager)

server.addHook('onClose', async () => {
  try {
    dbManager.close()
  } catch (err) {
    console.error('Error closing database connection:', err)
  }
})

const db = dbManager.getDatabase()


server.get('/api/ping', async (request, reply) => {
    return { message: 'pong' }
})

server.register((instance, opts, done) => {
  // in this prefix you can add all the routes related to the users
  instance.get('/:id', async (request, reply) => {
    try {
      const token = request.headers['authorization']?.split(' ')[1]
      if (token !== 'fake-jwt-token') {
        throw new Error('Unauthorized')
      }
      
      const { id } = request.params as { id: string }
      const user = await instance.db.users.getUserById(id)
      
      if (!user) {
        return reply.status(404).send({ error: 'User not found' })
      }
      
      return user
    } catch (error: any) {
      reply.status(401).send({ error: error.message })
    }
  })
  done()
}, { prefix: '/api/users' })


server.register((instance, opts, done) => {
  // in this prefix you can add all the routes related to the auth
  instance.post('/register', async (request, reply) => {
    try {
      const { username, password } = request.query as { username: string, password: string }
      if (!username || !password) {
        throw new Error('Invalid registration data')
      }
      return { message: 'User registered successfully' }
    } catch (error: any) {
      reply.status(400).send({ error: error.message })
    }
  })

  instance.post('/login', async (request, reply) => {
    try {
      const { username, password } = request.query as { username: string, password: string }
      if (username !== 'admin' || password !== 'password') {
        throw new Error('Invalid credentials')
      }
      return { token: 'fake-jwt-token' }
    } catch (error: any) {
      reply.status(401).send({ error: error.message })
    }
  })

  instance.delete('/logout', async (request, reply) => {
    try {
      const token = request.headers['authorization']?.split(' ')[1]
      if (token !== 'fake-jwt-token') {
        throw new Error('Unauthorized')
      }
      return { message: 'Logged out successfully' }
    } catch (error: any) {
      reply.status(401).send({ error: error.message })
    }
  })

  instance.get('/me', async (request, reply) => {
    try {
      const token = request.headers['authorization']?.split(' ')[1]
      if (token !== 'fake-jwt-token') {
        throw new Error('Unauthorized')
      }
      return { id: 1, username: 'admin' }
    } catch (error: any) {
      reply.status(401).send({ error: error.message })
    }
  })
  done()
}, { prefix: '/api/auth' })

server.listen({ port: PORT, host: '0.0.0.0' }, (err, address) => {
  if (err) {
    console.error(err)
    process.exit(1)
  }
  console.log(`Server listening at ${address}`)
})

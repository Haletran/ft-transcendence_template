import fastify from 'fastify'
import cors from '@fastify/cors'

const PORT = process.env.PORT ? parseInt(process.env.PORT) : 8080
const server = fastify()

server.register(cors, {
  origin: ['http://backend:8080', 'http://localhost:3000'], 
  methods: ['GET', 'POST', 'PUT', 'PATCH', 'DELETE'],
  credentials: true
})

server.register((instance, opts, done) => {
  instance.get('/:id', async (request, reply) => {
    const { id } = request.params as { id: string }
    return { id, name: 'bapasqui' }
  })

  done()
}, { prefix: '/api/users' })


server.register((instance, opts, done) => {
  instance.post('/register', async (request, reply) => {
    const { username, password } = request.query as { username: string, password: string }
    if (username && password) {
      return { message: 'User registered successfully' }
    } else {
      reply.status(400).send({ error: 'Invalid registration data' })
    }
  })
  instance.post('/login', async (request, reply) => {
    const { username, password } = request.query as { username: string, password: string }
    if (username === 'admin' && password === 'password') {
      return { token: 'fake-jwt-token' }
    } else {
      reply.status(401).send({ error: 'Invalid credentials' })
    }
  })
  instance.delete('/logout', async (request, reply) => {
    return { message: 'Logged out' }
  })
  instance.get('/me', async (request, reply) => {
    const token = request.headers['authorization']?.split(' ')[1]
    if (token === 'fake-jwt-token') {
      return { id: 1, username: 'admin' }
    } else {
      reply.status(401).send({ error: 'Unauthorized' })
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

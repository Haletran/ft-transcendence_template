import fastify from 'fastify'
import cors from '@fastify/cors'

const server = fastify()

server.register(cors, {
  origin: ['http://backend:8080', 'http://localhost:3000'], 
  methods: ['GET', 'POST', 'PUT', 'PATCH', 'DELETE'],
  credentials: true
})

server.register((instance, opts, done) => {
  instance.get('/ping', async (request, reply) => {
    return { message: 'pong' }
  })

  instance.get('/users/:id', async (request, reply) => {
    const { id } = request.params as { id: string }
    return { id, name: 'Lorem Ipsum' }
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

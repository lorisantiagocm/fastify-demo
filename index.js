import fastify from 'fastify'
import fs from 'fs'

const app = fastify()

app.listen({ port: 3333}).then(() => {
  console.log('HTTP server running on port 3333');
});

app.get('/', async (request, reply) => {
  const file = fs.readFileSync('views/home.html', 'utf8')
  return reply.type('text/html').send(file)
});

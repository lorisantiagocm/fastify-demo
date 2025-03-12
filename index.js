import fastify from 'fastify'
import fastifyStatic from '@fastify/static';
import fs from 'fs'
import path from 'path'

const app = fastify()

app.register(fastifyStatic, {
  root: path.join(process.cwd(), 'public'),
  prefix: '/public/',
})

app.listen({ port: 3333}).then(() => {
  console.log('HTTP server running on port 3333');
});

app.get('/', async (request, reply) => {
  const file = fs.readFileSync('views/home.html', 'utf8')
  return reply.type('text/html').send(file)
});

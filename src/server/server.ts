import Fastify from 'fastify'
import { v4 } from 'uuid'

const fastify = Fastify({ logger: true })

fastify.get('/api/players', (req, res) => {
    const playerId = v4();
    console.log(playerId)
})

fastify.listen({ port: 8000 }).catch((err) => {
    fastify.log.error(err)
    process.exit(1)
}).then(() => {
    fastify.log.info('Le serveur écoute sur le port 8000')
})

console.log("hello")
import fastifyStatic from '@fastify/static';
import Fastify from 'fastify'
import { v4 } from 'uuid'
import { sign } from './func/crypto';
import { resolve } from 'path'

const fastify = Fastify({ logger: true })
fastify.register(fastifyStatic, {
    root: resolve("./public")
})

fastify.post('/api/players', (req, res) => {
    const playerId = v4();
    const signature = sign(playerId)
    res.send({
        id: playerId,
        signature: signature,
    })
})

fastify.listen({ port: 8000 }).catch((err) => {
    fastify.log.error(err)
    process.exit(1)
}).then(() => {
    fastify.log.info('Le serveur écoute sur le port 8000')
})

console.log("hello")
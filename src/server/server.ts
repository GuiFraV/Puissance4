import FastifyStatic from '@fastify/static';
import FastifyWebsocket from '@fastify/websocket';
import Fastify from 'fastify'
import { v4 } from 'uuid'
import { sign, verify } from './func/crypto';
import { resolve } from 'path'
import { ServerErrors } from '../types';

const fastify = Fastify({ logger: true })
fastify.register(FastifyStatic, {
    root: resolve("./public")
})
fastify.register(FastifyWebsocket)
fastify.register(async (f) => {
    f.get('/ws', { websocket: true }, (connection, req) => {
        const query = req.query as Record<string, string>
        const playerId = query.id ?? ''
        const signature = query.signature ?? ''
        const playerName = query.name || 'John Doe'
        const gameId = query.gameId

        if (!gameId) {
            connection.end()
            f.log.error('Pas de gameId')
            return;
        }

        if (!verify(playerId, signature)) {
            f.log.error("Erreur d'authentification")
            connection.socket.send(JSON.stringify({
                type: 'error', code: ServerErrors.AuthError
            }))
            return;
        }

        connection.socket.send(
            JSON.stringify({
                type: 'gameUpdate',
            })
        )

        connection.socket.on('message', (message: any) => {
            console.log(message)
        })

        connection.socket.on('close', () => {

        })

    })
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
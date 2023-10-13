import Fastify from 'fastify'

const fastify = Fastify({ logger: true })

fastify.listen({ port: 8000 }).catch((err) => {
    fastify.log.error(err)
    process.exit(1)
}).then(() => {
    fastify.log.info('Le serveur écoute sur le port 8000')
})

console.log("hello")
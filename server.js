require('dotenv/config')
const jsonServer = require('json-server')

const server = jsonServer.create()
const router = jsonServer.router('db.json')
const middlewares = jsonServer.defaults(['noCors', 'readOnly'])

const PORT = process.env.SERVER_PORT || 3333
server.use(middlewares)
server.use(router)
server.listen(PORT)

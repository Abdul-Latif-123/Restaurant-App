// import json-server
const jsonserver = require('jason-server')

// create a server application using jsonServer
const restServer = jsonserver.create()

// setup path for db.json
const router = jsonserver.router('db.jason')

// return a middleware used by json server
const middleware = jsonserver.defaults()

// setup port
const port = 3001

// use in server
restServer.use(middleware)
restServer.use(router)

// to run a port
restServer.listen(port,()=>{
    console.log('Rest server listening on port' +port);
})
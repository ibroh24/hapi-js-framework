'use strict';

const Hapi = require('@hapi/hapi');

const init = async()=>{
    const server = Hapi.server({
        port: 3000,
        host: 'localhost'
    });

    server.route({
        method: 'GET',
        path: '/',
        handler: (request, h)=>{
            return "<h2>Hello World!</h2>"
        }
    });

    await server.start();
    console.log('server started on port: ' + server.info.uri);
    console.log(server);
    
}

process.on('unhandledRejection', (err)=>{
    console.log(err);
    process.exit(1)
})
init();
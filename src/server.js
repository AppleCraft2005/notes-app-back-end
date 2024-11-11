const Hapi = require('@hapi/hapi');
const routes = require('./routes')

const init = async() => {
    const server = Hapi.server({
        port: 3800,
        host: 'localhost',
        routes: {
            cors: {
                origin: ['*'],
            }
        }
    });

    server.route(routes);

    await server.start();
    console.log(`Server telah berjalan pada ${server.info.uri} `);
};

init();
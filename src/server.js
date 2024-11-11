const Hapi = require('@hapi/hapi');
const routes = require('./routes')

const init = async() => {
    const server = Hapi.server({
        port: 3800,
        host: process.env.NODE_ENV !== 'production' ? 'localhost' : '0.0.0.0',
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
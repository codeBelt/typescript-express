import {VzWebServer} from './VzWebServer';
import {TestRouter} from './routes/TestRouter';

const PORT = process.env.PORT || 3000;
const HOST = process.env.HOST || 'localhost';
const NODE_ENV = process.env.NODE_ENV;
const isDevelopment = (NODE_ENV === 'development');

console.log(`PORT`, PORT);
console.log(`HOST`, HOST);
console.log(`NODE_ENV`, NODE_ENV);
console.log(`isDevelopment`, isDevelopment);

const server = new VzWebServer();

server.registerRouter(TestRouter);
server.startServer();

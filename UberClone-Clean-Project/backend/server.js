const buffer = require('buffer');
if (!buffer.SlowBuffer) buffer.SlowBuffer = buffer.Buffer;
if (typeof global.SlowBuffer === 'undefined') global.SlowBuffer = buffer.Buffer;

const http = require('http');
const app = require('./app');
const { initializeSocket } = require('./socket');
const port = process.env.PORT || 3000;

const server = http.createServer(app);

initializeSocket(server);

server.listen(port, '0.0.0.0', () => {
    console.log(`Server is running on port ${port}`);
});
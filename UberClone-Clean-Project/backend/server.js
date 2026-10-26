const buffer = require('buffer');
if (!buffer.SlowBuffer) buffer.SlowBuffer = buffer.Buffer;
if (typeof global.SlowBuffer === 'undefined') global.SlowBuffer = buffer.Buffer;

const http = require('http');
let app;
let initError = null;

try {
    app = require('./app');
} catch (e) {
    initError = e.stack || e.message;
    console.error('App load error:', initError);
    const express = require('express');
    app = express();
    app.get('*', (req, res) => res.status(500).json({ error: initError }));
}

const port = process.env.PORT || 3000;
const server = http.createServer(app);

try {
    const { initializeSocket } = require('./socket');
    initializeSocket(server);
} catch (e) {
    console.error('Socket error:', e);
}

server.listen(port, '0.0.0.0', () => {
    console.log(`Server is running on port ${port}`);
});
const http = require('http');
require('dotenv').config();
console.log('DEBUG: cwd=', process.cwd());
console.log('DEBUG: env PORT=', process.env.PORT);
console.log('DEBUG: env MONGO_URI=', process.env.MONGO_URI || process.env.DB_CONNECT);
const app = require('./app');
const port = process.env.PORT || 5000;
console.log('DEBUG: resolved port=', port);
const server = http.createServer(app);
server.on('error', (err) => {
  console.error('DEBUG: server error', err);
  process.exit(1);
});
server.listen(port, () => {
  console.log(`DEBUG: server listening on ${port}`);
});

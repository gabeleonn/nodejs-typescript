/* eslint-disable no-fallthrough */
import dotenv from 'dotenv';
import http from 'http';
import app from '../index';

dotenv.config();

const normalizePort = (val: string) => {
  const port = parseInt(val, 10);

  if (Number.isNaN(port)) {
    // named pipe
    return val;
  }

  if (port >= 0) {
    // port number
    return port;
  }

  return false;
};

// Get port from environment and store in Express.
const port = normalizePort(process.env.PORT || '8000');
app.set('port', port);

// Create HTTP server.
const server = http.createServer(app);

export interface HttpException extends Error {
  errno?: number;
  code?: string;
  path?: string;
  syscall?: string;
  stack?: string;
}

const onError = (error: HttpException) => {
  if (error.syscall !== 'listen') {
    throw error;
  }

  const bind = typeof port === 'string' ? `Pipe ${port}` : `Port ${port}`;

  // handle specific listen errors with friendly messages
  switch (error.code) {
    case 'EACCES':
      console.error(`${bind} requires elevated privileges`);
      process.exit(1);
    case 'EADDRINUSE':
      console.error(`${bind} is already in use`);
      process.exit(1);
    default:
      throw error;
  }
};

const onListening = () => {
  const addr = server.address();
  const bind = typeof addr === 'string' ? `pipe ${addr}` : `port ${addr?.port}`;
  console.log(`✔ Listening on ${bind}`);
};

server.listen(port);
server.on('error', onError);
server.on('listening', onListening);

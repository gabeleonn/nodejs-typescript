import express from 'express';
import routes from './routes';

const app = express();

app.use('/', routes);

app.listen(3000, err => {
  if (err) {
    throw err;
  }
  // eslint-disable-next-line no-console
  console.log('✔ Server started!');
});

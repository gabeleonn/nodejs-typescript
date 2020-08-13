import { Router } from 'express';

const routes = Router();

routes.get('/', (request, response) => {
  return response.json({ user: 'Gabriel' });
});

export default routes;

import express, { Application, Request, Response } from 'express';
import cors from 'cors';

// Boot express
const app: Application = express();

// Configuration middlewares
app.use(cors());
app.use(express.json());

// Application routing
app.use('/', (req: Request, res: Response) => {
  res.status(200).send({ data: 'Hello from Ornio AS' });
});

export default app;

import express, { Request, Response } from 'express';
import requestLogger from './middleware/logger';
import router from './routes/route';

const server = express();
server.use(requestLogger);
server.use(express.json({}));

server.use('/', router);

server.use((req: Request, res: Response): void => {
  res.status(404).json({ ok: false, msg: `${req.url} is not found` });
});

server.listen(3001, () => {
  console.log(`server is running on port 3001`);
});

import { NextFunction, Request, Response } from 'express';
import logger from '../libs/logger.js';

const requestLogger = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    await logger(
      'requests.log',
      `${req.method}\t${req.url}\t${req.headers?.origin}\t${req.headers['user-agent']}`,
    );
    next();
  } catch (error) {
    console.log(error);
  }
};

export default requestLogger;

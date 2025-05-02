import path from 'node:path';
import fsPromises from 'fs/promises';
import fs from 'fs';
import { format } from 'date-fns';
import { __dirname } from './dirname.js';

const logger = async (file_name: string, log: string): Promise<void> => {
  try {
    const date = format(new Date(), 'dd/MM/yyy\t\tHH:mm:ss');
    const content = `${date}\t\t${log}\n`;

    if (!fs.existsSync(path.join(__dirname, '..', 'logs'))) {
      fsPromises.mkdir(path.join(__dirname, '..', 'logs'));
    }

    fsPromises.appendFile(
      path.join(__dirname, '..', 'logs', file_name),
      content,
    );
  } catch (error) {
    console.log(error);
  }
};

export default logger;

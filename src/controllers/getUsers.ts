import { Request, Response } from 'express';
import Prisma from '../libs/prisma';

const getAllUsers = async (req: Request, res: Response): Promise<void> => {
  try {
    const users = await Prisma.user.findMany({ include: { posts: true } });

    res.status(200).json({ ok: true, users });
  } catch (error: any) {
    console.log(error);
    res
      .status(500)
      .json({ ok: false, msg: error?.message || 'Internal server error' });
  }
};

export default getAllUsers;

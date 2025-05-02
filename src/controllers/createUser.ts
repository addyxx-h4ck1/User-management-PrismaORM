import { Request, Response } from 'express';
import Prisma from '../libs/prisma';

const createNewUser = async (req: Request, res: Response): Promise<any> => {
  const { email, name } = req.body;

  if (!email)
    return res
      .status(422)
      .json({ ok: false, msg: '/Email/ field not provided' });

  if (!name)
    return res
      .status(422)
      .json({ ok: false, msg: '/Name/ field not provided' });

  try {
    const existUser = await Prisma.user.findUnique({
      where: { email: email },
    });

    if (existUser)
      return res
        .status(409)
        .json({ ok: false, msg: `${email} is already registered` });

    const new_user = await Prisma.user.create({
      data: {
        name: name.trim(),
        email: email.trim(),
      },
    });

    res.status(201).json({ ok: true, msg: 'User created' });
  } catch (error: any) {
    console.log(error);
    res
      .status(500)
      .json({ ok: false, msg: error?.message || 'Internal server error' });
  }
};

export default createNewUser;

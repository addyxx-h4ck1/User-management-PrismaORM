import { Request, Response } from 'express';
import Prisma from '../libs/prisma';

const handleCreateNewPost = async (
  req: Request,
  res: Response,
): Promise<any> => {
  const { post } = req.body;
  const { id } = req.params;

  if (!id) return res.status(400).json({ ok: false, msg: 'BAD_REQUEST' });

  if (!post)
    return res.status(422).json({ ok: false, msg: 'Provide post content' });

  try {
    const user = await Prisma.user.findUnique({ where: { id: Number(id) } });

    if (!user)
      return res
        .status(404)
        .json({ ok: false, msg: `user /${id}/ is not found` });

    const new_post = await Prisma.post.create({
      data: { content: post, userId: Number(id) },
    });

    res.status(201).json({ ok: true, msg: 'Post created' });
  } catch (error: any) {
    console.log(error);
    res
      .status(500)
      .json({ ok: false, msg: error?.message || 'Internal server error' });
  }
};

export default handleCreateNewPost;

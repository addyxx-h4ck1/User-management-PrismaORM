import { Router } from 'express';
import createNewUser from '../controllers/createUser.js';
import getAllUsers from '../controllers/getUsers.js';
import handleCreateNewPost from '../controllers/createPost.js';

const router = Router();

router.post('/create', createNewUser);
router.get('/users', getAllUsers);
router.post('/new-post/:id', handleCreateNewPost);

export default router;

import express from 'express';
import { IRouter } from 'express';

import { UserController } from "../components/user/user.controller";

export const router: IRouter = express.Router();

router.post('/login', new UserController().login);
router.post('/user', new UserController().createUser);
router.get('/user', new UserController().findAllUsers);
router.delete('/user/:id', new UserController().deleteUser);
router.put('/user/:id', new UserController().updateUser);
router.get('/user/:id', new UserController().findUser);
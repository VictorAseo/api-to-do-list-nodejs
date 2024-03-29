import express from 'express';
import { IRouter } from 'express';

import { UserController } from "../components/user/user.controller";
import { ActivityController } from '../components/activity/activity.controller';
import { Auth } from '../middleware/auth';

export const router: IRouter = express.Router();

router.post('/login', new UserController().login);
router.post('/user', new UserController().createUser);
router.get('/user', Auth, new UserController().findAllUsers);
router.get('/user/:id', Auth, new UserController().findUser);
router.put('/user/:id', Auth, new UserController().updateUser);
router.delete('/user/:id', Auth, new UserController().deleteUser);

router.post('/activity', Auth, new ActivityController().createActivity);
router.get('/activity', Auth, new ActivityController().findAllActivities);
router.get('/activity/:id', Auth, new ActivityController().findActivity);
router.put('/activity/:id', Auth, new ActivityController().updateActivity);
router.delete('/activity/:id', Auth, new ActivityController().deleteActivity);

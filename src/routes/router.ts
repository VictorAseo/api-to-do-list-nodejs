import express from 'express';
import { IRouter } from 'express';

import { UserController } from "../components/user/user.controller";
import { ActivityController } from '../components/activity/activity.controller';

export const router: IRouter = express.Router();

router.post('/login', new UserController().login);
router.post('/user', new UserController().createUser);
router.get('/user', new UserController().findAllUsers);
router.get('/user/:id', new UserController().findUser);
router.put('/user/:id', new UserController().updateUser);
router.delete('/user/:id', new UserController().deleteUser);

router.post('/activity', new ActivityController().createActivity);
router.get('/activity', new ActivityController().findAllActivities);
router.get('/activity/:id', new ActivityController().findActivity);
router.put('/activity/:id', new ActivityController().updateActivity);
router.delete('/activity/:id', new ActivityController().deleteActivity);

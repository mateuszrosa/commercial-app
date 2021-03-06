import express from 'express';
import { user } from '../controllers';

export const router = express.Router();


//LOGGING
router.get('/user/login', user.login);
router.post('/user/register', user.register);
router.put('/user/update', user.editUser);
router.put('/user/password', user.editUserPassword);
router.put('/user/order', user.order);
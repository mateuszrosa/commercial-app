
import express from 'express';
import { user, admin } from '../controllers';

export const router = express.Router();


//LOGGING
router.get('/user/login', user.login);
router.post('/user/register', user.register);
router.get('/bikes', admin.fetchBikes);
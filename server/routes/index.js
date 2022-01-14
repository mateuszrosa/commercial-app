
import express from 'express';
import { user } from '../controllers';

export const router = express.Router();


//LOGGING
router.get('/user/login', user.login);
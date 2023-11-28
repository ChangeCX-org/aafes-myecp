import express from 'express';
import { controllerWrapper } from '../middlewares';
import { login } from '../controllers/auth.controller';

const router = express.Router();

router.post('/login', login);

export default router;

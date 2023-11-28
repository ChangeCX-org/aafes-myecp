import express from 'express';
import { userInfo, updateUserInfo, register } from '../controllers/registration.controller';
import { controllerWrapper } from '../middlewares';

const router = express.Router();

router.get('/userInfo', userInfo);
router.post('/:userId/:password/update', updateUserInfo);
router.post('/register', controllerWrapper(register));

export default router;

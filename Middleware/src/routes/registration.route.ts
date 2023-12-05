import express from 'express';
import { userInfo, updateUserInfo, register } from '../controllers/registration.controller';
import { controllerWrapper } from '../middlewares';
import { auth } from '../middlewares/auth';

const router = express.Router();

router.get('/userInfo', auth, userInfo);
router.post('/:userId/:password/update', auth, updateUserInfo);
router.post('/register', auth, controllerWrapper(register));

export default router;

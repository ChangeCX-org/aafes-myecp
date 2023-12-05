import express from 'express';
import { controllerWrapper } from '../middlewares';
import { getProfile, updateProfile, updatePhoneNumber, updateAddress } from '../controllers/user.controller';
import { auth } from '../middlewares/auth';

const router = express.Router();

router.get('/', auth, controllerWrapper(getProfile));
router.post('/profile', auth, controllerWrapper(updateProfile));
router.post('/phoneNumber', auth, controllerWrapper(updatePhoneNumber));
router.post('/address', auth, controllerWrapper(updateAddress));

export default router;

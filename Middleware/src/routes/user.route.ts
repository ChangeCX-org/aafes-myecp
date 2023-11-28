import express from 'express';
import { controllerWrapper } from '../middlewares';
import { getProfile, updateProfile, updatePhoneNumber, updateAddress } from '../controllers/user.controller';

const router = express.Router();

router.get('/', controllerWrapper(getProfile));
router.post('/profile', controllerWrapper(updateProfile));
router.post('/phoneNumber', controllerWrapper(updatePhoneNumber));
router.post('/address', controllerWrapper(updateAddress));

export default router;

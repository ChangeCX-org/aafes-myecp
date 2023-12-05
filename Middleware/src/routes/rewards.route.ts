
import express from 'express';
import { getAvailableRewards, postRewards, patchRewards, deleteRewards } from '../controllers/rewards.controller';
import { auth } from '../middlewares/auth';

const router = express.Router();

router.get('/', auth, getAvailableRewards)

router.post('/', auth, postRewards);

router.patch("/:id", auth, patchRewards);

router.delete("/:id", auth, deleteRewards);

export default router;
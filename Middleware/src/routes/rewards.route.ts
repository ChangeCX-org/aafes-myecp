
import express from 'express';
import { getAvailableRewards, postRewards, patchRewards, deleteRewards } from '../controllers/rewards.controller';
import { auth } from '../middlewares/auth';

const router = express.Router();

router.get('/', getAvailableRewards)

router.post('/', postRewards);

router.patch("/:id", patchRewards);

router.delete("/:id", deleteRewards);

export default router;
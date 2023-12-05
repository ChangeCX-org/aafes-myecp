
import express from 'express';
import { getAvailableOffers } from '../controllers/offers.controller';
import { auth } from '../middlewares/auth';

const router = express.Router();

router.get('/', auth, getAvailableOffers)

export default router;

import express from 'express';
import { getAvailableOffers } from '../controllers/offers.controller';
import { auth } from '../middlewares/auth';

const router = express.Router();

router.get('/', getAvailableOffers)

export default router;
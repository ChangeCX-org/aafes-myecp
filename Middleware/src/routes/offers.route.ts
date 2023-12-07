
import express from 'express';
import { getAvailableOffers, getOfferDetails } from '../controllers/offers.controller';
import { auth } from '../middlewares/auth';

const router = express.Router();

router.get('/', auth, getAvailableOffers)

router.get('/:id', auth, getOfferDetails);

export default router;
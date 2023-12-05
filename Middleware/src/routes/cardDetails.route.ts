import express from 'express';
import {getCards, getCardDetails, createCard, deleteCard} from '../controllers/card.controller';
import { auth } from '../middlewares/auth';

const router = express.Router();

router.get('/', auth, getCards);
router.get('/:id', auth, getCardDetails);
router.post('/', auth, createCard);
router.delete('/:id', auth, deleteCard);

export default router;
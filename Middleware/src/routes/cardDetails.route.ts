import express from 'express';
import {getCards, getCardDetails, createCard, deleteCard} from '../controllers/card.controller';
import { auth } from '../middlewares/auth';

const router = express.Router();

router.get('/', getCards);
router.get('/:id', getCardDetails);
router.post('/', createCard);
router.delete('/:id', deleteCard);

export default router;
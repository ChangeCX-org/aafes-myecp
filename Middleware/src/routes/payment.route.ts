import express from 'express';
import { getAllPayments, getPaymentById, createNewPayment } from "../controllers/payment.controller";
import { auth } from '../middlewares/auth';

const router = express.Router();

router.get('/all-payments', auth, getAllPayments);
router.get('/payments/:Id', auth, getPaymentById);
router.post('/new-payments', auth, createNewPayment);

export default router;

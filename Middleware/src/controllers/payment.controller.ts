import express, { Request, Response } from 'express';
import Payment from '../models/payment.model';

const payments: Payment[] = [{ "Id": 1, "amount": 100.0, "description": 'Payment 1' }];

// Get all payments
export const getAllPayments = (req: Request, res: Response) => {
    // payments.forEach(payment=>payment)
    res.status(200).json(payments);
};

// Get a specific payment by ID
export const getPaymentById = (req: Request, res: Response) => {
    const paymentId = parseInt(req.params.Id);
    console.log("id",paymentId)
    const payment = payments.find((p) => p.Id === paymentId);

    if (payment) {
        res.status(200).json(payment);
    } else {
        res.status(404).json({ error: 'Payment not found' });
    }
};


// Route to create a new payment
export const createNewPayment = (req: Request, res: Response) => {
    const { id, amount, description } = req.body;

    if (!id || !amount || !description) {
        return res.status(400).json({ message: `Id , Amount and description is required!` })
    }


    const newPayment = new Payment(parseInt(id), parseFloat(amount), description);

    payments.push(newPayment);
    return res.status(201).json(newPayment);
}
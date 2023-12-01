import { Request, Response } from 'express';
import * as paymentController from '../controllers/payment.controller';
import Payment from '../models/payment.model';

// Mock Express request and response objects
const mockRequest = (data?: any) => ({ ...data } as Request);
const mockResponse = () => {
  const res: any = {};
  res.status = jest.fn().mockReturnValue(res);
  res.json = jest.fn().mockReturnValue(res);
  return res;
};

describe('Payment Controller Tests', () => {
  // Mock data for testing
  const testData: Payment = { Id: 1, amount: 100.0, description: 'Payment 1' };

  it('should get all payments', () => {
    const req = mockRequest();
    const res = mockResponse();

    paymentController.getAllPayments(req, res);

    expect(res.status).toHaveBeenCalledWith(200);
    expect(res.json).toHaveBeenCalledWith([{ Id: 1, amount: 100.0, description: 'Payment 1' }]);
  });

  it('should get a specific payment by ID', () => {
    const req = mockRequest({ params: { Id: '1' } });
    const res = mockResponse();

    paymentController.getPaymentById(req, res);

    expect(res.status).toHaveBeenCalledWith(200);
    expect(res.json).toHaveBeenCalledWith(testData);
  });

  it('should return 404 for a non-existing payment ID', () => {
    const req = mockRequest({ params: { Id: '999' } });
    const res = mockResponse();

    paymentController.getPaymentById(req, res);

    expect(res.status).toHaveBeenCalledWith(404);
    expect(res.json).toHaveBeenCalledWith({ error: 'Payment not found' });
  });

  it('should create a new payment', () => {
    const req = { body: { id: 2, amount: 150.0, description: 'Payment 2' } } as Request;
    const res = mockResponse();

    paymentController.createNewPayment(req, res);

    expect(res.status).toHaveBeenCalledWith(201);
    expect(res.json).toHaveBeenCalledWith({ Id: 2, amount: 150.0, description: 'Payment 2' });
  });

  it('should return 400 for missing properties when creating a new payment', () => {
    const req = { body: {} } as Request;
    const res = mockResponse();

    paymentController.createNewPayment(req, res);

    expect(res.status).toHaveBeenCalledWith(400);
    expect(res.json).toHaveBeenCalledWith({ message:  "Id , Amount and description is required!" });
  });
});

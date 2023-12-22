import express from 'express';
import { getAllPayments, getPaymentById, createNewPayment } from "../controllers/payment.controller";
import { auth } from '../middlewares/auth';


const router = express.Router();

/**
 * @openapi
 * components:
 *   securitySchemes:
 *     bearerAuth:
 *       type: http
 *       scheme: bearer
 *       bearerFormat: JWT
 *       in: header
 *       name: Authorization
 *       description: Bearer Token
 */

/** 
 * @openapi
 * tags:
 *   name: Payments
 *   description: API endpoints for managing payments
 */

/**
 * @openapi
 *  '/v1/payments/all-payments':
 *     get:
 *       summary: Get all payments
 *       tags: [Payments]
 *       security:
 *         - bearerAuth: []
 *       responses:
 *         '200':
 *           description: A list of payments
 *           content:
 *             application/json:
 *               example:
 *                 - Id: 1
 *                   amount: 100.0
 *                   description: Payment 1
 */
router.get('/all-payments', auth, getAllPayments);

/**
 * @openapi
 *   '/v1/payments/{Id}':
 *     get:
 *       summary: Get a specific payment by ID
 *       tags: [Payments]
 *       parameters:
 *         - in: path
 *           name: Id
 *           required: true
 *           description: ID of the payment
 *           schema:
 *             type: integer
 *       security:
 *         - bearerAuth: []
 *       responses:
 *         '200':
 *           description: The payment with the specified ID
 *           content:
 *             application/json:
 *               example:
 *                 Id: 1
 *                 amount: 100.0
 *                 description: Payment 1
 *         '404':
 *           description: Payment not found
 */
router.get('/:Id', auth, getPaymentById);

/**
 * @openapi
 *   '/v1/payments/new-payments':
 *     post:
 *       summary: Create a new payment
 *       tags: [Payments]
 *       security:
 *         - bearerAuth: []
 *       requestBody:
 *         required: true
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 id:
 *                   type: integer
 *                 amount:
 *                   type: number
 *                 description:
 *                   type: string
 *       responses:
 *         '201':
 *           description: The newly created payment
 *           content:
 *             application/json:
 *               example:
 *                 Id: 2
 *                 amount: 150.0
 *                 description: Payment 2
 *         '400':
 *           description: Id, Amount, and Description are required
 */
router.post('/new-payments', auth, createNewPayment);

export default router;

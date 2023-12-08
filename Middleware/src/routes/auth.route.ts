import express from 'express';
import { controllerWrapper } from '../middlewares';
import { login } from '../controllers/auth.controller';

const router = express.Router();

/**
 * @openapi
 * tags:
 *   name: Authentication
 *   description: API endpoints for user authentication
 */


/**
 * @openapi
 *   '/v1/auth/login':
 *     post:
 *       summary: User login
 *       tags: [Authentication]
 *       requestBody:
 *         required: true
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 userId:
 *                   type: string
 *                 email:
 *                   type: string
 *                 password:
 *                   type: string
 *                 Role:
 *                   type: string
 *       responses:
 *         '200':
 *           description: Login successful
 *           content:
 *             application/json:
 *               example:
 *                 status: 200
 *                 success: true
 *                 message: login success
 *                 token: <generated_token>
 *         '404':
 *           description: User not found
 *           content:
 *             application/json:
 *               example:
 *                 status: 404
 *                 success: false
 *                 message: User not found
 *         '400':
 *           description: Bad request
 *           content:
 *             application/json:
 *               example:
 *                 status: 400
 *                 message: <error_message>
 */
router.post('/login', login);

export default router;

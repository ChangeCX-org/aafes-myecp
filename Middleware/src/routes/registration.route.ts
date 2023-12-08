import express from 'express';
import { userInfo, updateUserInfo, register } from '../controllers/registration.controller';
import { controllerWrapper } from '../middlewares';
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
 *   name: Register
 *   description: API endpoints for managing registeration
 */

/**
 * @openapi
 *  '/v1/register/userInfo':
 *     get:
 *       summary: Get list of user info
 *       tags: [Register]
 *       security:
 *         - bearerAuth: []
 *       responses:
 *         '200':
 *           description: List of user information received.
 */
router.get('/userInfo', auth, controllerWrapper(userInfo));

/**
 * @openapi
 *  '/v1/register/:userId/:password/update':
 *     post:
 *       summary: Update list of Users
 *       tags: [Register]
 *       security:
 *         - bearerAuth: []
 *       responses:
 *         '200':
 *           description: Updated list of user information
 */
router.post('/:userId/:password/update', auth, controllerWrapper(updateUserInfo));

/**
 * @openapi
 *  '/v1/register/register':
 *     post:
 *       summary: Register an user
 *       tags: [Register]
 *       security:
 *         - bearerAuth: []
 *       responses:
 *         '200':
 *           description: User registered.
 */
router.post('/register', controllerWrapper(register));

export default router;

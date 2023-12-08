import express from 'express';
import { controllerWrapper } from '../middlewares';
import { getProfile, updateProfile, updatePhoneNumber, updateAddress } from '../controllers/user.controller';
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
 *   name: Users
 *   description: API endpoints for managing users
 */

/**
 * @openapi
 *  '/v1/user/':
 *     get:
 *       summary: Get profile
 *       tags: [Users]
 *       security:
 *         - bearerAuth: []
 *       responses:
 *         '200':
 *           description: Successfully received user profile.
 */
router.get('/', auth, controllerWrapper(getProfile));

/**
 * @openapi
 *  '/v1/user/profile':
 *     post:
 *       summary: Update profile
 *       tags: [Users]
 *       security:
 *         - bearerAuth: []
 *       responses:
 *         '200':
 *           description: Successfully updated user profile.
 */
router.post('/profile', auth, controllerWrapper(updateProfile));

/**
 * @openapi
 *  '/v1/user/phoneNumber':
 *     post:
 *       summary: Update phone number
 *       tags: [Users]
 *       security:
 *         - bearerAuth: []
 *       responses:
 *         '200':
 *           description: Successfully updated an user phone number
 */
router.post('/phoneNumber', auth, controllerWrapper(updatePhoneNumber));

/**
 * @openapi
 *  '/v1/user/address':
 *     post:
 *       summary: Update user address
 *       tags: [Users]
 *       security:
 *         - bearerAuth: []
 *       responses:
 *         '200':
 *           description: Successfully updated an user address
 */
router.post('/address', auth, controllerWrapper(updateAddress));

export default router;

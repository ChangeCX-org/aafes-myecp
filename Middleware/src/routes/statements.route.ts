
import express from 'express';
import { getStatements, getStatementDetails } from '../controllers/statement.controller';
import { auth } from '../middlewares/auth';
import { controllerWrapper } from '../middlewares';

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
 *   name: Statements
 *   description: API endpoints for managing statements
 */

/**
 * @openapi
 *  '/v1/statement/':
 *     get:
 *       summary: Get statements
 *       tags: [Statements]
 *       security:
 *         - bearerAuth: []
 *       responses:
 *         '200':
 *           description: Successfully received the statements.
 *         '400':
 *           description: Not received the statements.
 */
router.get('/', auth, controllerWrapper(getStatements));

/**
 * @openapi
 *  '/v1/statement/:id':
 *     get:
 *       summary: Get statement details
 *       tags: [Statements]
 *       security:
 *         - bearerAuth: []
 *       responses:
 *         '200':
 *           description: Successfully received the statement details.
 *         '400':
 *           description: Not received the statement details.
 */
router.get('/:id', auth, controllerWrapper(getStatementDetails));

export default router;
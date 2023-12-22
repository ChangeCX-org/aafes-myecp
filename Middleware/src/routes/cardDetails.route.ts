import express from 'express';
import {getCards, getCardDetails, createCard, deleteCard} from '../controllers/card.controller';
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
 *   name: Cards
 *   description: API operations related to cards
 */

/**
 * @openapi
 * '/v1/cards':
 *   get:
 *     summary: Retrieve all cards
 *     tags: [Cards]
 *     security:
 *      - bearerAuth: []
 *     responses:
 *       '200':
 *         description: Successful response
 */

router.get('/', auth, getCards);

/**
 * @openapi
 * '/v1/cards/{id}':
 *   get:
 *     summary: Get details of a specific card
 *     tags: [Cards]
 *     parameters:
 *       - in: path
 *         name: id
 *         description: ID of the card
 *         required: true
 *         schema:
 *           type: integer
 *     security:
 *       - bearerAuth: []
 *     responses:
 *       '200':
 *         description: Successful response
 *       '400':
 *         description: Bad Request
 */
router.get('/:id', auth, getCardDetails);

/**
 * @openapi
 * '/v1/cards/new':
 *   post:
 *     summary: Create a new card
 *     tags: [Cards]
 *     security:
 *      - bearerAuth: []
 *     responses:
 *       '201':
 *         description: Created
 *         content:
 *           application/json:
 *             example: { "success": true, "status": 201 }
 */
router.post('/new', auth, createCard);

/**
 * @openapi
 * '/v1/cards/delete/{id}':
 *   delete:
 *     summary: Delete a specific card
 *     tags: [Cards]
 *     parameters:
 *       - in: path
 *         name: id
 *         description: ID of the card
 *         required: true
 *         schema:
 *           type: integer
 *     security:
 *       - bearerAuth: []
 *     responses:
 *       '200':
 *         description: Successful response
 */
router.delete('/delete/:id', auth, deleteCard);

export default router;
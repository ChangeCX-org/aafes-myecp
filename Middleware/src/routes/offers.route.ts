import express from 'express';
import { getAvailableOffers, getOfferDetails } from '../controllers/offers.controller';
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
 *   name: Offers
 *   description: API endpoints related to offers
 */

/**
 * @openapi
 * /v1/offers:
 *   get:
 *     summary: Get available offers
 *     tags: [Offers]
 *     security:
 *       - bearerAuth: []
 *     responses:
 *       '200':
 *         description: Successful response with a list of available offers.
 */
router.get('/', auth, getAvailableOffers);

/**
 * @openapi
 * /v1/offers/{id}:
 *   get:
 *     summary: Get offer details
 *     tags: [Offers]
 *     parameters:
 *       - in: path
 *         name: id
 *         description: The ID of the offer to retrieve.
 *         required: true
 *         schema:
 *           type: integer
 *     security:
 *       - bearerAuth: []
 *     responses:
 *       '200':
 *         description: Successful response with details of the specified offer.
 *       '401':
 *         description: Offer not found.
 */
router.get('/:id', auth, getOfferDetails);

export default router;

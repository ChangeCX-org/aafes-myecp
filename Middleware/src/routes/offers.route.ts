import express from 'express';
import { getAvailableOffers, getOfferDetails } from '../controllers/offers.controller';
import { auth } from '../middlewares/auth';

const router = express.Router();

/**
 * @swagger
 * tags:
 *   name: Offers
 *   description: API endpoints related to offers
 */

/**
 * @swagger
 * /offers:
 *   get:
 *     summary: Get available offers
 *     tags: [Offers]
 *     security:
 *       - BearerAuth: []
 *     responses:
 *       '200':
 *         description: Successful response with a list of available offers.
 */
router.get('/', auth, getAvailableOffers);

/**
 * @swagger
 * /offers/{id}:
 *   get:
 *     summary: Get offer details
 *     tags: [Offers]
 *     security:
 *       - BearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         description: The ID of the offer to retrieve.
 *         required: true
 *         schema:
 *           type: integer
 *     responses:
 *       '200':
 *         description: Successful response with details of the specified offer.
 *       '401':
 *         description: Offer not found.
 */
router.get('/:id', auth, getOfferDetails);

export default router;

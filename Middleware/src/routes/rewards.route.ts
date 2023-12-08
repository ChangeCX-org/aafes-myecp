
import express from 'express';
import { getAvailableRewards, postRewards, patchRewards, deleteRewards } from '../controllers/rewards.controller';
import { auth } from '../middlewares/auth';

const router = express.Router();

/**
 * @openapi
 * components: 
 *   securitySchemes:
 *     bearerAuth:
 *         type: http
 *         scheme: bearer
 *         bearerFormat: JWT
 *         in: header
 *         name: Authorization
 *         description: Bearer Token
 *   
 */

/**
 * @openapi
 * tags:
 *   name: Offers
 *   description: API endpoints related to offers
 */

/**
 * @openapi
 * /v1/rewards/card:
 *   get:
 *     summary: Get available rewards
 *     tags: [rewards]
 *     security:
 *       - BearerAuth: []
 *     responses:
 *       '200':
 *         description: Successful response with a list of available rewards.
 *       '401':
 *         description: Rewards not found
 */

router.get('/card', auth, getAvailableRewards)

/**
 * @openapi
 * /v1/rewards:
 *   post:
 *     summary: Get available offers
 *     tags: [rewards]
 *     security:
 *       - BearerAuth: []
 *     responses:
 *       '200':
 *         description: Successful response with a list of available rewards.
 */

router.post('/', auth, postRewards);

/**
 * @openapi
 * /v1/rewards/{id}:
 *   patch:
 *     summary: Get offer details
 *     tags: [rewards]
 *     security:
 *       - BearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         description: The ID of the reward to retrieve.
 *         required: true
 *         schema:
 *           type: integer
 *     responses:
 *       '200':
 *         description: Successful response with details of the specified rewards.
 *       '401':
 *         description: Rewards not found.
 */

router.patch("/:id", auth, patchRewards);

/**
 * @openapi
 * /v1/rewards/{id}:
 *   delete:
 *     summary: Get offer details
 *     tags: [rewards]
 *     security:
 *       - BearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         description: The ID of the reward to retrieve.
 *         required: true
 *         schema:
 *           type: integer
 *     responses:
 *       '200':
 *         description: Successfully deleted the reward.
 *       '401':
 *         description: Rewards deletion failed.
 */

router.delete("/:id", auth, deleteRewards);

export default router;
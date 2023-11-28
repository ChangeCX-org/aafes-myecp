
import express from 'express';
import { getStatements } from '../controllers/statement.controller';
import { auth } from '../middlewares/auth';

const router = express.Router();

router.get('/', getStatements)

export default router;
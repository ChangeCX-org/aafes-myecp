
import express from 'express';
import { getStatements } from '../controllers/statement.controller';
import { auth } from '../middlewares/auth';

const router = express.Router();

router.get('/', auth, getStatements)

export default router;
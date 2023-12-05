
import express from 'express';
import { getStatements, getStatementDetails } from '../controllers/statement.controller';
import { auth } from '../middlewares/auth';

const router = express.Router();

router.get('/card/:id/statements', auth, getStatements)

router.get('/card/:id/statements/:id', auth, getStatementDetails)

export default router;
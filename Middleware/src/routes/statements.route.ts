
import express from 'express';
import { getStatements, getStatementDetails } from '../controllers/statement.controller';
import { auth } from '../middlewares/auth';

const router = express.Router();

router.get('/', auth, getStatements);

router.get('/:id', auth, getStatementDetails);

export default router;
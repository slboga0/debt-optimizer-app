
import express from 'express';
import { getDebts } from '../controllers/debtController.js';

const router = express.Router();

router.get('/', getDebts);

export default router;

import { Router } from 'express'
import { createAccount } from './handlers';

const router = Router();

// autenticacion y registro

router.post('/auth/register', createAccount )

export default router
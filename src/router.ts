import { Router } from 'express'

const router = Router();

// autenticacion y registro

router.get('/auth/register',( req, res )=>{
    console.log('desde register')
})

export default router
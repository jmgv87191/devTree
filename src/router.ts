import { Router } from 'express'

const router = Router();

// autenticacion y registro

router.post('/auth/register',( req, res )=>{

    console.log(req.body)

    res.json({
        msg:"asd"
    })

})

export default router
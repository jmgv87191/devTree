import { Router } from 'express'
import User from './models/User';

const router = Router();

// autenticacion y registro

router.post('/auth/register',async( req, res )=>{

    console.log(req.body)

    await User.create(req.body)



    res.json({
        msg:"asd"
    })

})

export default router
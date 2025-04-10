import { Request, Response } from "express"
import User from "../models/User"



export const createAccount =  async( req: Request, res: Response )=>{

    const { email} = req.body

    const userExists = await User.findOne( {email} )
    console.log(userExists)
    return

    await User.create(req.body)

    res.json({
        msg:"asd"
    })

}
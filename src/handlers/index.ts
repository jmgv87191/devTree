import { Request, Response } from "express"
import { validationResult } from 'express-validator'
import slug from 'slug'
import User from "../models/User.js"
import { checkPassword, hashPassword } from "../utils/auth.js"




export const createAccount =  async( req: Request, res: Response )=>{




    const { email, password } = req.body

    const userExists = await User.findOne( {email} )

    if (userExists) {

        const error = new Error('un usuario con ese email ya esta registrado')
        return res.status(409).json({ error: error.message})

    }

    const handle = slug(req.body.handle, '')
    const handleExists = await User.findOne( {handle} )

    if (handleExists) {

        const error = new Error('Nombre de usuario no disponible')
        return res.status(409).json({ error: error.message})

    }


    const user = new User(req.body)
    user.password = await hashPassword(password)
    user.handle = handle

    await user.save()
    res.status(201).send('registro creado correctamente')



}

export const login = async( req:Request, res:Response )=>{

    let errors = validationResult(req)
    if (!errors.isEmpty) {
        return res.status(400).json({errors: errors.array()})
    }

    const { email, password } = req.body

    const user = await User.findOne( {email} )

    if (!user) {

        const error = new Error('El usuario no existe')
        return res.status(404).json({ error: error.message})

    }

    const isPasswordCorrect = await checkPassword( password, user.password )

    if (!isPasswordCorrect) {

        const error = new Error('password Incorrecto')
        return res.status(401).json({ error: error.message})

    }

    res.send('Aute')

}
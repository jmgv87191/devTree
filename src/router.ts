import { Router } from 'express'
import { body } from 'express-validator'
import { createAccount, login } from './handlers/index.js';
import { handleInputErrors } from './middleware/validation.js';

const router = Router();

// autenticacion y registro

router.post('/auth/register', 
    body('handle')
        .notEmpty()
        .withMessage('El handle no puede ir vacio'),
    body('name')
        .notEmpty()
        .withMessage('El nombre no puede ir vacio'),
    body('email')
        .isEmail()
        .withMessage('Email no valido'),
    body('password')
        .isLength({min: 8})
        .withMessage('El password es muy corto'),
    handleInputErrors,
    createAccount

)

    router.post('/auth/login',
        
        body('email')
            .isEmail()
            .withMessage('Email no valido'),
        body('password')
            .notEmpty()
            .withMessage('el password es obligatorio'),
            handleInputErrors,
        login)

export default router
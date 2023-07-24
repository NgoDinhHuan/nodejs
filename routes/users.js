import  Express  from "express";
import {body,validationResult} from 'express-validator'
import {
    userController,
    studentController,
} from '../controllers/index.js'

const router = Express.Router()

router.get('/:id',userController.getDetailUser)

router.post('/login',
    body('email').isEmail(),
    body('password').isLength({min : 5}),
        userController.login // goi user cua controller
    )

router.post('/register',userController.register)

export default router
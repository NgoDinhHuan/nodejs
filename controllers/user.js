import {
    body,
    param,
    validationResult,
} from 'express-validator'
import{
    studentRepository,
    userRepository,
} from '../repositories/index.js'
import{EventEmitter} from 'node:events'

const myEvent = new EventEmitter()
// listen
myEvent.on('event.register.user',(params)=>{
    console.log(`they talked about : ${JSON.stringfy(params)}`)
})

const login = (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ 
            errors: errors.array() 
        });
    }
    const { email, password } = req.body
    // call repository
     userRepository.login({email,password})
    res.status(200).json({
        message:'login user successfully'
       // data:"detail user here"
    });
}

const register = (req,res)=>{
    // destructuring
    const{
        name,
        email,
        password,
        phoneNumber,
        address
    } = req.body
    userRepository.register({name, email, password, phoneNumber, address})
    //event Emitter
    myEvent.emit('event.register.user',{email,phoneNumber})
    res.status(201).json({
        message:'register user successfully'
    })
}

const getDetailUser = async(req,res)=>{

}
export default{
    login,
    register,
    getDetailUser
}
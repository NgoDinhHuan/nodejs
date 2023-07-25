import {print, OutputType} from '../helpers/print.js'
import {User} from '../models/index.js'
import Exception from '../exceptions/Exception.js'
import bcrypt from 'bcrypt'



const login = async ({email,password})=>{
    print('login user in user repository', OutputType.INFORMATION)
}
const register = async({
    name,
    email,
    password,
    phoneNumber,
    address
})=> {
    try{
        const existingUser = User.findOne({email}).exec()
        if(!existingUser){ // check notnull
            throw new Exception(Exception.USER_EXIST)

        }
        // encrypt password , use bcrypt

        // use for login 
        //  const isMatched = await bcrypt.compare(password, existingUser.password)
        //  if(isMatched){
            
        //  }
        const hashedPassword = await bcrypt.hash(password,parseInt(process.env.SALT_ROUND))
        // insert to db
        const newUser = await User.create({
            name, 
            email,
            password:hashedPassword,
            phoneNumber,
            adrress
        })
        return newUser

    }catch(exception){
        // check model validation here
        throw new Exception (Exception.CANNOT_REGISTER_USER)
    //validation already done
   // print('register user with: name:' + name + 'email:' + email + ' password:' + password + 'phone:' + phoneNumber + 'address:' + address, OutputType.INFORMATION )
}
}
export default{
    login,
    register,
}

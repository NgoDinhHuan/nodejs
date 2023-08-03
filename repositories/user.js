import {print, OutputType} from '../helpers/print.js'
import {User} from '../models/index.js'
import Exception from '../exceptions/Exception.js'
import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'

const login = async ({email,password})=>{
    let existingUser = await User.findOne({email}).exec()
    if(existingUser){
        // not encrypt password
        let isMatch = await bcrypt.compare(password, existingUser.password)
        if  (!!isMatch){
            // create java web token
            let token = jwt.sign({
                    data: existingUser
                },
                process.env.JWT_SECRET,{
                     expiresIn:'30 days'// 30 ngay
                    // expiresIn:'60'
                }
            ) 
            // clone doi tương va cho them thuoc tính
            return{
                ... existingUser.toObject(), // lay doi tuong dang rough
                password:"not show",
                token: token
            }
        }else{
            throw new Exception(Exception.WRONG_EMAIL_AND_PASSWORD)
        }
    }else{
        throw new Exception(Exception.WRONG_EMAIL_AND_PASSWORD)
    }
}
const register = async({
    name,
    email,
    password,
    phoneNumber,
    address
})=> {
    debugger;
    const existingUser = await User.findOne({ email }).exec();
    if (!!existingUser) {
      throw new Exception(Exception.USER_EXIST);
    }
        
        const hashedPassword = await bcrypt.hash(password, parseInt(process.env.SALT_ROUND))
        // insert to db
        const newUser = await User.create({
            name, 
            email,
            password: hashedPassword,
            phoneNumber,
            address
        });
        return {
            ...newUser._doc,
            password:'not show '
        };

   

}
export default{
    login,
    register,
}

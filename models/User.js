import mongoose, { Schema,ObjectId } from "mongoose";
import isEmail from "validator/lib/isEmail.js";
export default mongoose.model('User',
    new Schema({
        id:{type: ObjectId},
        name:{
            type:String,
            required: true,// not null
            validate:{
                validator:(value) => value.length > 3,
                message: 'usename must be at least 3 characters'
            }
        },
        email:{
            type: String,
            validate:{
                validator:(value)=> isEmail,
                message:'email is incorrect format'
            }
        },
        password:{
            type: String,
            required: true,

        },
        phoneNumber:{
            type: String,
            required: true,
                        
        },
        adrress:{
            type: String,
            required: true,
                        
        }

    })
)
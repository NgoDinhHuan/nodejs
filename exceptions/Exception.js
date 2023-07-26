import {print, OutputType} from "../helpers/print.js"

export default class Exception extends Error{
    static WRONG_DB_USENAME_PASSWORD = "wrong database username and password"    
    static WRONG_CONNECTION_STRING ="wrong server name/connection string"    
    static CANNOT_CONNECT_MONGODB = "cannot connect to Mogoose" 
    static USER_EXIST = "User already exits"
    static CANNOT_REGISTER_USER= "cannot register user"
    static WRONG_EMAIL_AND_PASSWORD ="Wrong email or password"


    constructor(message, validationErrors={}){
        super(message)//call constructor of parent class(Error)        
        print(message, OutputType.ERROR)
        this.validationErrors = validationErrors
    }
}
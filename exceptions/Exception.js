import {print, OutputType} from "../helpers/print.js"

export default class Exception extends Error{
    static WRONG_DB_USENAME_PASSWORD = "wrong database username and password"    
    static WRONG_CONNECTION_STRING ="wrong server name/connection string"    
    static CANNOT_CONNECT_MONGODB = "cannot connect to Mogoose" 
    static USER_EXIST = "User already exits"
    static CANNOT_REGISTER_USER= "cannot register user"
    constructor(messgge){
        super(messgge)// call constructor of parent class(Error)
        print(messgge, OutputType.ERROR)
    }
}
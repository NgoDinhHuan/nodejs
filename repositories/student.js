import Exception from "../exceptions/Exception.js";
import { Student } from "../models/index.js";
const getAllStudents = async ({
    page,
    size,
    SearchString,
}) => {
    console.log('get all student with paging');
}

//language:"english,vietnamese"
const insertStudent = async ({
    name,
    email,
    languages,
    gender,
    phoneNumber,
    address
}) => {
    //console.log('insert student')
    try {
        debugger
        const student = await Student.create({
            name, 
            email, 
            languages, 
            gender, 
            phoneNumber,
            address
        })
        debugger
    }catch(exception) {     
        // error form validation  
        if(!!exception.errors){
            throw new Exception('Input error',exception.errors)
            
        } 
       
    }
    debugger
}
export default {
    getAllStudents,
    insertStudent,
}
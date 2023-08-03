import Exception from "../exceptions/Exception.js";
import { Student } from "../models/index.js";
const getAllStudents = async ({
    page,
    size,
    SearchString,
}) => {
    console.log('get all student with paging');
}
const getStudentById = async(studentId) => {
    const student = await Student.findById(studentId)
    if(!student) {
        throw new Exception('Cannot find Student with id ' + studentId)
    }
    return student 
}
const updateStudent = async ({
    id,
    name, 
    email, 
    languages, 
    gender, 
    phoneNumber,
    address
}) => {    
    const student = await Student.findById(id)
    debugger        
    student.name = name ?? student.name
    student.email = email ?? student.email
    student.languages = languages ?? student.languages
    student.gender = gender ?? student.gender
    student.phoneNumber = phoneNumber ?? student.phoneNumber
    student.address = address ?? student.address
    await student.save()
    return student    
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
    getStudentById,
    updateStudent,
}
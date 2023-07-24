const getAllStudents = async ({
    page,
     size,
     SearchString,
})=>{
    console.log('get all student with paging');   
}

//language:"english,vietnamese"
const insertStudent = async({
    name, email, languages, gender, phoneNumber,address
})=>{
    console.log('insert student');
}
export default{
    getAllStudents,
    insertStudent,
}
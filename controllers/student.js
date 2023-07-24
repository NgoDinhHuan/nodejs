import {body,validationResult} from 'express-validator'
async function getAllStudents(req,res){
   
   res.status(200).json({
      message: "Get students successfully",
      data:[
         {
            name:'Nguyen Van A',
            email:'nguyenvana@gmail.com',
            age: 18  
         },
         {
            name:'Nguyen Van B',
            email:'nguyenvanb@gmail.com',
            age: 20 
         },
         {
            name:'Nguyen Van C',
            email:'nguyenvanc@gmail.com',
            age: 19  
         }  
      ]
   })
   // res.status(500).json({
   //    message:"cannot get student"
   // })
}
 async function getStudentById(req,res){

 }
 async function updateStudentById(req,res){

 }
 async function insertStudent(req,res){

 }
 export default {
    getAllStudents,
    getStudentById,
    updateStudentById,
    insertStudent
 }
 
 

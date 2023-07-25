import {body,validationResult} from 'express-validator'
import HttpStatusCode from '../exceptions/HttpStatusCode.js'
async function getAllStudents(req,res){
   
   res.status(HttpStatusCode.OK).json({
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
   // res.status(HttpStatusCode.INSERT_SERVER_ERROR)).json({
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
 
 

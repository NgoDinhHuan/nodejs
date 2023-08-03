import {body,validationResult} from 'express-validator'
import HttpStatusCode from '../exceptions/HttpStatusCode.js'

import { studentRepository } from '../repositories/index.js'
import Exception from '../exceptions/Exception.js'
async function getAllStudents(req,res){
   
   res.status(HttpStatusCode.OK).json({
      message: "Get students successfully",
      data:[
         {
            name:'Nguyen Van g',
            email:'nguyenvanD@gmail.com',
            age: 14  
         },
         {
            name:'Nguyen Van s',
            email:'nguyenvanB@gmail.com',
            age: 25
         },
         {
            name:'Nguyen Van f',
            email:'nguyenvanC@gmail.com',
            age: 18  
         }  
      ]
   })
   res.status(HttpStatusCode.INSERT_SERVER_ERROR).json({
      message:"cannot get student"
   })
}
 async function getStudentById(req,res){
   let studentId = req.params.id    
    try {
        const student = await studentRepository.getStudentById(studentId)
        res.status(HttpStatusCode.OK).json({
            message: 'Get detail student successfully',            
            data: student,        
        })  
    }catch(exception) {
        res.status(HttpStatusCode.INTERNAL_SERVER_ERROR).json({
            message: exception.message, 
        })
    }


 }
 async function updateStudentById(req,res){
   const {
      id,
      name, 
      email, 
      languages, 
      gender, 
      phoneNumber,
      address
  } = req.body
  debugger
  //not validate !
  try {
      const student = await studentRepository.updateStudent(req.body)
      res.status(HttpStatusCode.OK).json({
          message: 'Update student successfully',            
          data: student,        
      })  
  }catch(exception) {
      res.status(HttpStatusCode.INTERNAL_SERVER_ERROR).json({
          message: exception.message, 
      })
  }

 }
 async function insertStudent(req,res){
   try{
      const student = await studentRepository.insertStudent(req.body)
      res.status(HttpStatusCode.INSERT_OK).json({
         message:'Insert student successfully',
         data: student
      })
   }catch(exception) {
      res.status(HttpStatusCode.INTERNAL_SERVER_ERROR).json({
          message: 'Cannot insert student:'+exception,
          validationErrors: exception.validationErrors
      })
  }
}
 export default {
    getAllStudents,
    getStudentById,
    updateStudentById,
    insertStudent
 }
 
 

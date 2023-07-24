import  Express  from "express";
import {
    studentController,
} from '../controllers/index.js'

const router = Express.Router()

router.get('/',studentController.getAllStudents)
// get student by id
router.get('/:id',studentController.getStudentById)
// put or patch
router.patch('/',studentController.updateStudentById)

router.post('/',studentController.insertStudent)

export default router
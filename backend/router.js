import { Router } from "express";
import * as request from './adminrequestHandler.js'
import Auth from "./middleware/auth.js";

const router = Router()

router.route('/adminregister').post(request.adminRegister)

router.route('/adminlogin').post(request.adminLogin)

router.route('/home').post(Auth,request.Home)


router.route('/addstaff').post(request.addstaff)
router.route('/getstaff').post(request.getstaff)
router.route('/deletestaff/:id').post(request.deletestaff)
router.route('/editstaff/:id').post(request.editstaff)
router.route('/updatestaff/:id').post(request.updatestaff)


router.route('/addstudent').post(request.addstudent)
router.route('/getstudent').post(request.getstudent)
router.route('/deletestudent/:id').post(request.deletestudent)
router.route('/editstudent/:id').post(request.editstudent)
router.route('/updatestudent/:id').post(request.updatestudent)
  
export default router
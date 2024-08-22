import { Router } from "express";
import * as request from './adminrequestHandler.js'
import Auth from "./middleware/auth.js";

const router = Router()

router.route('/adminregister').post(request.adminRegister)

router.route('/adminlogin').post(request.adminLogin)

router.route('/home').post(Auth,request.Home)


router.route('/addstaff').post(request.addstaff)
router.route('/getstaff').get(request.getstaff)
router.route('/deletestaff/:id').delete(request.deletestaff)
router.route('/editstaff/:id').get(request.editstaff)
router.route('/updatestaff/:id').patch(request.updatestaff)


router.route('/addstudent').post(request.addstudent)
router.route('/getstudent').get(request.getstudent)
router.route('/deletestudent/:id').delete(request.deletestudent)
router.route('/editstudent/:id').get(request.editstudent)
router.route('/updatestudent/:id').patch(request.updatestudent)
  
export default router
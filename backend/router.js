import { Router } from "express";
import * as request from './adminrequestHandler.js'
import Auth from "./middleware/auth.js";

const router = Router()

router.route('/adminregister').post(request.adminRegister)
router.route('/stafflogin').post(request.stafflogin)

router.route('/studentlogin').post(request.studentlogin)
router.route('/adminlogin').post(request.adminLogin)

router.route('/home').post(Auth,request.Home)


router.route('/addstaff').post(request.addstaff)
router.route('/getstaff').get(request.getstaff)
router.route('/getonestaff/:id').get(request.getonestaff)
router.route('/getonestafff/:email').get(request.stalogin)
router.route('/getonestaffff/:email').get(request.staflogin)


router.route('/deletestaff/:id').delete(request.deletestaff)
router.route('/editstaff/:id').get(request.editstaff)
router.route('/updatestaff/:id').patch(request.updatestaff)


router.route('/addstudent').post(request.addstudent)
router.route('/getstudent').get(request.getstudent)
router.route('/getonestudent/:id').get(request.getonestudent)
router.route('/getonestudentt/:email').get(request.stdlogin)


router.route('/deletestudent/:id').delete(request.deletestudent)
router.route('/editstudent/:id').get(request.editstudent)
router.route('/updatestudent/:id').patch(request.updatestudent)
  


router.route('/stdfpwd').post(request.studentforget)
router.route('/otpverify').post(request.verifyOtp)
router.route('/stffpwd').post(request.staffforget)
router.route('/sotpverify').post(request.sverifyOtp)







export default router
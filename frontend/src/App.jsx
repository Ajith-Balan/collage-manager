import {useState} from 'react'
import home from './components/home';
import SignInPage from './components/login';
import adminlogin from './components/adminlogin';
import addstudent from './components/addstudent';
import addstaff from './components/addstaff';
import ShowStaff from './components/showstaff';
import Edit from './components/editstaff';
import ShowStudent from './components/showstudent';
import Editstudent from './components/editstudent'
import adminhome from './components/adminhome';
import studentdetails from './components/studentpage';
import StaffDetails from './components/staffpage';
import stdfpwd from './components/studentfpwd';
import StfFpPwd from './components/stafffpwd';

import React,{Component} from "react";

import {BrowserRouter,Routes,Route} from 'react-router-dom'

function App(){

return(
<>
<BrowserRouter>
<Routes>
<Route path='/' Component={home}/>
<Route path='/adminhome' Component={adminhome}/>

<Route path='/login' Component={SignInPage}/>
<Route path='/admin' Component={adminlogin}/>
<Route path='/addstudent' Component={addstudent}/>
<Route path='/addstaff' Component={addstaff}/>
<Route path='/showstaff' Component={ShowStaff}/>
<Route path='/editstaff/:id' Component={Edit}/>


<Route path='/showstudent' Component={ShowStudent}/>
<Route path='/editstudent/:id' Component={Editstudent}/>
<Route path='/studentpage/:email' Component={studentdetails}/>
<Route path='/staffpage/:email' Component={StaffDetails}/>
<Route path='/stdfpwd' Component={stdfpwd}/>
<Route path='/stffpwd' Component={StfFpPwd}/>











</Routes>


</BrowserRouter>
</>
)

 
}
export default App;
import {useState} from 'react'
import home from './components/home';
import SignInPage from './components/login';
import adminlogin from './components/adminlogin';
import addstudent from './components/addstudent';
import addstaff from './components/addstaff';



import React,{Component} from "react";

import {BrowserRouter,Routes,Route} from 'react-router-dom'

function App(){

return(
<>
<BrowserRouter>
<Routes>
<Route path='/' Component={home}/>
<Route path='/login' Component={SignInPage}/>
<Route path='/admin' Component={adminlogin}/>
<Route path='/addstudent' Component={addstudent}/>
<Route path='/addstaff' Component={addstaff}/>







</Routes>


</BrowserRouter>
</>
)

 
}
export default App;
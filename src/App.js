import React,{useEffect} from 'react';
import {Route,Routes,BrowserRouter as Router} from "react-router-dom"
import Home from './pages/Home';
import SignUp from './pages/Signup';
import SignIn from './pages/Signin';
import axios from 'axios';

const App = () => {

  

  async function getprofiledata(){
    try {
      const mydata=await axios.get("/api/user/me");
    console.log(mydata)
    } catch (error) {
      console.log(error.response.data.message)
    }
    
  };

  async function getgoogleprofiledata(){
    try {
      const googledata=await axios.get('/api/google/profile');
      console.log(googledata.data);
      
    } catch (error) {
      console.log(error.response.data.message);
      
    }
  }

  useEffect(()=>{
    getprofiledata();
    getgoogleprofiledata()

  },[])
  return (
    <Router>

      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/signup' element={<SignUp/>}/>
        <Route path='/signin' element={<SignIn/>}/>
      </Routes>
    </Router>
  )
}

export default App
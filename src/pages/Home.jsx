import React,{Fragment} from 'react'
import {Button,Container} from "@mui/material"
import { GoogleLogin } from '@react-oauth/google';
import axios from 'axios';



const Home = () => {
    

    const loginsuccess=async(res)=>{
      const token=res.credential;
      try {
        const response=await axios.post("/api/google/new",{token});
      console.log(response.data)
        
      } catch (error) {
        alert(error.response.data.message)
        
      }
      
  }
  const onloginerror=(res)=>{
      console.log(res)
  };


  const googlelogouthandler=async()=>{

    try {
      const logout=await axios.get("/api/google/logout");
    console.log(logout.data)
      
    } catch (error) {
      console.log(error.response.data.message)
      
    }
    
  }
  return (
    <Fragment>
      

      <div>
      <GoogleLogin
        onSuccess={loginsuccess}
        onError={onloginerror}
/>;
      </div>

      <Container maxWidth="xl">
      <Button variant="contained" fullWidth onClick={googlelogouthandler}>LOGOUT FROM GOOGLE ACCOUNT</Button>
      </Container>
        

    </Fragment>
  )
}

export default Home
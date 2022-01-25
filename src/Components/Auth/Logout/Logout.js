import React from 'react'
import {Box,Button,makeStyles, Typography} from '@material-ui/core'
import { useNavigate } from 'react-router-dom';
import swal from 'sweetalert';
export default function Logout() { 
    const navigate=useNavigate()
         const loginout=()=>{
      window.localStorage.clear();//Removes all key/value pairs, if there are any.Dispatches a storage event on Window objects holding an equivalent Storage object
    //   logout()
      navigate('/login') 
      swal({
        title: "Successfully loggedOut,See you next time",
        text: "Thank you",
        icon: "success",
        button: "OK",
      });
         }
    return (
        <center >
        <React.Fragment  >
        <h1 style={{ marginTop:200}} >Click Below Button To Logout</h1>
        <Button onClick={loginout} variant="contained" color="secondary" style={{ marginButton:150}}>
        Logout
        </Button>
        </React.Fragment>
        </center>
    )
}

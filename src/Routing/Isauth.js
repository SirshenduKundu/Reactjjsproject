import React from 'react'
import {Box,Button,makeStyles, Typography} from '@material-ui/core'
import { useNavigate } from 'react-router-dom'
export default function Isauth() {
    const navigate=useNavigate()
    const func=()=>{
      
        navigate('/login') 
    }
    return (
        <center>
        <Box style={{ marginTop:200}}>
            <h1> Please  Authenticate To Continue</h1>
            <Button onClick={func} variant="contained" color="secondary">
  Click To Authenticate</Button>
        </Box>
        </center>
    )
}

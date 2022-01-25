import React,{useContext} from 'react'
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import { Box,Typography } from '@material-ui/core';
import Button from '@material-ui/core/Button';
import {Link} from 'react-router-dom' 
import { useNavigate } from 'react-router-dom';
import {useFormik} from 'formik'
import axios from 'axios'
import Grid from '@material-ui/core/Grid';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined'; 
import Avatar from '@material-ui/core/Avatar';


// import {LoginContext} from '../ContextLogin/ContextLoginProvider'/////////////////

const validateForm=(formvalue)=>{
  const CharacterOnly=/^([a-zA-Z]{5,15})$/
  const emailValidation=/^([A-Za-z0-9.-]+)@([a-z]{5,12}).([a-z.]{2,10})$/
  const validationPassword=/^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*]).{8,10}$/
  const errors={};
  if(!formvalue.firstname){
    errors.firstname="Please Enter Your FirstName"
  }else if(formvalue.firstname.length>15){
    errors.firstname="Max Length 15"
  }else if(!CharacterOnly.test(formvalue.firstname)){
    errors.firstname="Only Characters"
  }
  if(!formvalue.lastname){
    errors.lastname="Please Enter Your LastName"
  }else if(formvalue.lastname.length>10){
    errors.lastname="Max Length 10"
  }else if(!CharacterOnly.test(formvalue.lastname)){
    errors.lastname="Only Characters"
  }
  if(!formvalue.username){
    errors.username="Please Enter Your LastName"
  }else if(!CharacterOnly.test(formvalue.username)){
errors.username="Only Characters"
  }
  if(!formvalue.phonenumber){
    errors.phonenumber="Please Enter Your contact Number"
  }else if(formvalue.phonenumber.length>10){
    errors.phonenumber="Max Length 10"
  }
  if(!formvalue.pin){
    errors.pin="Please Enter Your pin"
  }else if(formvalue.pin.length>6){
    errors.pin="Max Length 6"
  }
  if(!formvalue.email){
    errors.email="Please Enter Your Email"
  }else if(!emailValidation.test(formvalue. email)){
    errors.email="please enter your valid email"
  }
  if(!formvalue.password){
    errors.password="Please Enter Your password"
  }else if(!validationPassword.test(formvalue.password)){
    errors.password="passward which contains 8-10 character,upper case,lower case,number and special charaterer "
  }
  console.log("error",errors);
  return errors;
}
const useStyles = makeStyles((theme) => ({
    root: {
      '& > *': {
        margin: theme.spacing(1)
        
        
      },
    },
    Registrationbtn:{
      textTransform: 'none',
      background: '#FB641B',
      color: '#fff',
      height: 40,
      borderRadius: 2,
      fontWeight: 800,
    },
    text: {
      color: '#878787',
      fontSize: 15
     },
     createText: {
      margin: 'auto 0 5px 0',
       textAlign: 'center',
       color: '#2874f0',
       fontWeight: 600,
       fontSize: 20,
       cursor: 'pointer',
       '&:hover': {
        color: "red",
      },
      },
      avatar: {
        margin: theme.spacing(1),
        backgroundColor: theme.palette.secondary.main,
      },
    Registration:{
     // padding: '15px 5px 0px'
     },
     
  }));
  const defaultProps = {
    bgcolor: 'background.paper',
    borderColor: 'text.primary',
    m: 0,
    border: 1,
    style: { width: '5rem', height: '5rem' },
  };
export default function Registration() {
  // const {account,setaccount} = useContext(LoginContext)//////// 

  const navigate=useNavigate()
    const classes = useStyles();
    const formik=useFormik({
      initialValues:{
        firstname:"",
        lastname:"",
        username:"",
        phonenumber:"",
        pin:"",
        email:"",
        password:""
        },
        validate:validateForm,//----------------------
        onSubmit:(values)=>{
          console.log("received values",values);
          let user ={
            username:values.firstname,
            email:values.email,
      password:values.password
          }
          console.log("user value",user);
          axios.post("https://project-node-1.herokuapp.com/postUserData",user)
          .then((res)=>{
            console.log("axios res",res);
            navigate('/login')
            // setaccount(user.username)///////////////////////
          }).catch((err)=>{
            console.log("axios error",err);
          })
        }
    })
    return (
      <center>
     
     <Box borderRadius="borderRadius" {...defaultProps} style={{ marginTop:60}} >
         <h1>Create Your Account</h1>
         <Avatar className={classes.avatar}>
          <LockOutlinedIcon />
        </Avatar>
  <form onSubmit={formik.handleSubmit} className={classes.root} noValidate autoComplete="off">
  <Grid container spacing={2}>
  <Grid item xs={12}>     
      <Box className={classes.Registration}>
      <TextField
      name="firstname"
        id="outlined-secondary"
        label="Enter Your FirstName"
        variant="outlined"
        color="secondary"
        onChange={formik.handleChange} 
        value={formik.values.firstname}
        onBlur={formik.handleBlur}
      />
      {/* {formik.errors.firstname ? (<p>{formik.errors.firstname}</p>) : null} */}

      {/* ei errors ta formik er predefine */}
      
      {formik.touched.firstname && formik.errors.firstname ? (<p style={{color:"#F50057" ,fontWeight:"bold"}}>{formik.errors.firstname}</p>) : null}
      </Box>
      </Grid>
      <Grid item xs={12}>
      <Box className={classes.Registration}>
      <TextField
      name="lastname"
        id="outlined-secondary"
        label="Enter Your LastName"
        variant="outlined"
        color="secondary"
        onChange={formik.handleChange}
        value={formik.values.lastname}
        onBlur={formik.handleBlur}
      />
      {formik.touched.lastname && formik.errors.lastname ? (<p style={{color:"#F50057",fontWeight:"bold"}}>{formik.errors.lastname}</p>):""}
      </Box>
      </Grid>
      <Grid item xs={12}>
      <Box className={classes.Registration}>
      <TextField
      name="username"
        id="outlined-secondary"
        label="Enter Your UserName"
        variant="outlined"
        color="secondary"
        onChange={formik.handleChange}
        value={formik.values.username}
        onBlur={formik.handleBlur}
      />
      {formik.touched.username && formik.errors.username ? (<p style={{color:"#F50057",fontWeight:"bold"}}>{formik.errors.username}</p>):null}
      </Box>
      </Grid>
      <Grid item xs={12}>
      <Box className={classes.Registration}>
      <TextField
     
      name="phonenumber"
        id="outlined-secondary"
        label="Enter Your PhoneNumber "
        variant="outlined"
        color="secondary"
        maxlength="10"
        onChange={formik.handleChange}
        value={formik.values.phonenumber}
        onBlur={formik.handleBlur}
      />
       {formik.touched.phonenumber && formik.errors.phonenumber ? (<p style={{color:"#F50057",fontWeight:"bold"}}>{formik.errors.phonenumber}</p>):null}
      </Box>
      </Grid>
      <Grid item xs={12}>
      <Box className={classes.Registration}> 
      <TextField
     
      name="pin"
        id="outlined-secondary"
        label="Enter Your PIN Number"
        variant="outlined"
        color="secondary"
        MaxLength="6"
        onChange={formik.handleChange}
        value={formik.values.pin}
        onBlur={formik.handleBlur}
      />
       {formik.touched.pin && formik.errors.pin ? (<p style={{color:"#F50057",fontWeight:"bold"}}>{formik.errors.pin}</p>):null}
      </Box>
      </Grid>
      <Grid item xs={12}>
      <Box className={classes.Registration}>
      <TextField
      name="email"
        id="outlined-secondary"
        label="Enter Your Email ID"
        variant="outlined"
        color="secondary"
        onChange={formik.handleChange}
        value={formik.values.email}
        onBlur={formik.handleBlur}
      />
      {formik.touched.email &&  formik.errors.email ? (<p style={{color:"#F50057",fontWeight:"bold"}}>{formik.errors.email}</p>):null}
      </Box>
      </Grid>
      <Grid item xs={12}>
      <Box className={classes.Registration}>
      <TextField
       type='password'
      name="password"
        id="outlined-secondary"
        label="Enter Your Password"
        variant="outlined"
        color="secondary"
        onChange={formik.handleChange}
        value={formik.values.password}
        onBlur={formik.handleBlur}
      />
       {formik.touched.password &&  formik.errors.password ? (<p style={{color:"#F50057",fontWeight:"bold"}}>{formik.errors.password}</p>):null}
      </Box>
      </Grid>
      </Grid>
    <Button type="submit" disabled={!(formik.isValid && formik.dirty)} variant="contained"  className={classes.Registrationbtn}>
     REGISTER HERE
      </Button>
      <Grid container justifyContent="center">
      <Grid item>
      <Typography className={classes.text} style={{textAlign:'center'}}>OR</Typography>
      <Link to="/login"><Typography className={classes.createText}>Already Have An Account ? Login Here</Typography></Link>
      </Grid>
      </Grid>
    </form> 
    </Box>
</center>
    )
}









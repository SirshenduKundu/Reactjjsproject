// import React from 'react';
// import {Box,Button,makeStyles, Modal, TextField, Typography} from '@material-ui/core'
// //import Button from '@material-ui/core/Button';
// //import Modal from '@material-ui/core/Modal';
// import Dialog from '@material-ui/core/Dialog';
// import DialogActions from '@material-ui/core/DialogActions';
// import DialogContent from '@material-ui/core/DialogContent';
// import DialogContentText from '@material-ui/core/DialogContentText';
// import DialogTitle from '@material-ui/core/DialogTitle';
// import {Link,NavLink} from 'react-router-dom'
// const useStyle=makeStyles({
//   component: {
//     height: '70vh',
//     width: '90vh',
//     maxWidth: 'unset !important'
    
//   },
// image:{
//  backgroundImage:`url(${'https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/login_img_c4a81e.png'})`,
//  height:'70vh',
//  backgroundRepeat: 'no-repeat',
//  background: '#2874f0',
//         backgroundPosition: 'center 85%',
//        height: '70vh',
//         width: '40%',
//         padding: '45px 35px',
//         '& > *': {
//             color: '#FFFFFF',
//             fontWeight: 600
//         }
// },
// login: {
//   padding: '25px 35px',
//   display: 'flex',
//   flex: 1,
//   flexDirection: 'column',
//   '& > *': {
//       marginTop: 20
//   }
// },
// requestbtn: {
//   textTransform: 'none',
//   background: '#e9e9e9',
//   color: '#2874f0',
//   height: 48,
//   borderRadius: 4,
//   boxShadow: '0 2px 4px 0 rgb(0 0 0 / 20%)'
// },
// text: {
//   color: '#878787',
//   fontSize: 12
// },
// createText: {
//   margin: 'auto 0 5px 0',
//   textAlign: 'center',
//   color: '#2874f0',
//   fontWeight: 600,
//   fontSize: 18,
//   cursor: 'pointer'
// },
// });
// export default function Login({open,settOpen}) {
//   const classes=useStyle();
//   const handleClose=()=>{
//     settOpen(false)
//   }

//   return (
//     <>
//     <Modal open={open} onClose={handleClose}>

//     <DialogContent className={classes.component}>
//       <Box style={{display: 'flex'}}>
//         <Box className={classes.image}>
//         <Typography variant="h4"> Login</Typography>
//           <Typography style={{marginTop: 25}}>
//           Get access to your Orders, Wishlist and Recommendations
//           </Typography>
//        </Box>
//         <Box className={classes.login}>

// <TextField name='username' id="filled-basic" label="Enter Email/Mobile Number" variant="filled" />
// <TextField name='password' id="filled-basic" label="Enter Password" variant="filled" />
// <Typography>By continuing, you agree to Flipkart's Terms of Use and Privacy Policy.</Typography>
// <Button variant="contained" color="secondary">
//   Login Here
// </Button>
// <Typography className={classes.text} style={{textAlign:'center'}}>OR</Typography>
//   <Button className={classes.requestbtn}>Request OTP</Button>
// <Link to="/registration"><Typography className={classes.createText}>New to Flipkart? Create an account</Typography></Link>
// </Box>
//       </Box>
//     </DialogContent>
//     </Modal>
      
//     </>
//   );
// }
import React ,{useContext} from 'react'
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import { Box ,Typography} from '@material-ui/core';
import Button from '@material-ui/core/Button';
import {Link} from 'react-router-dom'
import {useFormik} from 'formik'
import axios from 'axios';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Avatar from '@material-ui/core/Avatar';
import { useNavigate } from 'react-router-dom';
import swal from 'sweetalert';
import {LoginContext} from '../ContextLogin/ContextLoginProvider'/////////////////

const validateForm=(formvalue)=>{
  const emailValidation=/^([A-Za-z0-9.-]+)@([a-z]{5,12}).([a-z.]{2,10})$/
  const validationPassword=/^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*]).{8,10}$/;
  const errors={}
  if(!formvalue.email){
    errors.email="Required Email"
  }else if(!emailValidation.test(formvalue.email)){
    errors.email="Invalid your email address "
  }
  if(!formvalue.password){
    errors.password="enter your password"
  }else if(!validationPassword.test(formvalue.password)){
    errors.password="passward which contains 8-10 character,upper case,lower case,number and special charaterer"
  }
  console.log("erorrrrr",errors);
  return errors;
}
const useStyles = makeStyles((theme) => ({
    root: {
      '& > *': {
        margin: theme.spacing(1)
        },
    },
      text: {
          color: '#878787',
          fontSize: 25
         },
         loginbtn: {
          textTransform: 'none',
          background: '#FB641B',
          color: '#fff',
          height: 48,
          borderRadius: 2,
          fontWeight: 800,
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
    login:{
      //padding: '20px 75px 10px'
     }
  }));
  const defaultProps = {
    bgcolor: 'background.paper', 
    borderColor: 'text.primary',
    m: 0,
    border: 1,
     style: { width: '5rem', height: '5rem' },
   };
export default function Login() {
  const {account,setaccount} = useContext(LoginContext)//////// 
  const navigate=useNavigate()
    const classes = useStyles();
    const formik=useFormik({
      initialValues:{
        email:"",
        password:"",
      },
      validate:validateForm,
      onSubmit:(values)=>{
        console.log("received value",values); 
        let user={
          email:values.email,
          password:values.password
        }
        console.log("user value",user);
        axios.post('https://project-node-1.herokuapp.com/postLoginData',user)
        .then((res)=>{
          console.log("axios res",res);
          window.localStorage.setItem("Token",res.data.token)
          navigate('/')
          setaccount(res.data.result.userName)/////////////////////
          swal({
            title: "Successfully your Login ,See you ",
            text: "Thank you",
            icon: "success",
            button: "OK",
          });
        }).catch((err)=>{
          console.log("axios error",err);
        })
      }
    })
    return (
     
      <center>
     
        <Box borderRadius="borderRadius" {...defaultProps} style={{ marginTop:60}} >
         <h3>Login Here</h3>
         <Avatar className={classes.avatar}>
          <LockOutlinedIcon />
        </Avatar>
           <form  onSubmit={formik.handleSubmit} className={classes.root} noValidate autoComplete="off">
      <Box className={classes.login}>
      <TextField
      name="email"
        id="filled-secondary"
        label="Enter Your Email / Username"
        variant="filled"
        color="secondary"
        value={formik.values.email}
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}

      />
      {formik.touched.email && formik.errors.email ? (<p style={{color:"#F50057" ,fontWeight:"bold"}}>{formik.errors.email}</p>):""}
      </Box>
      <Box className={classes.login}>
      <TextField
      type='password'
      name="password"
        id="filled-secondary"
        label="Enter Your Password"
        variant="filled"
        color="secondary" 
        value={formik.values.password}
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
      />
      {formik.touched.password && formik.errors.password ? (<p style={{color:"#F50057" ,fontWeight:"bold"}}>{formik.errors.password}</p>):""}
      </Box>
      
      <Button type="submit" disabled={!(formik.isValid && formik.dirty)}  variant="contained"  className={classes.loginbtn}>
      Login Here
      </Button>
      <Typography className={classes.text} style={{textAlign:'center'}}>OR</Typography>
      <Link to="/registration"><Typography className={classes.createText}>New to Online User? Create an account</Typography></Link>
    </form> 
       
        </Box>
      
        </center>
       
    )
}









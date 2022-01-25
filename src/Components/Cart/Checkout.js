import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

import Toolbar from '@material-ui/core/Toolbar';
import Paper from '@material-ui/core/Paper';
import { Link } from 'react-router-dom';
import Button from '@material-ui/core/Button';

import Typography from '@material-ui/core/Typography';


const useStyles = makeStyles((theme) => ({
    
    
    paper: {
      marginTop: theme.spacing(3),
      marginBottom: theme.spacing(3),
      padding: theme.spacing(2),
      [theme.breakpoints.up(600 + theme.spacing(3) * 2)]: {
        marginTop: theme.spacing(6),
        marginBottom: theme.spacing(6),
        padding: theme.spacing(3),
      },
    },
    
    
  }));
export default function Checkout() {
    const classes = useStyles();
  return <>


     
     
        <Toolbar>
          <Typography variant="h6" color="inherit" noWrap>
           CheckOut
          </Typography>
        </Toolbar>
     
     
        <Paper className={classes.paper}>
          <Typography component="h1" variant="h4" align="center">
          Successfully Placed The Order
          </Typography>
         
            
         
          
            
              <React.Fragment>
                <Typography variant="h5" gutterBottom>
                  Thank you for your order.
                </Typography>
                <Typography variant="subtitle1">
                  Your order number is #2001539. We have emailed your order confirmation, and will
                  send you an update when your order has shipped.
                </Typography>
              </React.Fragment>
            
               
               
              <Link to={'/'} style={{textDecoration:'none'}} > <Button variant="contained" color="secondary">
        Continue Shopping
      </Button></Link>
                    
                 
               
                  </Paper>
             
          
         

  </>;
}

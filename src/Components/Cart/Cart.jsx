import React from 'react'
import { Box, makeStyles, Typography, Button, Grid } from '@material-ui/core';
//component
import Cartitem from './Cartitem';
import TotalView from './TotalView';
//cartttttt
import {CartState} from "../../Context/Context"
import EmptyCart from './EmptyCart ';
import { Link } from 'react-router-dom';



const useStyle = makeStyles(theme => ({
    component: {
        // marginTop: 55,
        padding: '30px 135px',
        display: 'flex',
        [theme.breakpoints.down('sm')]: {
            padding: '15px 0'
        }
    },
    leftComponent: {
        // width: '67%',
        paddingRight: 15,
        [theme.breakpoints.down('sm')]: {
            marginBottom: 15
        }
    },
    header: {
        padding: '15px 24px',
        background: '#fff'
    },
    bottom: {
        padding: '16px 22px',
        background: '#fff',
        boxShadow: '0 -2px 10px 0 rgb(0 0 0 / 10%)',
        borderTop: '1px solid #f0f0f0'
    },
    placeOrder: {
        display: 'flex',
        marginLeft: 'auto',
        background: '#fb641b',
        color: '#fff',
        borderRadius: 2,
        width: 250,
        height: 51
    }
}));
export default function Cart() {
    //carttttttttttttttttttttt
    const{state:{cart},dispatch,}=CartState()
    console.log("cart page",cart);

    const classes = useStyle();

return (
        <>
        {cart.length ? 

            <Grid container className={classes.component}>
          
                <Grid item lg={9} md={9} sm={12} xs={12} className={classes.leftComponent}>
                    <Box className={classes.header}>
                        <Typography style={{fontWeight: 600, fontSize: 25}}>My Cart ({cart.length}) </Typography>
                    </Box>
                       
                            {cart.map((prod,i) =>{
                                return(
                                  <Cartitem item={prod}/>
                                )
                            })
                            }
                       
                            <Link to={'/checkout'} style={{textDecoration:'none'}} ><Box className={classes.bottom}>
                        <Button  variant="contained" className={classes.placeOrder}>Place Order</Button>
                    </Box></Link>
                </Grid>
                <Grid item lg={3} md={3} sm={12} xs={12}>
                   <TotalView item={cart}/>
                </Grid>
            </Grid> 
        :<EmptyCart/>  
        }
        </>
    )
}

   





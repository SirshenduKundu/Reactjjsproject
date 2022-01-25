import { Box, Button,makeStyles } from '@material-ui/core'
import React from 'react'
import clsx from 'clsx'//duto class ke eksate use korar jonno
import { useParams,Link } from 'react-router-dom';

//-------------------------------------------------------
import LocalMallIcon from '@material-ui/icons/LocalMall';
import FlashOnIcon from '@material-ui/icons/FlashOn';
import RemoveShoppingCartIcon from '@material-ui/icons/RemoveShoppingCart';
//-------------------------------------------------------
//cart
import { CartState } from '../Context/Context';

const useStyle=makeStyles(theme=>({
    leftContainer: {
        minWidth: '40%',
        // textAlign: 'center',
        padding: '40px 0 0 80px',
        [theme.breakpoints.down('md')]: {
            padding: '20px 40px'
        }
    },
    productImage: {
        padding: '15px 20px',
        border: '1px solid #f0f0f0',
        width: '95%'
    },
    button: {
        width: '46%',
        borderRadius: 2,
        height: 50
    },
    addToCart: {
        background: '#ff9f00',
        color: '#FFF'
    },
    removecart:{
        background: '#F50057',
        color: '#FFF'
    },
    buyNow:{
        background: '#fb641b',
        color: '#FFF'
    }
})) 
export default function ProductAction() {
    //cart
    const {state:{products},}=CartState();
    console.log("state cart",products);

    const {state:{cart},dispatch,}=CartState() 
    //----------------------------------
    

    const PData = useParams();
    const classes=useStyle()
    let productsubdata = products.find((data) =>
        data.id === PData.pid)
    console.log(productsubdata);
    
    return (
        <>
        
            <Box className={classes.leftContainer}> 
            <img src={productsubdata.detailUrl} className={classes.productImage} alt={"aaa"}  /><br />
            {
              cart.some((p) => p.id === productsubdata.id) ? (<Button style={{marginRight: 10}} onClick={() =>
                dispatch({
                  type: "REMOVE_FROM_CART",
                  payload: productsubdata,
                })
              } variant="contained" className={clsx(classes.button,classes.removecart)}><RemoveShoppingCartIcon/> Remove from Cart
              </Button>):(<Button style={{marginRight: 10}} onClick={() =>
                dispatch({
                  type: "ADD_TO_CART",
                  payload: productsubdata,
                })
              } variant="contained" className={clsx(classes.button,classes.addToCart)} ><LocalMallIcon/> Add to Cart
              </Button>)
            }
            {/* <Button style={{marginRight: 10}}  variant="contained" className={clsx(classes.button,classes.addToCart)} ><LocalMallIcon/> Add to Cart</Button>
            <Button style={{marginRight: 10}}  variant="contained" className={clsx(classes.button,classes.addToCart)} ><LocalMallIcon/> remove to Cart</Button> */}
            <Link to={'/cart'} style={{textDecoration:'none'}}><Button variant="contained" className={clsx(classes.button ,classes.buyNow)}><FlashOnIcon/>  Buy Now</Button></Link>
           
        </Box>
        </>
    )
}

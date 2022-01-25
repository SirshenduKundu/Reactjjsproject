import React from 'react'
import { useNavigate } from 'react-router-dom';
import { makeStyles, Typography, Box,Button } from '@material-ui/core';
//import {Link} from 'react-router-dom'

const useStyle = makeStyles({
    component: {
        width: '80%%',
        height: '65vh',
        background: '#fff',
        margin: '80px 140px'
        
    },
    image: {
        width: '50%',
        
    },
    container: {
        textAlign: 'center',
        paddingTop: 10
    },
    button:{
        padding:'20px,90px'
    }
})
export default function EmptyCart () {
    const navigate=useNavigate();
    const imgurl = 'https://www.vinsolutions.com/wp-content/uploads/sites/2/vinsolutions/media/Vin-Images/news-blog/Empty_Shopping_Cart_blog.jpg';
    const classes = useStyle();
    const additem=()=>{
navigate('/')
    }
    return (
        <>
          <Box className={classes.component}>
            <Box className={classes.container}>
            <Typography style={{fontWeight: 600, fontSize: 20,color:'red'}}>Your cart is Empty!</Typography>
                <img src={imgurl} className={classes.image} />
                <br></br>
                <span>Add items to it now.</span><br></br>
                <Button onClick={()=>additem()} variant="contained" color="primary" className={classes.button}  disableElevation>
                  Shop Now 
    </Button>
            </Box>
        </Box>  
        </>
    )
}

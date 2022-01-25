import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import { Box, Grid } from '@material-ui/core';
import Card from '@material-ui/core/Card';
import clsx from 'clsx'//duto class ke eksate use korar jonno
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import DeleteForeverIcon from '@material-ui/icons/DeleteForever';
//cart
import { CartState } from '../../Context/Context';
//component
import QuantityButton from './QuantityButton';
const useStyle= makeStyles({
    component: {
        borderTop: '1px solid #f0f0f0',
        borderRadius: 0,
        display: 'flex'
    },
    leftComponent: {
        margin: 20, 
        display: 'flex',
        flexDirection: 'column'
    },
    mid: {
        margin: 20
    },
    greyTextColor: {
        color: '#878787'
    },
    smallText: {
        fontSize: 14,
    },
    price: {
        fontSize: 18,
        fontWeight: 600
    },
    image: {
        height: 110,
        width: 110
    },
    remove: {
        marginTop: 20,
        fontSize: 12
    }
  });
export default function Cartitem({item}) {
    //cart
    // const {state:{cart},dispatch,}=CartState() 
     const {dispatch}=CartState();
     
    const classes = useStyle();
    return (
        <>
            <Card className={classes.component}>
     <Box className={classes.leftComponent}>
     <img src={item.url} className={classes.image} />
     <QuantityButton/>
     </Box>
     <Box className={classes.mid}>
     <Typography>{(item.title.longTitle)}</Typography>
     <Typography className={clsx(classes.greyTextColor, classes.smallText)} style={{ marginTop: 10 }}>Seller:RetailNet</Typography>
     <Typography style={{margin: '20px 0'}}>
                    <span className={classes.price}>₹{item.price.cost}</span>&nbsp;&nbsp;&nbsp;
                    <span className={classes.greyTextColor}><strike>₹{item.price.mrp}</strike></span>&nbsp;&nbsp;&nbsp;
                    <span style={{ color: '#388E3C' }}>{item.price.discount} off</span>
                </Typography>
<Button variant="contained" color="secondary" onClick={()=>dispatch({type: "REMOVE_FROM_CART",payload: item,})} className={classes.remove}><DeleteForeverIcon/>Remove</Button>
    </Box>
            </Card>
        </>
    )
}

import { Box, makeStyles, Typography,Grid ,TableRow } from '@material-ui/core'
import React from 'react'
import { useParams } from 'react-router-dom';
import { products } from '../Constants/Data';
import clsx from 'clsx'//duto class ke eksate use korar jonno
import LocalOfferIcon from '@material-ui/icons/LocalOffer';//mui icon 
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
//component
import ProductAction from './ProductAction';

const useStyle = makeStyles(theme =>({
    component: {
        marginTop: 62,
        background: '#F2F2F2'
    },
    container: {
        background: '#FFFFFF',
         //margin: '0 80px',
        display: 'flex',
        [theme.breakpoints.down('md')]: {
            margin: 0
        }

    },
    rightContainer: {
        marginTop: 50,
        '& > *': {
            marginTop: 10
        }
    },
    smallText: {
        fontSize: 14,
        verticalAlign: 'baseline',
        '& > *' :{
            fontSize: 14,
            marginTop: 10
        }
    },
    price: {
        fontSize: 28
    },
    badge: {
        marginRight: 10,
        color: '#00CC00',
        fontSize: 20
    },
    greyTextColor: {
        color: '#878787'
    }

}))
export default function ProductView() {
    
    const date = new Date (new Date().getTime() +(5*24*60*60*1000))
    const fassured = 'https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/fa_62673a.png';
    const sellerURL = 'https://rukminim1.flixcart.com/lockin/774/185/images/CCO__PP_2019-07-14.png?q=50';
    
    const PData = useParams();
    console.log("product data", PData);
    const classes = useStyle();
    let productsubdata = products.find((data) =>
        data.id === PData.pid)
    console.log(productsubdata);

    return (
        <Box className={classes.component}>
            <Grid container   className={classes.container}>
                <Grid item lg={4} md={4} sm={8} xs={12} >

                   <ProductAction />

                </Grid>
                <Grid item lg={8} md={8} sm={8} xs={12} className={classes.rightContainer}>
                    <Typography> {productsubdata.title.longTitle}</Typography>
                    <Typography className={clsx(classes.smallText,classes.greyTextColor)}>
                        8 Ratings & 1 Reviews
                        <span><img src={fassured} style={{width: 77, marginLeft: 20}} alt={"aaa"} /></span>
                    </Typography>
                    <Typography>
                            <span className={classes.price}>₹{productsubdata.price.cost}</span>&nbsp;&nbsp;&nbsp; 
                            <span className={classes.greyTextColor}><strike>₹{productsubdata.price.mrp}</strike></span>&nbsp;&nbsp;&nbsp;
                            <span style={{color: '#388E3C'}}>₹{productsubdata.price.discount} off</span>
                        </Typography>
                        <Typography style={{marginTop:20 , fontWeight:'700'}}>
                Available offers
                </Typography>
                <Box className={classes.smallText}>
                <Typography><LocalOfferIcon className={classes.badge}/>Bank Offer 5% Unlimited Cashback on Flipkart Axis Bank Credit Card</Typography>
                <Typography><LocalOfferIcon className={classes.badge}/>Bank Offer 10% Off on Bank of Baroda Mastercard debit card first time transaction, Terms and Condition apply</Typography>
                <Typography><LocalOfferIcon className={classes.badge}/>Purchase this Furniture or Appliance and Get Extra ₹500 Off on Select ACs</Typography>
                <Typography><LocalOfferIcon className={classes.badge}/>Partner OfferExtra 10% off upto ₹500 on next furniture purchase</Typography>
                <Typography><LocalOfferIcon className={classes.badge}/>Bank Offer 10% Off on Bank of Baroda Mastercard debit card first time transaction, Terms and Condition apply</Typography>
                </Box>
                <Table>
                <TableBody>
                    <TableRow className={classes.smallText}>
                        <TableCell className={classes.greyTextColor}>Delivery</TableCell>
                        <TableCell style={{ fontWeight: 600 }}>  Delivery by {date.toDateString()} | ₹40</TableCell>
                    </TableRow>
                    <TableRow className={classes.smallText}>
                        <TableCell className={classes.greyTextColor}>Warranty</TableCell>
                        <TableCell>No Warranty</TableCell>
                    </TableRow>
                    <TableRow className={classes.smallText}>
                        <TableCell className={classes.greyTextColor}>Seller</TableCell>
                        <TableCell className={classes.smallText}>
                            <span style={{ color: '#2874f0' }}>SuperComNet</span>
                            <Typography>GST invoice available</Typography>
                            <Typography>7 Days Replacement Policy</Typography>
                            <Typography>View more sellers starting from ₹329</Typography>
                        </TableCell>
                    </TableRow>
                    <TableRow>
                    <TableCell colSpan={2}>
                            <img src={sellerURL} style={{ width: 390 }} alt={"aaa"} />
                        </TableCell>
                    </TableRow>
                    <TableRow className={classes.smallText}>
                        <TableCell className={classes.greyTextColor}>Description</TableCell>
                        <TableCell>{productsubdata.description}</TableCell> 
                    </TableRow>
                </TableBody>
            </Table>
                </Grid>
                
            </Grid>
        </Box>
    )
}

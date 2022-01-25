import { Box, Typography ,makeStyles} from '@material-ui/core'
import React,{useState,useEffect} from 'react'
import clsx from 'clsx'//duto class ke eksate use korar jonno

const useStyle = makeStyles({
    component: {
        // width: '30%'
    },
    header: {
        padding: '15px 24px',
        background: '#fff'
    },
    greyTextColor: {
        color: '#878787'
    },
    container: {
        '& > *': {
            marginBottom: 20,
            fontSize: 14
        }
    },
    price: {
        float: 'right'
    },
    totalAmount: {
        fontSize: 18,
        fontWeight: 600,
        borderTop: '1px dashed #e0e0e0',
        padding: '20px 0',
        borderBottom: '1px dashed #e0e0e0'
    }
})

export default function TotalView({item}) {
const classes = useStyle();

const [price,setprice]=useState(0)
const [discount, setDiscount] = useState(0)

useEffect(()=>{
    totalAmount()

},[item])

const totalAmount =()=>{
    let price = 0, discount = 0;
    console.log("prise",item);
item.map((item)=>{
    return(
        price += item.price.mrp,
        discount += (item.price.mrp-item.price.cost)
    )
})
         setprice(price);
         setDiscount(discount);
}

    return (
        <>
          <Box className={classes.component}>
            <Box className={classes.header} style={{borderBottom: '1px solid #f0f0f0'}}>
                <Typography className={classes.greyTextColor}>PRICE DETAILS</Typography>
            </Box>
            <Box className={clsx(classes.header, classes.container)}>
                <Typography>Price ({item?.length} item)<span className={classes.price}>₹{price}</span></Typography>
                <Typography>Discount<span className={classes.price}>-₹{discount}</span></Typography>
                <Typography>Delivery Charges<span className={classes.price}>₹40</span></Typography>
                <Typography className={classes.totalAmount}>Total Amount<span className={classes.price}>₹{price-discount+40}</span></Typography>
                <Typography style={{fontSize: 16, color: 'green'}}>You will save ₹{discount - 40} on this order</Typography>
            </Box>
        </Box>
        </>
    )
}

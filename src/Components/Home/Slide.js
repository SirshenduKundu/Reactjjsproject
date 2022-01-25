import React from 'react';
import { Link } from 'react-router-dom';
import {Box,Button,makeStyles, Typography} from '@material-ui/core';
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import {products} from '../../Constants/Data';
import Countdown from 'react-countdown';
import Divider from '@material-ui/core/Divider';
import { useNavigate } from 'react-router-dom';

const useStyle=makeStyles(theme=>({
    component:{
        marginTop: 12,
        background: '#FFFFFF'
    },
    image: {
        width: 'auto',
        height: 150
    },
    deal: {
        display: 'flex',
        padding: '15px 20px'
    },
    dealText: {
        fontSize: 22,
        fontWeight: 600,
        lineHeight: '32px',
        marginRight: 25
    },
    timer: {
        color: '#7f7f7f',
        marginLeft: 10,
        display: 'flex',
        alignItems: 'center'
    },
    button: {
        marginLeft: 'auto',
        backgroundColor: '#2874f0',
        borderRadius: 2,
        fontSize: 13
    },
    
    text: {
        fontSize: 14,
        marginTop: 5
    },
    wrapper: {
        padding: '22px 15px' 
    }
}))

const responsive = {
    
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 5
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 }, 
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };

export default function Slide({timer,title}) {
    const navigate =useNavigate()
    function click()
    {
        navigate("/product")
    }
    const classes=useStyle();
    const timerurl='https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/timer_a73398.svg';
    const renderer = ({ hours, minutes, seconds }) => {
        return <span className={classes.timer}>{hours} : {minutes} : {seconds}  Left</span>;
    };
    return (
        <Box className={classes.component}>
        <Box className={classes.deal}>
        <Typography  className={classes.dealText} >{title}</Typography>
{
     timer &&
<>
        <img src={timerurl} style={{ width: 35 }} alt='time clock'/>
        <Countdown date={Date.now() + 5.04e+7} renderer={renderer} />
        <Button onClick={click} variant="contained" color="primary" className={classes.button} >View All</Button>
</>
}
        </Box>
        <Divider />
           <Carousel 
           responsive={responsive}
           swipeable={false}
  draggable={false}
  showDots={true}
  responsive={responsive}
  ssr={true} // means to render carousel on server-side.
  infinite={true}
  
  autoPlaySpeed={1000}
  keyBoardControl={true}
  customTransition="all .5"
  transitionDuration={500}
  containerClass="carousel-container"
  //removeArrowOnDeviceType={["tablet", "mobile"]}
 
  dotListClass="custom-dot-list-style"
  itemClass="carousel-item-padding-40-px"
           >
 {
    products.map((productdata,i)=>{ 
    console.log(productdata)
        return(
            <Link as={Link} to={`/product/${productdata.id}`} key={i.id} >
            <Box   textAlign="center" className={classes.wrapper}>
            <img src={productdata.url} className={classes.image}/>
                                <Typography className={classes.text} style={{ fontWeight: 700, color: '#212121' }}>{productdata.title.shortTitle}</Typography>
                                <Typography className={classes.text} style={{ color: 'green' }}>{productdata.discount}</Typography>
                                <Typography className={classes.text} style={{ color: '#212121', opacity: '.6' }}>{productdata.tagline}</Typography>
                                </Box>
                                </Link>       
        )
    })
 }
</Carousel> 
        </Box>
    )
}

import React from 'react'
import Navbar from './Navbar'
import Banner from './Banner'
import { Box, makeStyles } from '@material-ui/core';
import Slide from './Slide';
import MidSection from './MidSection';
const useStyle=makeStyles(theme=>({ 
    component: {
        padding: 10,
        background: '#F2F2F2'
    },
    rrightWrapper:{
        marginTop: 12,
        background: '#FFFFFF',
        width: '17%',
        marginLeft: 10,
        padding: 5,
        [theme.breakpoints.down('md')]: {
            display: 'none'
        }
    },
    leftComponent: {
        width: '83%',
        [theme.breakpoints.down('md')]: {
            width: '100%'
        }
    }
}))
export default function Home() {
    const classes = useStyle();
    const adURL = 'https://rukminim1.flixcart.com/flap/464/708/image/633789f7def60050.jpg?q=70';
    return (
        
      <>
         <Navbar/>
         <Box className={classes.component}>
         <Banner/>
        <Box style={{display:'flex'}}>
        <Box className={classes.leftComponent}>
        <Slide timer={true}
            title="Deal Of The Day"
        />
        </Box>
        <Box className={classes.rrightWrapper}>
            <img src={adURL} style={{width:232}}/>
        </Box>
        </Box>
        <MidSection/>
        <Slide timer={false}
            title="Discont For You"
        />
          <Banner/>
        <Slide timer={false}
             title="Suggested Item"
        />
         <MidSection/>
        <Slide timer={false}
             title="Top Selection"
        />
       
         </Box>
         </>  
       
    )
}

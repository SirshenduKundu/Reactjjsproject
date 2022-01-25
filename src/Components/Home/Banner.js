import React from 'react'
import Carousel from 'react-material-ui-carousel'
import {bannerData} from '../../Constants/Data'
import { makeStyles } from '@material-ui/core'

const useStyle=makeStyles(theme=>({
    img:{
        width: '100%',
        height: 280,
        [theme.breakpoints.down('sm')]: {
            objectFit: 'cover',
            height: 180
        }
    },
    Carousel:{
        marginTop:'20'
    }
}))

export default function Banner() {
    const classes=useStyle()
    return (
        <>
        <Carousel 
        autoPlay={true} 
            animation="slide" 
            indicators={false}
            navButtonsAlwaysVisible={true}
            cycleNavigation={true}
            className={classes.container}
            StylesProvider
            navButtonsProps={{ 
                style: {
                    color: '#494949',
                    backgroundColor: '#FFFFFF',
                    borderRadius: 0,
                    margin: 0,
                    width: 50,
                }
            }}
            className={classes.Carousel}
            >
            {
                bannerData.map((imgg,i)=>{
                    return(
                   <img key={i} src={imgg} className={classes.img}/>
                )})
            }
        </Carousel>
        </>
    )
}

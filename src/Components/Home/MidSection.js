import React from 'react'
import {makeStyles,Grid } from '@material-ui/core'
import {ImageURL} from '../../Constants/Data'

const useStyle=makeStyles({
    wrapper: {
        display: 'flex',
        marginTop: 20,
        justifyContent: 'space-between'
    },
    image: {
        width: '100%'
    }
})
export default function MidSection() {
const classes=useStyle()
const coronaURL = 'https://rukminim1.flixcart.com/flap/3006/433/image/4789bc3aefd54494.jpg?q=50';
    return (
        <>
        <Grid lg={12} sm={12} md={12} xs={12} container className={classes.wrapper}>{
            ImageURL.map((image,i)=>{
                return(

                    <Grid key={i} item lg={4} md={4} sm={12} xs={12}>
                    <img key={i} src={image} className={classes.image} style={{width:'100%'}}></img>
                    </Grid>
                )


            })}
        </Grid>
        <img src={coronaURL} style={{width:'100%'}}/>
        </>
    )
}

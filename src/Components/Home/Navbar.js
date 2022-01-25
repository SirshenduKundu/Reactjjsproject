import { Box, Typography,makeStyles } from '@material-ui/core'
import React from 'react'
import {navData} from '../../Constants/Data'

const useStyle=makeStyles(theme =>({
    component: {
        display: 'flex',
        justifyContent: 'space-between',
        margin: '55px 130px 0 130px',
        overflowX: 'overlay',
        [theme.breakpoints.down('md')]: {
            margin: 0
        }
    },
    container: {
        padding: '12px 8px',
        textAlign: 'center'
    },
    image: {
        width: 75
    },
    text: {
        fontSize: 14,
        fontWeight: 600,
        fontFamily: 'inherit'
    }

}))
export default function Navbar() {
    const classes=useStyle();
    return (
        <Box className={classes.component}>
        {
            navData.map((data,i)=>{
             return(
                 <Box key ={i} className={classes.container}>
                <img  src={data.url } className={classes.image}/>
            <Typography className={classes.text}>
              {data.text}
            </Typography>
            </Box>)
                
            })
        }
        
        </Box>
    )
}

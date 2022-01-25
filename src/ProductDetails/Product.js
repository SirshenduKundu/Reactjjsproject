import React from 'react'
import {products} from '../Constants/Data'
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import { Box } from '@material-ui/core';
import { Link } from 'react-router-dom';
const useStyles = makeStyles({
    root: {
      // maxWidth: 345,
      height: '75vh',
        width:'100%',
     },
     button:{
      //  position:"relative",
      //  left:'50%',
       display:'flex',
       background:"#FB641B"
     }
    // media: {
    //     height: '100vh',
    //     width:'100%',
       
    //   },
  });
  
export default function Product() {
    const classes = useStyles();
    console.log("all product",products);
    return (
        <Box p={5}>
       <Grid container spacing={3}>
      
        {
            products.map((p,i) => (
                <Grid item md={3} lg={3}>
<Card key={i} className={classes.root}>

      <CardActionArea>
        <CardMedia
        className={classes.media}
          component="img"
          alt="Contemplative Reptile"
         
          image={p.detailUrl}
          title="Contemplative Reptile"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
          {p.title.shortTitle}
          </Typography>
          <Typography variant="h6" >
          Price-{p.price.mrp}
          </Typography>
          
        </CardContent>
      </CardActionArea>
     <CardActions>
            <Link to={`/product/${p.id}`} style={{textDecoration:'none'}} >  
  <Button variant="contained" color="secondary" disableElevation className={classes.button} >
       Learn More
  </Button>
           </Link>
      </CardActions>
     
    </Card>
    </Grid>
        )) 
        }
        </Grid>
</Box>
    )
   
}

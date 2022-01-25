import React,{useState} from 'react'
import Button from '@material-ui/core/Button';
import ButtonGroup from '@material-ui/core/ButtonGroup';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    root: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      marginTop: 25,
      '& > *': {
        margin: theme.spacing(2),
      },
    },
  }));
export default function QuantityButton() {
    const classes = useStyles();
    const [count,setcount]=useState(1)

   const handleDecrement=()=>{
setcount(count-1)
    }
   const  handleIncrement=()=>{
setcount(count+1)
   }
    return (
        <div className={classes.root}>
      
      
      <ButtonGroup color="primary" aria-label="outlined primary button group">
        <Button onClick={()=>handleDecrement()} disabled={count === 1}>-</Button>
        <Button>{count}</Button>
        <Button onClick={()=>handleIncrement()}>+</Button>
      </ButtonGroup>
    </div>
    )
}

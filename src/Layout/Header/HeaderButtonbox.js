import React,{useContext} from 'react'
import {Box,Button,makeStyles, Typography} from '@material-ui/core'
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import Badge from '@material-ui/core/Badge';
import {Link} from 'react-router-dom'
//import Button from '@material-ui/core/Button';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import PopupState, { bindTrigger, bindMenu } from 'material-ui-popup-state';
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';

import {LoginContext} from '../../Components/Auth/ContextLogin/ContextLoginProvider'
//import Registration from '../../Components/Auth/Registration/Registration';
//cartttttttttttttttttttttttttttttttttttt
import { CartState } from '../../Context/Context';



const useStyle=makeStyles(theme =>({
    container: {
        display: 'flex',
        [theme.breakpoints.down('sm')]: {
            display: 'block'
        }
    },
    login: {
        color: '#2874f0', 
        background: '#FFFFFF',
        textTransform: 'none',
        fontWeight: 600,
        borderRadius: 2,
        padding: '5px 20px',
        height: 32,
        boxShadow: 'none',
        [theme.breakpoints.down('sm')]: {
            background: '#2874f0',
            color: '#FFFFFF'
        }   
    },
    wrapper: {
        margin: '0 5% 0 auto', 
        display: 'flex',    
        '& > *': {
            marginRight: 50,
            textDecoration: 'none',
            color: '#FFFFFF',
            fontSize: 12,
            alignItems: 'center',
            [theme.breakpoints.down('sm')]: {
                color: '#2874f0',
                alignItems: 'center',
                display: 'flex',
                flexDirection: 'column',
                marginTop: 10
            }      
        },
        [theme.breakpoints.down('sm')]: {
            display: 'block'
        }   
    },

}))

export default function HeaderButtonbox() {
  //login 
const {account,setaccount} = useContext(LoginContext)

    const classes=useStyle()
//     const navigate=useNavigate()
//     const logout=()=>{
//  window.localStorage.clear();//Removes all key/value pairs, if there are any.Dispatches a storage event on Window objects holding an equivalent Storage object
//  navigate('/login')
      
//     }



//carttttttttttttttttttttttttttttt
const {
  state:{cart},
}=CartState()
   
    return (
      <Box className={classes.wrapper}> 
   
  {!window.localStorage.Token ?  ( 
   <>
    { account ? 
    (<Typography>{account} {setaccount}</Typography>) :
<Link as={Link} to="/login" style={{textDecoration:'none'}}>
<Button variant="contained"   className={classes.login}  >
        LOGIN
</Button>
</Link>
  
}
</>
): null
  }
{window.localStorage.Token ? 
<Link as={Link} to="/logout" style={{textDecoration:'none'}}><Button variant="contained" color="secondary">
  Logout
</Button></Link>
:null
}
  
{/* <Button onClick={logout} variant="contained" color="secondary">
        Logout
</Button> */}
      <PopupState variant="popover" popupId="demo-popup-menu">
          {(popupState) => (
            <React.Fragment>
              <Button variant="contained" color="primary" {...bindTrigger(popupState)}>
             More<ArrowDropDownIcon/>
              </Button>
              <Menu {...bindMenu(popupState)}>
                <Link to="/about" style={{textDecoration:'none'}}><MenuItem onClick={popupState.close}>About Us</MenuItem></Link>
                <Link to="/contact" style={{textDecoration:'none'}}><MenuItem onClick={popupState.close}>Contact Us</MenuItem></Link>
                <Link to="/product" style={{textDecoration:'none'}}><MenuItem onClick={popupState.close}>All Product</MenuItem></Link>
               
              </Menu>
            </React.Fragment>
          )}
        </PopupState>

      <Link as={Link} to="/cart" className={classes.container} style={{textDecoration:'none'}}>
      <Badge badgeContent={cart.length} color="secondary">
    <ShoppingCartIcon />
      </Badge>
    <Typography style={{ marginLeft: 10 }} >Cart</Typography>
      </Link>
        
    
      
    
        </Box>
       
    )
}



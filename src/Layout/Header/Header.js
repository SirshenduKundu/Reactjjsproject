import React, { useState } from 'react';
import { AppBar, Toolbar, makeStyles, Typography, Box, Drawer, Button, List } from '@material-ui/core';
import Searchbar from '../Searchbar/Searchbar';
import HeaderButtonbox from './HeaderButtonbox';

import { Link } from 'react-router-dom'

import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
const useStyle = makeStyles(theme => ({
    header: {
        hight: 55,
        background: '#2874f0',
    },
    logo: {
        width: 80,
        marginLeft: 30
    },
    suburl: {
        width: 20,
        height: 20,
        marginLeft: 2
    },
    component: {
        marginLeft: '5%',
        lineHeight: 0,
        color: '#FFFFFF',
        textDecoration:'none'
    },
    container: {
        display: 'flex'
    },
    menuButton: {

        display: 'none',
        [theme.breakpoints.down('sm')]: {
            display: 'block'
        }
    },
    list: {
        width: 250
    },
    customButtons: {
        //margin: '0 5% 0 auto', 
        marginLeft: '4%',
        [theme.breakpoints.down('sm')]: {
            display: 'none'
        }
    }
}))
const Header = () => {
    const classes = useStyle();
    const logoURL = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQNNiC3w_GDHqAIJLn2NN5TsbzKuraR2MB8zw&usqp=CAU';
    const subURL = 'https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/plus_aef861.png';
    const [open, setopen] = useState(false)
    const handleClose = () => {
        setopen(false)
    }
    const handleOpen = () => {
        setopen(true)
    }
    const list = () => (
        <Box className={classes.list} onClick={handleClose}>
            <List>
                <listItem button>
                    <HeaderButtonbox />
                    
                    <Link as={Link} to="/about" style={{textDecoration:'none'}} ><Button variant="contained" color="secondary">
                        About Us
                    </Button></Link><br></br><br></br>
                    <Link as={Link} to="/contact" style={{textDecoration:'none'}} ><Button variant="contained" color="secondary">
                        Contact Us
                    </Button></Link><br></br><br></br>
                    <Link as={Link} to="/product" style={{textDecoration:'none'}} ><Button variant="contained" color="secondary">
                    All Product
                    </Button></Link>
                </listItem>
            </List>
        </Box>
    );
    return (
        <AppBar className={classes.header}>
            <Toolbar>
                <IconButton edge="start" onClick={handleOpen} className={classes.menuButton} color="inherit" aria-label="menu">
                    <MenuIcon />
                </IconButton>

                <Drawer open={open} onClose={handleClose}>{list()}</Drawer>

                <Link as={Link} to='/' className={classes.component} style={{textDecoration:'none'}} >
                    <img src={logoURL} className={classes.logo} alt={"aaa"} />
                    <box className={classes.container}>
                        <Typography >SIRSHENDU<Box component="span" style={{ color: '#FFE500' }}>STORE</Box>
                        </Typography>
                        <img src={subURL} className={classes.suburl} alt={"aaa"} />
                    </box>
                </Link>
                <Searchbar />
                <span className={classes.customButtons}><HeaderButtonbox /></span>
            </Toolbar>
        </AppBar>
    )
}

export default Header

import React,{useState} from 'react';
import {makeStyles } from '@material-ui/core/styles';
import InputBase from '@material-ui/core/InputBase';
import SearchIcon from '@material-ui/icons/Search';
import {products} from '../../Constants/Data'
import { List, ListItem } from '@material-ui/core';
import { Link } from 'react-router-dom';
const useStyle=makeStyles((theme)=>({
    search: {
        borderRadius: 4,
        marginLeft: 10,
        width: '38%',
        backgroundColor: '#ffff',
        display: 'flex'
    },
        
      searchIcon: {
       
        padding: 5,
        height:'100%',
       display: 'flex',
        color: '#ff0000'
      },
      inputRoot: {
        fontSize: 'unset',
        width: '100%'
      },
      inputInput: {
        paddingLeft: 20,
        width: '100%',
      },
      list: {
        position: 'absolute',
        color: '#000',
        background: '#FFFFFF',
        marginTop: 36
      }
}))
export default function Searchbar() {
    const classes=useStyle();
    const [open,setopen]=useState(true)
    const [text,setText]=useState()
    const getText=(text)=>{
      setText(text)
      //console.log(text);
     setopen(false)

    }
    return (
        <div className={classes.search}>
           
            <InputBase
              placeholder="Search for products,brands and more"
              classes={{
                root: classes.inputRoot,
                input: classes.inputInput,
              }}
              
              inputProps={{ 'aria-label': 'search' }}
              onChange={(e)=>getText(e.target.value)}
            />
             <div className={classes.searchIcon}>
              <SearchIcon />
            </div>
            { text &&

              <List className={classes.list} hidden={open}>
              {
                products.filter(product =>
                  product.title.longTitle.toLowerCase().includes(text.toLowerCase())).map(product=>(
                    <Link to={`product/${product.id}`} style={{ textDecoration:'none', color:'inherit'}} onClick={()=>setopen(true)}>
                  <ListItem>
                         {product.title.longTitle}
                  </ListItem>
                  </Link>
                ))
              }
                
              </List>
            }
          </div>
    )
}

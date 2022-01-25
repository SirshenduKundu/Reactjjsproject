import React, { lazy,Suspense } from 'react'
import { Route, Routes, BrowserRouter as Router } from 'react-router-dom'
import { makeStyles } from '@material-ui/core/styles';
import CircularProgress from '@material-ui/core/CircularProgress';
//import AboutUs from '../Components/About/AboutUs'
//import ContactUs from '../Components/Contact/ContactUs'
import Login from '../Components/Auth/Login/Login'

import Registration from '../Components/Auth/Registration/Registration'
import Cart from '../Components/Cart/Cart'
import Home from '../Components/Home/Home'
import Pagenotfound from '../Components/PageNotFound/Pagenotfound'
import Footer from '../Layout/Footer/Footer'
import Header from '../Layout/Header/Header'
import Product from '../ProductDetails/Product'
import ProductView from '../ProductDetails/ProductView'

import Protected from './Protected'
import Checkout from '../Components/Cart/Checkout';
import Logout from '../Components/Auth/Logout/Logout';
import Isauth from './Isauth';
//lazy loding 
const AboutUs =lazy(()=> import('../Components/About/AboutUs'))
const ContactUs=lazy(()=> import('../Components/Contact/ContactUs'))
const useStyles = makeStyles((theme) => ({
    root: {
      display: 'flex',
      '& > * + *': {
        marginLeft: theme.spacing(5),
      },
    },
  }));
const Routing = () => {
    const classes = useStyles();
    // const navigate =useNavigate()
    // const [user, setuser] = useState(null)
    // useEffect(() => {
    //     const userToken = localStorage.getItem('Token')
    //     userToken && JSON.parse(userToken) ? setuser(true) : setuser(false);
    // }, [])
    return (
        <Router>
            <Header />
            <Suspense fallback={ <div className={classes.root} >
      <CircularProgress />
      <CircularProgress color="secondary" />.............Lodding
    </div>}>
                     <Routes>
                {/* {!user && (
                    <>
                        <Route path='/auth' element={<Isauth authenticate={() => setuser(true)} />}></Route>
                    </>
                )} */}
                {/* {user && ( */}
                  
                        {/* <Route path="/about" element={<AboutUs />}></Route>
                        <Route path="/contact" element={<ContactUs />}></Route> */}
                        {/* <Route path="/cart" element={<Cart/>}></Route>
                <Route path="/product/:pid" element={<ProductView/>}></Route> */}
                        {/* <Route path="/product" element={<Product />}></Route> */}
                {/* <Route path="/profile" element={<Profile logout={() => setuser(false)} />}></Route> */}
                    
                {/* )} */}
                <Route path="/" element={<Home />}></Route>
                <Route path="/about" element={<AboutUs/>}></Route>
                <Route path="/checkout" element={<Checkout/>}></Route>
                <Route path="/login" element={<Login />}></Route>
                <Route path="/registration" element={<Registration />}></Route>
                <Route path="/auth" element={<Isauth/>}></Route>
               
                
<Route element={<Protected/>}>
               
                <Route path="/contact" element={<ContactUs/>}></Route>
                <Route path="/product" element={<Product/>}></Route> 
                <Route path="/product/:pid" element={<ProductView />}></Route>
                <Route path="/cart" element={<Cart />}></Route>
                <Route path="/logout" element={<Logout/>}></Route> 
                <Route path="*" element={ <Pagenotfound />}></Route>
</Route>

            </Routes>
            </Suspense>
            <Footer />

        </Router>
    )
}

export default Routing

import React ,{createContext,useContext,useReducer } from 'react'
import { products } from '../Constants/Data';
import Reducers from './Reducers';

const cart =createContext()
export default function Context({children}) {
    products.map((cart,i)=>{
        console.log("cartttttttttttt",cart);
    })
    const [state,dispatch]=useReducer(Reducers,{products:products,cart:[]})
    return (
        <>
            <cart.Provider value={{state,dispatch}}>
               {children}
            </cart.Provider>
        </>
    )
}
export  const CartState=()=>{
    return useContext(cart)
}

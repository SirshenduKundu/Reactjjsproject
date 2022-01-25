import React,{createContext,useState} from 'react'

 export const LoginContext=createContext(null) 

export default function ContextLoginProvider({children}) {
    const [account,setaccount]=useState('')
    return (
       
        <LoginContext.Provider value={{account,setaccount}}>
            {children}
        </LoginContext.Provider>
            
       
    )
}
// export const LoginState=()=>{
// return useContext(LoginContext)
// }

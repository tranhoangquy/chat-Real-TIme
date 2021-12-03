 import { Spin } from 'antd';
import React, {  useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import {auth} from "../../components/firebase/config"


export const AuthContext = React.createContext()

 const AuthProvider = ({children}) => {
  const [user,setUser]= useState({})
  const [isLoading,setIsLoading] = useState(true)
  const history = useHistory()

  useEffect(()=>{
   const unsubscibed = auth.onAuthStateChanged((user)=>{
     if (user) {const {displayName,email,uid,photoURL} = user; setUser({displayName,email, uid, photoURL})
  } 
      user ?  history.push("/") :history.push("/login")
      setIsLoading(false) 
    })
    return()=>{
      unsubscibed()

    }
},[history])
console.log(user);

   return (
     <AuthContext.Provider value={{user}}>
     {isLoading ? <Spin/> : children}  
     {/* {children} */}
     </AuthContext.Provider>
   );
 };
 
 export default AuthProvider;
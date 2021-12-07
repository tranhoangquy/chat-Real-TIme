import React, { createContext, useContext, useMemo, useState } from 'react';
import useFirestore from '../../hooks/useFirestore';
import { AuthContext } from './AuthProvider';

export const AppContext = createContext()

const AppProvider = ({children}) => {

  const [isAddRoomVisible,setIsAddRoomVisible] = useState(false)
  const [idRoom,setIdRoom] = useState('')
  const {user:{uid}} = useContext(AuthContext);
  /**
   * {
   * name: 'room name'
   * description:' mo ta'
   * members: [uid1,uid2,...]
   * }
   */

  const roomsCondition = useMemo(()=>{
    return{
      fieldName: 'members',
      operator: 'array-contains',
      compareValue: uid
    }
  },[uid])

const rooms  = useFirestore('rooms',roomsCondition)
  return (
    <AppContext.Provider value={{rooms,isAddRoomVisible,setIsAddRoomVisible,idRoom,setIdRoom}}>
      {children}
    </AppContext.Provider>
  );
};

export default AppProvider;
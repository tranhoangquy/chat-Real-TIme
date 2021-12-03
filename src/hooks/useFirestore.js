import React from 'react';
import { db } from '../components/firebase/config';


const useFirestore = (collection,condition) => {
  useEffect(()=>{
    let collectionRef =  db.collection(collection).orderBy('createAt')

//condition
/**
 * {
 * fieldName: 'abc,
 * operator: '=='
 *  compareValue:acb
 * * }
 * 
 */

    // if(condition){
    //   !condition.compareValue || !collection.compareValue.length {return} ;

    //   collectionRef.where(condition.feildName, condition.operator, condition.compareValue)
    // }
    
    // .onSnapshot((snapshot)=>{
    //  const data =snapshot.docs.map(doc=>({
    //   ...doc.data(),
    //   id:doc.id
    //  }))
    //  console.log({data,snapshot,docs:snapshot.docs});

    // })
  },[])
};

export default useFirestore;
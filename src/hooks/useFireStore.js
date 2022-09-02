import { useReducer,useEffect, useState } from "react";
import { db } from "../firebase/config";
import {collection,addDoc,serverTimestamp,deleteDoc,doc } from 'firebase/firestore'

let initialState = {
    document : null,
    isPending : false,
    error : null,
    success : null,
}

const firestoreReducer = (state,action) => {

    switch(action.type){

        case 'IS_PENDING':
            return {  isPending : true , document: null, success : false, error : null}

        case 'ADDED_DOCUMENT':
            return {...state,isPending : false,document : action.payload, success : true}

            case 'ERROR':
                return {isPending : false,document : null, success : false,error : action.payload}

        case 'DELETED_DOCUMENT':
            return {...state,isPending : false,success: true,error : null}

        default:
            return state
    }

}


export const useFirestore = (collectionName) => {

    const [response,dispatch] = useReducer(firestoreReducer,initialState);

    const ref = collection(db,collectionName)


  const addDocument = (doc) => {
    dispatch({type : 'IS_PENDING'})

    try{
        const addedDocument = addDoc(ref,{...doc,createdAt : serverTimestamp()})
        dispatch({type : 'ADDED_DOCUMENT' , payload : addedDocument})
    }
    catch(error){
        dispatch({type : 'ERROR', payload : error.message})
        
    }

  }

  const deleteDocument = async  (id) => {
    dispatch({type : 'IS_PENDING'});
    

    try{
       await deleteDoc(doc(db,collectionName,id))
        dispatch({type : 'DELETED_DOCUMENT' })

    }catch(error){
        console.log('Error, see the useFirestore deleteDocument function')
        dispatch({type : 'ERROR', payload : 'Delete Failed'})
    }



  }

  return {addDocument,deleteDocument,response}
    

}
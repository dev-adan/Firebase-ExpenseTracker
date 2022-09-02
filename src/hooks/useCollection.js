import React,{useState,useEffect} from 'react';
import { db } from "../firebase/config";
import {collection,onSnapshot } from 'firebase/firestore'



const useCollection = (collectionName) => {

    const [documents,setDocuments] = useState(null);
    const [error,setError] = useState(null);


    useEffect(() => {

        const ref = collection(db,collectionName);

        const unsub = onSnapshot(ref,(refSnapshot) => {
          
            let results = [];
            refSnapshot.forEach(doc => results.push({id : doc.id,...doc.data()}));
            setDocuments(results);
            setError(null);
        },(error) => {
            console.log(error);
            setError('could not fetch the data, see useCollection')
        })


        return () => unsub();

    },[collectionName])


    return {documents,error}


}

export default useCollection
import {useState} from 'react'
import { auth } from '../firebase/config'
import {  signInWithEmailAndPassword  } from "firebase/auth";
import { useAuthContext } from './useAuthContext'

const useLogin = () => {
    const [error,setError] = useState(null)
    const [isPending,setIsPending] = useState(false)
    const {dispatch} = useAuthContext();


    const login = async (email,password) => {
        setError(null);
        setIsPending(true);

        try{

          const res =  await  signInWithEmailAndPassword (auth,email,password);
            dispatch({type : 'LOGIN',payload : res.user})
            setError(null)
            setIsPending(false)

        }catch(error){
            console.log(error)
            setError(error.message)
            setIsPending(false)
        }
    }


  return {login,error,isPending}
}

export default useLogin
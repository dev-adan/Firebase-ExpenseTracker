import { useState } from "react"
import { auth } from "../firebase/config"
import { createUserWithEmailAndPassword,updateProfile  } from "firebase/auth";


export const useSignup = () => {

    const [error,setError] = useState(null);
    const [isPending,setIsPending] = useState(false);

    const Signup = async (email,password,displayName) => {

        setError(null);
        setIsPending(true);


        try{
           const res = await createUserWithEmailAndPassword(auth, email, password);
         

           if(!res){
            throw new Error('could not complete signup')
           }

           await updateProfile(auth.currentUser,{displayName});

           setIsPending(false);
           setError(null);
            

        }catch(error){
            console.log(error.message)
            setError(error.message)
            setIsPending(false)

        }

    }

    return {error,isPending,Signup}

}
import { useState } from "react"
import { auth } from "../firebase/config"


export const useSignup = () => {
    const [error,setError] = useState(null);
    const [isPending,setIsPending] = useState(false);

}
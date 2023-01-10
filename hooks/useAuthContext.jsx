import { useContext } from "react"
import { AuthContext } from "../context/AuthContext"



export const useAuthContext = ()=>{
    //this hook return to us the value of this context which is the value we passed into the provider component (the state and the dispatch function)
    const context= useContext(AuthContext);

    //if we don't have a value for it
    if(!context){
        throw Error('useAuthContext must be used inside an AuthContextProvider');
    }

    return context;
}
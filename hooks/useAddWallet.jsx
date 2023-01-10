import axios from "axios";
import { useState } from "react"
import { useAuthContext } from "./useAuthContext";



export const useAddWallet =  ()=>{

    const [error, setError] = useState(null);
    const [isLoading, setIsloading] = useState(false);
    const { dispatch } = useAuthContext();

    const addWallet = async (type, adress) => {
        setError(null);
        setIsloading(true);

        try {
            const response = await axios.post('https://apello-api.xyz:4000/api/wallets',{
                type, 
                adress
            });
            const json = response.data;
        

        
            // save the wallet to the local storage
            localStorage.setItem('auth',JSON.stringify(json));
            //update the auth context
            dispatch({type: 'CONNECT_WALLET', payload: json});
            setIsloading(false);
            //console.log('new wallet added',json);
        
            
        } catch (err) {
            setIsloading(false);
            setError(err);
        }
        
        
    }

    return { addWallet, isLoading, error};
}
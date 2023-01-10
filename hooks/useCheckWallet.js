import axios from "axios";
import { useCallback, useState } from "react";



export const useCheckWallet = () => {
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    

    const checkWallet = useCallback( async (adress,token) => {

        setError(null);
        setLoading(true);
        try {

            const response = await axios.get(`https://apello-api.xyz:4000/api/wallets/verify/${adress}`, {
                headers: {
                'Authorization': `Bearer ${token}`
                }
            });
            const {wallet, exist} = response.data;
            //set the context
            //console.log('usecheck valide',exist)
            return {wallet, token};
            
        } catch (err) {
            console.log(err);
            setError(err.message);
            setLoading(false);
            localStorage.removeItem('auth');
        }
        


    },[])

    return {
        loading,
        error,
        checkWallet
    }

}
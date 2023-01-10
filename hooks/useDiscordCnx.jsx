import axios from "axios";
import { useCallback } from "react";
import { useAuthContext } from "./useAuthContext";




export const useDiscordCnx = () => {
    //add the discord user to the db 
    //check the wallet cnx

    //const [error, setError] = useState(null);

    //const { wallet, token } = useAuthContext();

    const authorizeDiscord = async (name, discordId, discordImage, wallet, token)=>{
        //console.log(wallet,token)
        try {
            if(wallet && token){
                const response = await axios.post('https://apello-api.xyz:4000/api/users',{
                    name, 
                    discordId, 
                    discordImage, 
                    wallet
                },{
                    headers: {
                        'Authorization': `Bearer ${token}` 
                    }
                });
                const json = response.data;
                //console.log('new wallet added',json);
            }
        } catch (err) {
            console.log(err);
        }
        
    };

    return {authorizeDiscord};
}
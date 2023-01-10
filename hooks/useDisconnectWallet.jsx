import { useAuthContext } from "./useAuthContext";

export const useDisconnectWallet = ()=>{

    const { dispatch } = useAuthContext();

    const disconnectWallet = () =>{
        // remove wallet from localstorage
        //localStorage.clear();
        localStorage.removeItem('auth');
        
        //dispatch DISCONNECT_WALLET action
        dispatch({type: 'DISCONNECT_WALLET'});
    }

    return {disconnectWallet};
}
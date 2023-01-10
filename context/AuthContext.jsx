import { createContext, useEffect, useReducer } from "react";
import { useCheckWallet } from "../hooks/useCheckWallet";


//create a new context
export const AuthContext = createContext();

/*the reducer function accept two args the state represents the previous state before we're making the change to it
 and the action which is that object that we passed into the dispatch function( it had a type property and a payload) 
 so inside this walletAuthReducer what we do is typically check the action type so what we actually want to do with data(connect, disconnect)   */
export const walletAuthReducer = (state, action ) =>{
    switch (action.type){
        //in each case we return a new value that we want the state to be so we return a new object in essence
        case 'CONNECT_WALLET' : 
            return { 
                wallet : action.payload.wallet,
                token : action.payload.token
             }
        case 'DISCONNECT_WALLET' : 
            return { 
                wallet : null,
                token : null
             }
        default :  
            //we return the original state so there is no changes basically
            return state
    }
}
//to provide that wallet context to our application component tree so that our components can access it
//context provider component that is going to wrap the rest of our application
export const AuthContextProvider = ({ children })=>{
    //UseReducer is similar to usestate in that we get back a state value and a function dispatch to update this state value, and we also specify an initial value for the state 
    //but what's different about it is this reducer function (walletAuthReducer), and how we update the state using this function and also dispatch function
    /*if we want to update this state object, we first of all call the dispatch function and inside the dipatch function 
        we would pass an object as an argument and this object should have a type property which normally 
        a string all caps(majuscule) that describes in words the state change that we want to make :
                        dispatch({type: 'CONNECT_WALLET'})
        the second properrty is a payload property which represents any data we need to make this change:
                        dispatch({type: 'CONNECT_WALLET', payload : data});(the argument inside it is known as an action)
     So when we call this dispatch function in turn our reducer function is invoke (walletAuthReducer) ant it passes the action into it
     so it can do its things and update the state using that information and data.
    */
    const [state, dispatch] = useReducer(walletAuthReducer, {
        //initial value
        wallet: null,
        token : null
    });
    //check the local storage data
    const {loading, error, checkWallet} = useCheckWallet();
    //console.log('WalletContext state : ',state);
    //set th
    useEffect(() => {
        const fillContext = async()=> {
            const auth = JSON.parse(localStorage.getItem('auth'));
            if(auth){
                //console.log('auth context',auth.wallet.adress,auth.token);
                const data = await checkWallet(auth.wallet.adress,auth.token);
                dispatch({type: 'CONNECT_WALLET', payload: data});
                
            }
        }
        fillContext();
        

    }, [checkWallet]);

    return (
        <AuthContext.Provider value={{...state,dispatch}} >
            { children }
        </AuthContext.Provider>
    )
}
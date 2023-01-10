
import { useCallback, useEffect, useState } from "react";
import {TiTick} from "react-icons/ti"
import { useAuthContext } from "../../hooks/useAuthContext";
import { useDiscordCnx } from "../../hooks/useDiscordCnx";

const DiscordConnection = ({currentStep,setcurrentStep}) => {
    

    const { wallet, token } = useAuthContext();
    
    //after step 2 authorization... 
    const [user, setuser] = useState(null);

    const { authorizeDiscord } = useDiscordCnx();

    //to assure
    //const { signBytes,txResult, txError, verifyResult} = useIsConnected()
    const fetchDiscord = useCallback( async() => {
        const fragment = new URLSearchParams(window.location.hash.slice(1));
        const [accessToken, tokenType] = [fragment.get('access_token'), fragment.get('token_type')];
        //console.log('outside',token)
        if (user===null && accessToken !==null && wallet) {
            //console.log('inside')
        
            //console.log('accesstoken & tokenTpe',accessToken,tokenType)
        
            fetch('https://discord.com/api/users/@me', {
              headers: {
                authorization: `${tokenType} ${accessToken}`,
              },
            })
              .then(result => result.json())
              .then(response => {
                //signBytes();
                //console.log("test is connected",txResult, txError, verifyResult);
                
                const {adress, type} = wallet;
                const { username, discriminator, id, avatar } = response;
                //console.log(username,discriminator, id, avatar,typeof(response.avater),response, wallet,walletFromLocalStorage);
                setuser(username);
                

                authorizeDiscord(username, id, avatar, {adress, type}, token );
                
           
              
                // setDiscordinfco("Hello "+username);
                // setDiscorlogin("hidden");
                //console.log("useEffect core...",currentStep);
                setcurrentStep(2);
        
              })
              .catch(console.error);
              window.history.replaceState({}, document.title, "/holder")
        }
    }, [wallet, token]);

    useEffect(() => {
        fetchDiscord();
    }, [fetchDiscord])

    const hundleClick = ()=>{

        window.open(
            'https://discord.com/api/oauth2/authorize?client_id=990757313390465114&redirect_uri=https%3A%2F%2Fapello.xyz%2Fholder&response_type=token&scope=identify'
            ,"_self")
            //https://discord.com/api/oauth2/authorize?client_id=998693764178657342&redirect_uri=http%3A%2F%2Flocalhost%3A3000%2Fholder&response_type=token&scope=identify
            
        
        
    }
    

    return ( 
        <div className={`step-item ${currentStep === 1 && "active"} ${(1<currentStep) && "complete" } `} aria-label="step 1: connet to your Discord">
            <div className="flex  p-6 items-center">
                <span className="step ">
                    {(1<currentStep) ? <TiTick size={24} /> : 1}
                </span>  
                <h3 className="font-bold font-azonix">Connect to Discord</h3>   
            </div>
            
            <div className={`max-h-80 overflow-hidden ${(currentStep !== 1) && "max-h-0"} transition-[max-height] `}>
                <><p className="text-gray-500  step-parag">Terra services links Discord to your crypto wallet. Unlock the community potential of your crypto assets with server roles, token weighted voting and other powerful features.</p>
                <div data-tip="Connect your wallet first." className={`relative ml-14  ${(!wallet) &&  'max-w-fit  before:content-[attr(data-tip)] before:absolute before:px-3 before:py-2 before:left-1/2 before:-top-3 before:w-max before:max-w-xs before:-translate-x-1/2 before:-translate-y-full before:bg-violet before:text-white before:rounded-md before:opacity-0 before:transition-all after:absolute after:left-1/2 after:-top-3 after:after:h-0 after:w-0 after:-translate-x-1/2 after:border-8 after:border-t-violet after:border-l-transparent after:border-b-transparent after:border-r-transparent after:opacity-0 after:transition-all hover:before:opacity-100 hover:after:opacity-100'}`} >
                    <button disabled={(!wallet)} className="clip-button p-2  bg-violet flex gap-x-3 hover:bg-violet/10 hover:scale-110 transition disabled:cursor-not-allowed overflow-visible " onClick={hundleClick}> 
                        <span  className="font-azonix " >connect Discord</span>
                    </button>
                </div>
                </>
            </div>
        </div>
     );
}
 //onMouseOver={(e) => {alert('Please connect your wallet first.')}}
export default DiscordConnection;

/**
 * const hundleClick = async()=>{
        if(wallet.type === "terra"){
            signBytes();
            console.log("test is connected",txResult, txError, verifyResult);
        }
        else{
            if (!window.keplr) {
                alert("Please install keplr extension");
            } else {
                const chainId = "juno-1";
                await window.keplr.enable(chainId);
            const keplrtest = await window.keplr.signDirect(chainId, "signer")
            console.log(keplrtest);
            }
        }
        
        
    }
    //to redirect into discord authorization after the verify
    useEffect(() => {
        if(verifyResult === "Verified"){
            window.open(
                'https://discord.com/api/oauth2/authorize?client_id=998693764178657342&redirect_uri=http%3A%2F%2Flocalhost%3A3000%2Fholder&response_type=token&scope=identify'
                ,"_self")
            
                //https://discord.com/api/oauth2/authorize?client_id=990757313390465114&redirect_uri=https%3A%2F%2Fapello.xyz%2Fholder&response_type=token&scope=identify
        }
    
      
    }, [verifyResult])
 */
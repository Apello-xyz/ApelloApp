import { useWallet, WalletStatus,useConnectedWallet } from "@terra-money/wallet-provider";
import { useState } from "react";
import {TiTick} from "react-icons/ti"


const TerraConnection = ({currentStep,setcurrentStep}) => {

    //terra 
    const {
        status,
        network,
        wallets,
        availableConnectTypes,
        connect,
        disconnect,
      } = useWallet();
    const connectedWallet = useConnectedWallet();

      //to store the wallet adress
      const [walletAdress, setWalletAdress] =useState(null);

      const hundleClick =  ()=>{
        console.log('before',connectedWallet);
        
        connect(availableConnectTypes[0]);
        if(status === WalletStatus.WALLET_CONNECTED){
            console.log(wallets[0].terraAddress)
            setWalletAdress(wallets[0]["terraAddress"]);
            setcurrentStep((prev)=>prev+1);
        }
        //else afficher some errors
        
        console.log('after',connectedWallet);   
      }


    return ( 
        <div className={`step-item ${currentStep === 1 && "active"} ${(1<currentStep) && "complete" } `} aria-label="step 1: connet your wallet">
            <div className="flex  p-6 items-center">
                <span className="step ">
                    {(1<currentStep) ? <TiTick size={24} /> : 1}
                </span>  
                <h3 className="font-bold font-azonix">Connect your wallet</h3>   
            </div>
            {walletAdress && <p className="step-parag text-violet text-xl font-jura">Congratulations! {`Wallet connected(${walletAdress.substring(0, 5)}***${walletAdress.substring(walletAdress.length-4, walletAdress.length-1)})`} </p> }
            <div className={`max-h-80 overflow-hidden ${(currentStep !== 1) && "max-h-0"} transition-[max-height] `}>
                <><p className="text-gray-500  step-parag">Connect your crypto wallets to let all of your assets shine. Join diverse Discord communities and become an active part of making them great.</p>
                <button className="clip-button p-2 ml-14 bg-violet flex gap-x-3 hover:bg-violet/10 hover:scale-110 transition " onClick={hundleClick}> 
                        <span className="font-azonix">connect wallet</span>
                </button></>
            </div>
        </div>
     );
}
 
export default TerraConnection;
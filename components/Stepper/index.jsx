
import { useEffect, useState } from "react";
import DiscordConnection from "./DiscordConnection";
import TerraConnection from "./TerraConnection";
import {TiTick} from "react-icons/ti"
import { useAuthContext } from "../../hooks/useAuthContext";



const Stepper = () => {

    const steps = [
        {
            name:"Connect your wallet",
            p: "Connect your crypto wallets to let all of your assets shine. Join diverse Discord communities and become an active part of making them great.",
            btn: {
                text : "connect wallet",
                click : ()=>{
                    console.log(connect(availableConnectTypes[0]));
                    console.log(wallets);
                    //setWalletAdress(wallets[0]["terraAddress"]);
                }
                
            }

        },
        {
            name:"Connect to Discord",
            p: "Lunar HQ links Discord to your crypto wallet. Unlock the community potential of your crypto assets with server roles, token weighted voting and other powerful features.",
            btn: {
                text : "connect Discord",
            }
        },
        {
            name:"Confirm & go to Discord",
            p: "Lunar HQ links Discord to your crypto wallet. Unlock the community potential of your crypto assets with server roles, token weighted voting and other powerful features.",
            btn: {
                text : "Confirm",
                click : ()=>console.log("done!"),
            }
        },
        
    ]

    const [currentStep, setcurrentStep] = useState(1);
    //comlete all the steps
    const [complete, setcomplete] = useState(false);
    
    const { wallet } = useAuthContext();



     
    
    return ( 
        <section className="">

            
            <div className="mt-10  p-4  ">

                
                <DiscordConnection currentStep={currentStep} setcurrentStep={setcurrentStep}/>

                
                    <div className={`step-item ${currentStep === 2 && "active"} ${(complete) && "complete" } `}>
                        <div className="flex  p-6 items-center">
                            <span className="step ">
                                {(complete) ? <TiTick size={24} /> : 2}
                            </span>  
                            <h3 className="font-bold font-azonix">Confirm & go to Discord</h3>   
                        </div>
                        
                        <div className={`max-h-80 overflow-hidden ${(currentStep !== 2 || complete) && "max-h-0"} transition-[max-height] `}>
                            <><p className="text-gray-500  step-parag">Congratulations! you&apos;ve completed the register, now you can go to Discord</p>
                            <button  className="clip-button p-2 ml-14 bg-violet flex gap-x-3 hover:bg-violet/10 hover:scale-110 transition disabled:bg-black " 
                                
                                onClick={()=>{
                                    setcomplete(true);
                                    }}>
                                    
                                    <span className="font-azonix">Go to Discord</span>
                            </button></>
                        </div>
                    </div>
                
            </div>
        </section>
    );
}
 
export default Stepper;

/**
 * info bar
 * {(!wallet) &&
            (<div className="inline-flex  w-full py-2 px-4 gap-x-3 rounded bg-[#E5F6FD] text-violet ">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 text-[#03a9f4]">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M11.25 11.25l.041-.02a.75.75 0 011.063.852l-.708 2.836a.75.75 0 001.063.853l.041-.021M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9-3.75h.008v.008H12V8.25z" />
                </svg>
                <div className="flex flex-col gap-y-1 ">
                    <span className="text-base font-medium font-azonix">Info</span>
                    <span className="pl-1 text-noir">In order to connect your Discord, your wallet should be connected.  </span>
                </div>

            </div>)}
 */


/**
 * using the steps collections
 * {steps.map((step,i)=>(
                <div key={i} className={`step-item ${currentStep === i+1 && "active"} ${(i+1<currentStep || complete) && "complete" } `}>
                    <div className="flex  p-6 items-center">
                        <span className="step ">
                            {(i+1<currentStep || complete) ? <TiTick size={24} /> : i+1}
                        </span>  
                        <h3 className="font-bold font-azonix">{step.name}</h3>   
                    </div>
                    
                    <div className={`max-h-80 overflow-hidden ${(currentStep !== i+1 || complete) && "max-h-0"} transition-[max-height] `}>
                        <><p className="text-gray-500  step-parag">{step.p}</p>
                        <button className="clip-button p-2 ml-14 bg-violet flex gap-x-3 hover:bg-violet/10 hover:scale-110 transition " 
                            onClick={()=>{
                                currentStep  === steps.length ? setcomplete(true) : setcurrentStep((prev)=>prev+1)

                            }}>
                                
                                <span className="font-azonix">{step.btn.text}</span>
                        </button></>
                    </div>
                </div>
            ))}
 */
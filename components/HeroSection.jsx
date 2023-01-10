import React from 'react';
const HeroSection = () => {
    return ( 
    <section className="container px-[2%] mt-[10%] md:mt-10 mx-auto">
        <div className="flex flex-wrap items-center relative mx-auto">
            
            <div className="w-full md:w-1/2 py-[9%] px-[5%]    content-center ">
                <h2 className="mb-3 sm:mb-6 text-4xl sm:text-5xl  tracking-wide  font-bold uppercase  drop-shadow-text-sm lg:drop-shadow-text-lg selection:bg-bleu selection:text-[#171819]">Enable your discord dao</h2>
                <p className="text-[#e5e5e5] font-jura text-lg ">Create exclusive channels for token holders. Get together, hang-out, discuss, vote and unlock the true value of your community.</p>
                <div className="py-9 flex flex-col gap-y-2" aria-label="members benifist" >
                    <div className="inline-flex ">
                        <span className="">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
                        </svg>
                        </span>
                        <span className="pl-1 font-jura">Verifiable Ownership</span>
                    </div>
                    <div className="inline-flex ">
                        <span className="">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M12 18v-5.25m0 0a6.01 6.01 0 001.5-.189m-1.5.189a6.01 6.01 0 01-1.5-.189m3.75 7.478a12.06 12.06 0 01-4.5 0m3.75 2.383a14.406 14.406 0 01-3 0M14.25 18v-.192c0-.983.658-1.823 1.508-2.316a7.5 7.5 0 10-7.517 0c.85.493 1.509 1.333 1.509 2.316V18" />
                        </svg>

                        </span>
                        <span className="pl-1 font-jura">Dynamic Role Distribution</span>
                    </div>
                    <div className="inline-flex ">
                        <span className="">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
                        </svg>

                        </span>
                        <span className="pl-1 font-jura">Token-gated Channels</span>
                    </div>
                </div>
                <input type="button" value={'Add to Server'} className="bg-bleu rounded-md text-base font-medium uppercase tracking-wide text-center text-noir px-2 py-3  hover:cursor-pointer focus:outline-none focus-visible:ring-2 ring-blanc hover:bg-orange/90 " />

                {/*<div className="flex justify-evenly ">
                    <input type="button" value={'Add to server'} className="bg-bleu rounded-md text-base font-medium uppercase tracking-wide text-center text-noir px-2 py-3  hover:cursor-pointer focus:outline-none focus-visible:ring-2 ring-blanc hover:bg-orange/90 " />
                    <input type="button" value={'Add to app'} className="bg-bleu rounded-md text-base font-medium uppercase tracking-wide text-center text-noir px-2 py-3  hover:cursor-pointer focus:outline-none focus-visible:ring-2 ring-blanc hover:bg-orange/90 " />

                </div>*/
                }
            </div>

            <div className="w-full md:w-1/2">
            <video className="" src="test.webm" autoPlay loop muted></video>
                
            </div>

        </div>

    </section> );
}
 
export default HeroSection;
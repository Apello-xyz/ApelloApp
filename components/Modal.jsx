import { useTerraCnx, useJunoCnx, useStargazeCnx } from './Wallets';

const Modal = ({open, close}) => {

    

    return ( 
    <div className="fixed inset-0 w-full h-full bg-black opacity-70 z-50 blur-lg " aria-label="modal">

        <div className="m-8 max-w-sm w-full p-6 ">
            <div className="relative ">
                <h2 className="">Coonect wallet</h2>
                <button className="absoluet top-0 right-0" aria-label="close modal">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                    </svg>

                </button>
            </div>
            <div className="mt-6 flex flex-col justify-center gap-y-4">
                <button className="inline-flex gap-x-2 bg-[#212529]" onClick={useTerraCnx}>
                    <img src="src/assets/terra_station.png" className="h-5" alt="tera station logo" />
                    <span className="font-azonix ">Terra Station</span>
                </button>
                <button className="inline-flex gap-x-2 bg-[#212529]" onClick={useStargazeCnx}>
                    <img src="./assets/terra_station.png" className="h-5" alt="tera station logo" />
                    <span className="font-azonix ">Stargaze</span>
                </button>
                <button className="inline-flex gap-x-2 bg-[#212529]" onClick={useJunoCnx}>
                    <img src="/assets/terra_station.png" className="h-5" alt="tera station logo" />
                    <span className="font-azonix ">Juno</span>
                </button>
            </div>
        </div>

    </div> );
}
 
export default Modal;
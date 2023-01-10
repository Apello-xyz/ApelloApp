import Footer from '../components/Footer'
import Image from 'next/image'

export default function Home() {
  //255,203,2
  return (
    <>
      
      <section className="container px-[2%] mt-[10%] md:mt-4  mx-auto">
          <div className="flex flex-wrap items-center relative mx-auto">
              
              <div className="w-full md:w-1/2 py-[5%] lg:px-[5%]    content-center ">
                  <h2 className="mb-3 sm:mb-6 text-4xl sm:text-5xl  tracking-wide  font-bold uppercase  drop-shadow-text-sm lg:drop-shadow-text-lg selection:bg-bleu selection:text-[#171819]" > Let&apos;s build bridges not walls</h2>
                  <p className="text-[#e5e5e5] font-jura text-lg selection:bg-violet ">Take your DAO to the next level with APELLO!</p>
                  <a href='https://discord.com/api/oauth2/authorize?client_id=1047250675324690592&permissions=268527680&scope=bot' className=" block max-w-fit bg-black rounded text-base font-medium uppercase tracking-wide text-center  text-white px-2 py-3  hover:cursor-pointer focus:outline-none focus-visible:ring-2 ring-blanc  my-9 shadow-[inset_0_0_0_rgba(108,99,255,0.6)] ease-out duration-500 hover:shadow-[inset_144.4px_0_0_rgba(108,99,255,0.99)] border-solid border-violet border-2">Add to Server</a>
                  

                  {/*<div className="flex justify-evenly ">
                      <input type="button" value={'Add to server'} className="bg-bleu rounded-md text-base font-medium uppercase tracking-wide text-center text-noir px-2 py-3  hover:cursor-pointer focus:outline-none focus-visible:ring-2 ring-blanc hover:bg-orange/90 " />
                      <input type="button" value={'Add to app'} className="bg-bleu rounded-md text-base font-medium uppercase tracking-wide text-center text-noir px-2 py-3  hover:cursor-pointer focus:outline-none focus-visible:ring-2 ring-blanc hover:bg-orange/90 " />

                  </div>*/
                  }
              </div>

              <div className="w-full md:w-1/2 lg:px-[5%] ">
                <div className="relative ">
                  <Image src="/apello-01-01.png" alt='Home image' className='!h-full' width={600}  height={600} />
                  <Image src="/terra sdt.png" alt='terra blockchain' className='absolute top-[35%] left-[22%] w-[12%] animate-bounce-float' width={60}  height={80} />
                  <Image src="/Aptos-home.png" alt='aptos blockchain' className='absolute top-[41%] right-[30%] w-[12%] animate-bounce-float' width={60}  height={80} />
                  <Image src="/stargaze-home.png" alt='stargaze blockchain' className='absolute bottom-[20%] right-[22%] w-[12%] animate-bounce-float' width={60}  height={80} />
                  <Image src="/juno-home.png" alt='juno blackchain' className='absolute bottom-[20%] left-[22%] w-[12%] animate-bounce-float' width={60}  height={80} />
                </div>
                  
              </div>

          </div>

      </section>
      <Footer />
    </>
  )
}

import Head from "next/head";
import Navbar from "../components/Navbar";
import ParticlesBg from "../components/ParticlesBg";

const Layout = ({ children }) => {
    return ( 
        <div className="App relative text-blanc h-full md:min-h-screen overflow-hidden w-full">
            <Head>
                <title>Apello</title>
                <link rel="icon" type="image/svg+xml" href="/lyre-08.png" />
                <meta name="viewport" content="initial-scale=1.0, width=device-width" />
            </Head>
            <ParticlesBg />
            <Navbar />
            {children}
        </div>
     );
}
 
export default Layout;
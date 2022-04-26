import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Head from "next/head";
import Dropdown from "./Dropdown";
import { useState, useEffect} from "react";
import logo from "../public/img/logo.png"

export default function Layout({ children, title, description }) {
    
    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => {
      setIsOpen(!isOpen);
    }

    useEffect(() =>{
        const hideMenu = () => {
            if(window.innerWidth > 1024 && isOpen) {
                setIsOpen(false);
                console.log("The nav menu is resized")
            }
        }

        window.addEventListener("resize", hideMenu);

        return () => {
            window.removeEventListener("resize", hideMenu);
        }
    })
    
    return (
    <div>
        <Head>
        <title>{title}</title>
        <meta name="description" content={description} image={logo}/>
        <link rel="icon" href="/favicon.ico" />
        </Head>
        <nav>
        <Navbar isOpen={isOpen} toggle={toggle}/>
        <Dropdown isOpen={isOpen} toggle={toggle}/>
        </nav>
        <main>{children}</main>
        <script src="https://apps.elfsight.com/p/platform.js" defer></script>
        <div className="elfsight-app-55ac348d-8925-484c-962d-c0efaa30f6cb"></div>
        <footer>
        <Footer />
        </footer>
    </div>
    );
}

Layout.defaultProps = {
    title : "ProAnalytics" ,
    description : "Este es un sitio web de ProAnalytics ",
};
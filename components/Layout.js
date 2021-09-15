import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Head from "next/head";

export default function Layout({ children, title, description }) {
    return (
    <div>
        <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
        <link rel="icon" href="/favicon.ico" />
        </Head>
        <nav>
        <Navbar />
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
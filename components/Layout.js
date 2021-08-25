import NavBar from "../components/NavBar";
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
        <NavBar />
        </nav>
        <main>{children}</main>
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
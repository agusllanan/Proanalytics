import "./styles/global.css"
import Head from 'next/head';
import ReactGA from 'react-ga';

const TRACKING_ID = "G-C17VELZVCD"; // OUR_TRACKING_ID
ReactGA.initialize(TRACKING_ID);


function MyApp({ Component, pageProps }) {
  return (
    <>
    <Head>
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <title> Proanalytics </title>
      <meta 
      key="description"
      name="Proanalytics" 
      content="Pagina RRHH"/>
    </Head>
    <Component {...pageProps} />
    </>
  )
}
export default MyApp

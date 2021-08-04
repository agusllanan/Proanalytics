import 'tailwindcss/tailwind.css';
import Head from 'next/head';



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

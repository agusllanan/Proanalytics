import "./styles/global.css"
import Head from 'next/head';
import Script from 'next/script';

function MyApp({ Component, pageProps }) {
  return (
    <>
    <Head>
        <Script strategy="lazyOnload" src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}`}
        />
        <Script strategy="lazyOnload">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}', {
            page_path: window.location.pathname,
            });
          `}
        </Script>
      
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

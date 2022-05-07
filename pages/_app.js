import "./styles/global.css"
import { useEffect } from 'react'
import { useRouter } from 'next/router'
import * as ga from '../lib/ga'
import Head from 'next/head'
import siteLogo from '/public/img/logo.png'

function MyApp({ Component, pageProps }) {
  const router = useRouter()

  useEffect(() => {
    const handleRouteChange = (url) => {
      ga.pageview(url)
    }
    //When the component is mounted, subscribe to router changes
    //and log those page views
    router.events.on('routeChangeComplete', handleRouteChange)

    // If the component is unmounted, unsubscribe
    // from the event with the `off` method
    return () => {
      router.events.off('routeChangeComplete', handleRouteChange)
    }
  }, [router.events])

  return (
    <>
    <Head>
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta property="og:image" src={siteLogo} />
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

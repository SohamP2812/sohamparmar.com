import '../styles/globals.css'
import Container from '../components/Container'
import Head from 'next/head'

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Soham Parmar 💻</title>
        <link rel="icon" href="/SohamParmarLogo.png" />
      </Head>
      <Container>
        <Component {...pageProps} />
      </Container>
    </>
  )
}

export default MyApp

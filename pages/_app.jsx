import '../styles/globals.css'
import Container from '../components/Container'
import Head from 'next/head'
import { ThemeProvider } from 'next-themes'

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Soham Parmar 💻</title>
        <link rel="icon" href="/SohamParmarLogo.png" />
      </Head>
      <ThemeProvider defaultTheme="light" attribute="class">
        <Container>
          <Component {...pageProps} />
        </Container>
      </ThemeProvider>
    </>
  )
}

export default MyApp

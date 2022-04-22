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
        <meta name="image" property="og:image" content="/SohamParmarLogo.png" />
        <meta
          name="description"
          property="og:description"
          content="My Personal Website"
        />
        <meta name="author" content="Soham Parmar" />
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

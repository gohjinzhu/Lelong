import Router from 'next/router';
import Head from 'next/head';
import NProgress from 'nprogress';
import { ChakraProvider } from '@chakra-ui/react'
import { AuthProvider } from '../components/context/AuthContext';
import Layout from '../components/Layout'
import theme from '../styles/theme';

function MyApp({ Component, pageProps }) {
  NProgress.configure({ showSpinner: false })

  Router.events.on('routeChangeStart', () => {
    NProgress.start();
  });

  Router.events.on('routeChangeComplete', () => {
    NProgress.done();
  });

  return (
    <>
      <Head>

      </Head>
      <ChakraProvider theme={theme}>
        <AuthProvider>
          <Layout>
            <Component {...pageProps} />
          </Layout>
        </AuthProvider>
      </ChakraProvider>
    </>
  )
}

export default MyApp

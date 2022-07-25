import '../styles/globals.css'
import Head from 'next/head'
import { AppProps } from 'next/app'
import { MantineProvider, createEmotionCache } from '@mantine/core'

// Client-side cache, shared for the whole session of the user in the browser.
const emotionCache = createEmotionCache({ key: 'mantine' })

export default function App(props: AppProps) {
  const { Component, pageProps } = props

  return (
    <>
      <Head>
        <title>Template with Mantine</title>
        <meta
          name="viewport"
          content="minimum-scale=1, initial-scale=1, width=device-width"
        />
      </Head>
      <MantineProvider
        withGlobalStyles
        withNormalizeCSS
        emotionCache={emotionCache}
        theme={{
          /** Put your mantine theme override here */
          colorScheme: 'dark',
        }}
      >
        <Component {...pageProps} />
      </MantineProvider>
    </>
  )
}

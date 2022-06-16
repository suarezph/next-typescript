import * as React from 'react'
import Head from 'next/head'
import { AppProps } from 'next/app'
import { ThemeProvider } from '@mui/material/styles'
import CssBaseline from '@mui/material/CssBaseline'
import createEmotionCache from '../lib/createEmotionCache'
import { CacheProvider, EmotionCache } from '@emotion/react'
import theme from '@/assets/styles/theme'
import { IntlProvider } from 'react-intl'
import useSWR from 'swr'
import { useRouter } from 'next/router'
import { flatten } from '@/utils'
import type { GetServerSideProps, GetServerSidePropsContext } from 'next'
import { CompareSharp } from '@mui/icons-material'

// Client-side cache, shared for the whole session of the user in the browser
const clientSideEmotionCache = createEmotionCache()

interface MyAppProps extends AppProps {
  emotionCache?: EmotionCache
}

const fetchTranslation = async (locale: string) => {
  const response = await fetch('/api/locales', {
    headers: { 'Accept-Language': locale },
  })
  return await response.json()
}

function Main(props: MyAppProps) {
  console.log(props)
  const { Component, emotionCache = clientSideEmotionCache, pageProps } = props
  const { locale } = useRouter()
  const [translations, setTranslations] = React.useState({})
  const { data } = useSWR([locale], fetchTranslation)

  React.useEffect(() => {
    setTranslations(data)
  }, [data])

  return (
    <CacheProvider value={emotionCache}>
      <Head>
        <title>HashGameHub</title>
        <meta name="viewport" content="initial-scale=1, width=device-width" />
      </Head>
      <ThemeProvider theme={theme('dark')}>
        {/* CSSBaseline kickstart for CSS */}
        <CssBaseline />
        <IntlProvider
          messages={flatten(translations)}
          locale={locale || 'en'}
          defaultLocale="en"
        >
          {translations ? <Component {...pageProps} /> : null}
        </IntlProvider>
      </ThemeProvider>
    </CacheProvider>
  )
}

export const getServerSideProps: GetServerSideProps = async (
  context: GetServerSidePropsContext,
) => {
  return {
    props: { test: context },
  }
}

export default Main

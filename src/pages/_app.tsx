import * as React from 'react'
import Head from 'next/head'
import { AppProps } from 'next/app'
import { motion } from 'framer-motion'

// !!Theme UI
import { ThemeProvider } from '@mui/material/styles'
import createEmotionCache from '../lib/createEmotionCache'
import { CacheProvider, EmotionCache } from '@emotion/react'
import theme from '@/assets/styles/theme'

// !!Translation
import { appWithTranslation } from 'next-i18next'
// Client-side cache, shared for the whole session of the user in the browser
const clientSideEmotionCache = createEmotionCache()

interface MyAppProps extends AppProps {
  emotionCache?: EmotionCache
}

function App(props: MyAppProps) {
  const { Component, emotionCache = clientSideEmotionCache, pageProps } = props
  const [mounted, setMounted] = React.useState<boolean>(false)
  React.useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) return null

  return (
    <CacheProvider value={emotionCache}>
      <Head>
        <title>HashGameHub</title>
        <meta name="viewport" content="initial-scale=1, width=device-width" />
      </Head>
      <ThemeProvider theme={theme('dark')}>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: mounted ? 1 : 0 }}
        >
          <Component {...pageProps} />
        </motion.div>
      </ThemeProvider>
    </CacheProvider>
  )
}

export default appWithTranslation(App)

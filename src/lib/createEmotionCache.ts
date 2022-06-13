import createCache from '@emotion/cache'

const createEmotionCache = () => {
  return createCache({ key: 'cache' })
}

export default createEmotionCache

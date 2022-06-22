const HttpBackend = require('i18next-http-backend/cjs')
const ChainedBackend = require('i18next-chained-backend').default
// const LocalStorageBackend = require('i18next-localstorage-backend').default
const path = require('path')

module.exports = {
  i18n: {
    defaultLocale: 'en',
    locales: ['en', 'cn'],
    localeDetection: false,
  },
  backend: {
    backendOptions: [
      {
        expirationTime: 60 * 60 * 1000,
        loadPath: 'http://localhost:3000/api/locales?lng={{lng}}&ns={{ns}}',
        allowMultiLoading: false,
        crossDomain: false,
      },
    ],
    backends: typeof window !== 'undefined' ? [HttpBackend] : [],
  },
  debug: false,
  load: 'languageOnly',
  localePath: path.resolve('./locales'),
  use: typeof window !== 'undefined' ? [ChainedBackend] : [],
}

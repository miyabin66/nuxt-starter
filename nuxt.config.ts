const BASE_URL = process.env.BASE_URL || 'http://localhost:3000'
const GA_ID = process.env.GA_ID || 'null'

const TITLE = 'Create Nuxt App'
const DESCRIPTION = 'Generated by create nuxt app'
const OG_IMAGE = BASE_URL + '/ogp.jpg'

const meta = {
  viewport: 'width=device-width, initial-scale=1.0',
  title: TITLE,
  description: DESCRIPTION,
  keywords: [].join(),
  basePath: '/',
  url: BASE_URL,
  ogImage: OG_IMAGE,
  faviconPath: '/favicon.ico',
  faviconType: 'image/x-icon',
  appleTouchIconPath: '',
  applicationName: '',
  image: OG_IMAGE,
  card: 'summary_large_image',
}

export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: meta.title,
    htmlAttrs: {
      lang: 'ja',
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: meta.description },
      {
        hid: 'format-detection',
        name: 'format-detection',
        content: 'telephone=no',
      },
      { hid: 'keywords', name: 'keywords', content: meta.keywords },

      { hid: 'og:url', property: 'og:url', content: meta.url },
      { hid: 'og:image', property: 'og:image', content: meta.url },
      { hid: 'og:title', property: 'og:title', content: meta.title },
      {
        hid: 'og:description',
        property: 'og:description',
        content: meta.description,
      },

      { hid: 'twitter:title', property: 'twitter:title', content: meta.title },
      {
        hid: 'twitter:description',
        property: 'twitter:description',
        content: meta.description,
      },
      { hid: 'twitter:image', property: 'twitter:image', content: meta.url },
      { hid: 'twitter:card', property: 'twitter:card', content: meta.card },

      meta.applicationName && {
        hid: 'application-name',
        name: 'application-name',
        content: meta.applicationName,
      },
      meta.applicationName && {
        hid: 'apple-mobile-web-app-title',
        name: 'apple-mobile-web-app-title',
        content: meta.applicationName,
      },
    ],
    link: [
      {
        hid: 'icon',
        rel: 'icon',
        type: meta.faviconType,
        href: meta.faviconPath,
      },
      meta.appleTouchIconPath && {
        hid: 'apple-touch-icon',
        rel: 'apple-touch-icon',
        href: meta.appleTouchIconPath,
      },
    ],
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: ['modern-css-reset'],

  styleResources: {
    scss: ['@/assets/scss/common.scss'],
  },

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/typescript
    '@nuxt/typescript-build',
    // https://go.nuxtjs.dev/stylelint
    '@nuxtjs/stylelint-module',
    '@aceforth/nuxt-optimized-images',
    GA_ID && [
      '@nuxtjs/google-analytics',
      {
        id: GA_ID,
      },
    ],
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
    ['@nuxtjs/style-resources'],
    [
      'nuxt-compress',
      {
        gzip: {
          cache: true,
        },
        brotli: {
          threshold: 10240,
        },
      },
    ],
  ],

  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {
    // Workaround to avoid enforcing hard-coded localhost:3000: https://github.com/nuxt-community/axios-module/issues/308
    baseURL: '/',
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
    babel: {
      plugins: [['@babel/plugin-proposal-private-methods', { loose: true }]],
    },
  },

  target: 'static',

  server: {
    host: '0.0.0.0',
  },

  optimizedImages: {
    optimizeImages: true,
    mozjpeg: {
      quality: 50,
    },
    pngquant: {
      quality: [0.3, 0.5],
    },
    gifsicle: {
      interlaced: true,
      optimizationLevel: 3,
    },
    svgo: {
      options: {
        multipass: true,
        datauri: 'enc',
        js2svg: {
          indent: 2,
          pretty: true,
        },
      },
    },
    webp: {
      quality: 50,
    },
  },

  generate: {
    dir: 'public',
  },
}

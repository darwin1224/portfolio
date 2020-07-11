const config = {
  mode: 'universal',
  target: 'static',
  server: {
    port: 3000,
    host: '0.0.0.0',
  },
  generate: {
    fallback: true,
  },
  head: {
    title: 'Darwin Personal Website',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        hid: 'description',
        name: 'description',
        content: 'Darwin Personal Website.',
      },
      {
        name: 'keyword',
        content: 'programming,frontend,nuxtjs,portfolio,website',
      },
      {
        name: 'og:title',
        content: 'Darwin Personal Website',
      },
      {
        name: 'og:description',
        content: 'Darwin personal website and blog.',
      },
      {
        name: 'og:type',
        content: 'portfolio.',
      },
      {
        name: 'og:image',
        content:
          'https://res.cloudinary.com/darwin1224/image/upload/c_scale,h_300,w_500/v1594365182/work_f8irso.png',
      },
      {
        name: 'og:url',
        content: 'https://darwin1224.netlify.app',
      },
      {
        name: 'twitter:title',
        content: 'Darwin Personal Website',
      },
      {
        name: 'twitter:description',
        content: 'Darwin personal website and blog.',
      },
      {
        name: 'twitter:creator',
        content: '@darwin1224',
      },
      {
        name: 'twitter:image',
        content:
          'https://res.cloudinary.com/darwin1224/image/upload/c_scale,h_300,w_500/v1594365182/work_f8irso.png',
      },
      {
        name: 'twitter:site',
        content: 'https://darwin1224.netlify.app',
      },
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
  },
  css: ['@/assets/main.scss'],
  plugins: [],
  buildModules: [
    '@nuxt/typescript-build',
    '@nuxtjs/pwa',
    '@nuxtjs/stylelint-module',
    '@nuxtjs/google-analytics',
    '@nuxtjs/gtm',
    '@aceforth/nuxt-optimized-images',
  ],
  googleAnalytics: {
    id: 'UA-172133677-1',
  },
  gtm: {
    id: 'GTM-THMSGKG',
  },
  optimizedImages: {
    optimizeImages: true,
  },
  modules: ['bootstrap-vue/nuxt', '@nuxtjs/sentry', '@nuxtjs/robots'],
  bootstrapVue: {
    bootstrapCSS: false,
    bootstrapVueCSS: false,
    components: [
      'BContainer',
      'BRow',
      'BCol',
      'BFormInput',
      'BButton',
      'BNavbar',
      'BNavbarToggle',
      'BCollapse',
      'BNavbarNav',
      'BImg',
      'BForm',
    ],
  },
  sentry: {
    dsn:
      'https://85614909388f4ffe82afefc2bde53167@o311426.ingest.sentry.io/5321503',
  },
  robots: {
    UserAgent: '*',
    Disallow: '',
  },
  build: {},
}

export default config

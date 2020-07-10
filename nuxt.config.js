const config = {
  mode: 'universal',
  target: 'static',
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
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      {
        rel: 'stylesheet',
        href:
          'https://fonts.googleapis.com/css2?family=Poppins:wght@200;300;400;500;600;700;800',
      },
      {
        rel: 'stylesheet',
        href:
          'https://fonts.googleapis.com/css2?family=Inter:wght@200;300;400;500;600;700',
      },
    ],
  },
  css: ['@/assets/main.scss'],
  plugins: [],
  components: true,
  buildModules: [
    '@nuxt/typescript-build',
    '@nuxtjs/stylelint-module',
    '@nuxtjs/google-analytics',
  ],
  googleAnalytics: {
    id: 'UA-172133677-1',
  },
  modules: ['bootstrap-vue/nuxt', '@nuxtjs/pwa', '@nuxtjs/sentry'],
  bootstrapVue: {
    bootstrapCSS: false,
    bootstrapVueCSS: false,
    componentsPlugin: ['BVToastPlugin'],
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
      'BToast',
    ],
  },
  sentry: {
    dsn:
      'https://85614909388f4ffe82afefc2bde53167@o311426.ingest.sentry.io/5321503',
  },
  build: {},
}

export default config

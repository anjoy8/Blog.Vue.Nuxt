import pkg from './package'

export default {
  mode: 'universal',

  /*
  ** Headers of the page
  */
  head: {
    title: pkg.name,
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: pkg.description }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },

  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#fff' },
  vender:[
    'element-ui', 'axios', '~untils/index.js'
  ],

  /*
  ** Global CSS
  */
  css: [
    'element-ui/lib/theme-chalk/index.css',
    {src: '@/style/vue-blog-sq.css', lang: 'css'}

  ],

  /*
  ** Plugins to load before mounting the App
  */
  plugins: [
    '@/plugins/element-ui',
    { src: "~plugins/server_site/index", ssr: false }

  ],

  /*
  ** Nuxt.js modules
  */
  modules: [
    // Doc: https://axios.nuxtjs.org/usage
    '@nuxtjs/axios',
    '@nuxtjs/proxy'
  ],
  /*
  ** Axios module configuration
  */
  axios: {
    // See https://github.com/nuxt-community/axios-module#options
  },

  /*
  ** Build configuration
  */
  build: {
    build: {
      vendor: ['element-ui', 'axios', 'Button', 'Input', 'Tabs', 'Message', 'TabPane', 'Row', 'Col', 'Loading', 'Notification', 'Icon']
    },

    /*
    ** You can extend webpack config here
    */
    extend(config, ctx) {
    }
  },
  proxy: [
    ['/api', { target: 'http://localhost:8081' }],
    ['/images', { target: 'http://localhost:8081' }],
    // ['/api', { target: 'http://123.206.33.109:8081' }],
    //['/images', { target: 'http://123.206.33.109:8081' }],
  ]
}

module.exports = {
  /*
  ** Headers of the page
  */
  head: {
    title: 'nuxt',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, height=device-height, user-scalable=no, initial-scale=1.0, minimum-scale=1.0, maximum-scale=1.0' },
      { hid: 'keywords', name: 'keywords', content: 'vue，nuxt，ssr' },
      { hid: 'description', name: 'description', content: 'a server-side-render website built with nuxt' },
      { hid: 'location', name: 'location', content: 'province = 上海; city = 上海; coord = 121.487899,31.249162' },
      { hid: 'http-equiv', 'http-equiv': 'X-UA-Compatible', content: 'IE=edge,chrome=1' },
      { hid: 'http-equiv', 'http-equiv': 'cache-control', content: 'no-cache' },
      { hid: 'applicable-device', name: 'applicable-device', content: 'mobile' },
      { hid: 'apple-mobile-web-app-capable', name: 'apple-mobile-web-app-capable', content: 'yes' },
      { hid: 'apple-mobile-web-app-status-bar-style', name: 'apple-mobile-web-app-status-bar-style', content: 'black' },
      { hid: 'format-detection', name: 'format-detection', content: 'telephone=no' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico?v1' }
    ]
  },
  /*
  ** Global CSS
  */
  css: ['~/assets/css/main.scss'],
  /*
  ** Plugins
  */
  plugins: [
    { src: '~plugins/element-ui', ssr: true },
    { src: '~plugins/localstorage', ssr: false },
    { src: '~plugins/cookie', ssr: false }
  ],
  /*
  ** Add axios,mint-ui,vue-cookie globally
  */
  build: {
    //publicPath: 'https://cdn.rongzi.com/',
    vendor: ['axios', 'element-ui', 'vue-cookie'],
    babel: {
      'plugins': [['component', [
        {
          'libraryName': 'element-ui',
          "styleLibraryName": "theme-default"
        },
        'transform-async-to-generator',
        'transform-runtime'
      ]]],
      comments: true
    },
    /*
    ** Run ESLINT on save
    */
    extend (config, ctx) {
      const inlineSizeThreshold = 10000
      config.module.rules.filter(v => v.test.toString() === String(/\.(png|jpe?g|gif|svg)$/)).map(v => { v.options.limit = inlineSizeThreshold })
      config.module.rules.filter(v => v.test.toString() === String(/\.(woff2?|eot|ttf|otf)(\?.*)?$/)).map(v => { v.options.limit = inlineSizeThreshold })
      if (ctx.isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/
        })
      }
    }
  }
}

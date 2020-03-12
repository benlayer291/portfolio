import head from './config/head'

export default {
  mode: 'universal',
  /*
   ** Headers of the page
   */
  head,
  /*
   ** Customize the progress-bar color
   */
  loading: false,
  /*
   ** Global CSS
   */
  css: [
    {
      lang: 'postcss',
      src: '~/assets/css/base.css'
    }
  ],

  /*
   ** Build configuration
   */
  build: {
    postcss: {
      plugins: {
        'postcss-import': {},
        'postcss-calc': {},
        'postcss-nested': {},
        'postcss-preset-env': {
          stage: 1
        }
      }
    }
  }
}


const path = require(`path`);

module.exports = {
  pluginOptions: {
    i18n: {
      locale: 'it',
      fallbackLocale: 'en',
      localeDir: 'i18n/locales',
      enableLegacy: true,
      runtimeOnly: false,
      compositionOnly: false,
      fullInstall: true
    }
  },
  configureWebpack: 
  {
    resolve: {
      symlinks: false,
      alias: {
          vue: path.resolve(`./node_modules/vue`)
      }
    },
    module: {
      rules: [
        {
          test: /\.json5$/i,
          loader: 'json5-loader',
          type: 'javascript/auto',
        },
      ]
    }
  }
}
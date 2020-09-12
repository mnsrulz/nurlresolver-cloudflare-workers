const webpack = require('webpack')

module.exports = {
  mode: "production",    
  context: __dirname,
  entry: "./index.js",
  node: {
    fs: 'empty',
    net: 'empty',
    tls: 'empty',
    dns: 'empty'
  },
  plugins: [
    new webpack.DefinePlugin({
      "global.GENTLY": false
    }),
    // new webpack.LoaderOptionsPlugin({
    //   // test: /\.xxx$/, // may apply this only for some modules
    //   options: {
    //     alias: {
    //       'inherits': 'inherits/inherits_browser.js',
    //       'superagent': 'superagent/lib/client',
    //       'emitter': 'component-emitter',
    //     },
    //   }
    // })
  ],
}
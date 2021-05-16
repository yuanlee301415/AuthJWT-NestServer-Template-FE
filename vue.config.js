'use strict'
const port = process.env.port || process.env.npm_config_port || 9527 // dev port

console.log('ENV:', process.env.ENV)
console.log('NODE_ENV:', process.env.NODE_ENV)
console.log('VERSION:', process.env.VUE_APP_VERSION)
console.log('TARGET:', process.env.VUE_APP_TARGET)
console.log('Build time:', new Date().toLocaleString())

// All configuration item explanations can be find in https://cli.vuejs.org/config/
module.exports = {
  devServer: {
    port,
    open: false,
    overlay: {
      warnings: false,
      errors: true
    },
    proxy: {
      [process.env.VUE_APP_BASE_API]: {
        target: process.env.VUE_APP_TARGET,
        changeOrigin: true,
        pathRewrite: {
          ['^' + process.env.VUE_APP_BASE_API]: '/api/v1'
        }
      }
    }
  }
}

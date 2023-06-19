const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  devServer: {
    port : 3000
  },
  chainWebpack: (config) => {
    config.plugin('html').tap((args) => {
      args[0].title = 'ParkSpace';
      return args;
    });
  },
})
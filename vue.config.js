const { resolve } = require("path");
module.exports = {
  publicPath: '/',
  /* 输出文件目录：在npm run build时，生成文件的目录名称 */
  outputDir: 'dist',
  /* 放置生成的静态资源 (js、css、img、fonts) 的 (相对于 outputDir 的) 目录 */
  assetsDir: "assets",
  /* 是否在构建生产包时生成 sourceMap 文件，false将提高构建速度 */
  productionSourceMap: false,
  /* 默认情况下，生成的静态资源在它们的文件名中包含了 hash 以便更好的控制缓存，你可以通过将这个选项设为 false 来关闭文件名哈希。(false的时候就是让原来的文件名不改变) */
  filenameHashing: false,
  /* 代码保存时进行eslint检测 */
  lintOnSave: false,

  // webpack-dev-server 相关配置
  devServer: {
    open: process.platform === 'darwin',
    port: 8093,
    host: '0.0.0.0',
    https: false,
    hotOnly: false,
    disableHostCheck: true,
    open:true,
    historyApiFallback: true
  },
  css: {
    loaderOptions: {
      postcss: {
        plugins: [
         
        ]
      }
    }
  },
  pluginOptions: { // 第三方插件配置
    // ...
    plugins: {
      
    }
  },
  // 展示图形化信息
  chainWebpack: config => {
    // 定义文件夹的路径
    config.resolve.alias
      .set('@', resolve('src'))
      .set('assets', resolve('src/assets'))
      .set('components', resolve('src/components'))
      .set('router', resolve('src/router'))
      .set('store', resolve('src/store'))
      .set('views', resolve('src/views'));
    // let miniCssExtractPlugin = new MiniCssExtractPlugin({
    //   filename: 'assets/[name].[hash:8].css',
    //   chunkFilename: 'assets/[name].[hash:8].css'
    // });
    // config.plugin('extract-css').use(miniCssExtractPlugin);

    // config.plugin('extract-css').use(miniCssExtractPlugin)
    // config.plugin("loadshReplace").use(new LodashModuleReplacementPlugin());
    // config
    //   .plugin('webpack-bundle-analyzer')
    //   .use(BundleAnalyzerPlugin);

    // 移除 prefetch 插件
    config.plugins.delete('prefetch');
    // 移除 preload 插件，避免加载多余的资源
    config.plugins.delete('preload');

  },
  configureWebpack: config => {
    // 忽略打包配置
    // config.externals = {
    //   vue: 'Vue',
    //   'vue-router': 'VueRouter',
    //   axios: 'axios',
    //   vant: 'vant'
    // }
    // 公共代码抽离
    config.optimization = {
      // 分割代码块
      splitChunks: {
        cacheGroups: {
          //公用模块抽离
          common: {
            chunks: 'initial',
            minSize: 0, //大于0个字节
            minChunks: 2, //抽离公共代码时，这个代码块最小被引用的次数
          },
          //第三方库抽离
          vendor: {
            priority: 1, //权重
            test: /node_modules/,
            chunks: 'initial',
            minSize: 0, //大于0个字节
            minChunks: 2, //在分割之前，这个代码块最小应该被引用的次数
          },
        },
      },
      
    }
  },

}
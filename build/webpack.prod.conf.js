'use strict'
const path = require('path')
const utils = require('./utils')
const webpack = require('webpack')
const config = require('../config')
const merge = require('webpack-merge')
const baseWebpackConfig = require('./webpack.base.conf')
const CopyWebpackPlugin = require('copy-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const OptimizeCSSPlugin = require('optimize-css-assets-webpack-plugin')
const chunkSorters = require('html-webpack-plugin/lib/chunksorter')
const {VueLoaderPlugin} = require('vue-loader')

// 处理最新版的HtmlWebpackPlugin插件在webpack4.x版本下循环引用依赖兼容问题
const depSort = chunkSorters.dependency;
chunkSorters.auto = chunkSorters.dependency = (chunks, ...args) => {
  try {
    return depSort(chunks, ...args)
  } catch (e) {
    return chunks.sort((a, b) => {
      if (a.id === 'app') {
        return 1
      } else if (b.id === 'app') {
        return -1
      } else if (a.entry !== b.entry) {
        return b.entry ? -1 : 1
      }
      return 0
    })
  }
};
const seen = new Set();
const nameLength = 4;

const webpackConfig = merge(baseWebpackConfig, {
  mode: 'production',
  entry: {
    vendors: ['vue', 'vuex', 'vue-router', 'axios', 'qs']//将vue vuex 等打包在一起
  },
  module: {
    rules: utils.styleLoaders({
      sourceMap: config.build.productionSourceMap,
      extract: true,
      usePostCSS: true
    })
  },
  devtool: config.build.productionSourceMap ? config.build.devtool : false,
  output: {
    path: config.build.assetsRoot,
    filename: utils.assetsPath('js/[name].[chunkhash].js'),
    chunkFilename: utils.assetsPath('js/[id].[chunkhash].js'),
    publicPath: '/'
  },
  optimization: {
    moduleIds: 'hashed',
    useExports: true,
    sideEffects: true,
    concatenateModules: true,
    noEmitOnErrors: true,
    splitChunks: {
      chunks: 'all',
      cacheGroups: {
        vendors: {
          name: 'vendors',
          test: /[\\/]node_modules[\\/]/,
          priority: 10,
          chunks: 'initial',
        }
      },
      common: {
        name: 'common',
        test: path.resolve(__dirname, 'src/components'),
        minChunks: 2,
        priority: 5,
        reuseExistingChunk: true
      }
    },
    // 提取webpack运行时的代码
    runtimeChunk: {
      name: 'manifest'
    }
  },
  optimization: {
    splitChunks: false,
  },
  plugins: [
    // http://vuejs.github.io/vue-loader/en/workflow/production.html
   /* new webpack.DefinePlugin({
      'process.env': env
    }),*/
    new VueLoaderPlugin(),

    new MiniCssExtractPlugin({
      filename: utils.assetsPath('css/[name].[contenthash].css'),
      chunkFilename: utils.assetsPath('css/[id].[contenthash].css'),
    }),

/*    new UglifyJsPlugin({
      uglifyOptions: {
        compress: {
          warnings: false
        }
      },
      sourceMap: config.build.productionSourceMap,
      parallel: true
    }),*/
    // extract css into its own file
 /*   new ExtractTextPlugin({
      filename: utils.assetsPath('css/[name].[contenthash].css'),
      // Setting the following option to `false` will not extract CSS from codesplit chunks.
      // Their CSS will instead be inserted dynamically with style-loader when the codesplit chunk has been loaded by webpack.
      // It's currently set to `true` because we are seeing that sourcemaps are included in the codesplit bundle as well when it's `false`,
      // increasing file size: https://github.com/vuejs-templates/webpack/issues/1110
      allChunks: true,
    }),*/
    // Compress extracted CSS. We are using this plugin so that possible
    // duplicated CSS from different components can be deduped.
    new OptimizeCSSPlugin({
      cssProcessorOptions: {
        parser: require("postcss-safe-parser"),
        discardComments: {removeAll: true}
      }
    }),
    // generate dist index.html with correct asset hash for caching.
    // you can customize output by editing /index.html
    // see https://github.com/ampedandwired/html-webpack-plugin
    new HtmlWebpackPlugin({
      filename: config.build.index,
      template: 'index.html',
      inject: true,
      hash: true,
      minify: {
        removeComments: true,
        collapseWhitespace: true,
        removeAttributeQuotes: true
        // more options:
        // https://github.com/kangax/html-minifier#options-quick-reference
      },
      // necessary to consistently work with multiple chunks via CommonsChunkPlugin
      chunksSortMode: (a,b)=>{
        if (a.entry !== b.entry){
          return b.entry? -1 : 1
        }else {
          return 0
        }
      }
    }),

    // keep module.id stable when vendor modules does not change
    // new webpack.HashedModuleIdsPlugin(),
    // enable scope hoisting
    // new webpack.optimize.ModuleConcatenationPlugin(),
    // split vendor js into its own file
  /*  new webpack.optimize.CommonsChunkPlugin({
      name: 'vendor',
      minChunks (module) {
        // any required modules inside node_modules are extracted to vendor
        return (
          module.resource &&
          /\.js$/.test(module.resource) &&
          module.resource.indexOf(
            path.join(__dirname, '../node_modules')
          ) === 0
        )
      }
    }),*/
    // extract webpack runtime and module manifest to its own file in order to
    // prevent vendor hash from being updated whenever app bundle is updated
/*    new webpack.optimize.CommonsChunkPlugin({
      name: 'manifest',
      minChunks: Infinity
    }),*/
    // This instance extracts shared chunks from code splitted chunks and bundles them
    // in a separate chunk, similar to the vendor chunk
    // see: https://webpack.js.org/plugins/commons-chunk-plugin/#extra-async-commons-chunk
 /*   new webpack.optimize.CommonsChunkPlugin({
      name: 'app',
      async: 'vendor-async',
      children: true,
      minChunks: 3
    }),*/

    // copy custom static assets

    // 将webpack提取的运行时代码内联到index.html，减少http请求数
/*    new ScriptExtHtmlWebpackPlugin({
      inline: /manifest\..*\.js$/
    }),*/

    // 保持chunk id 稳定，以便异步块具有一致的哈希值
    new webpack.NamedChunksPlugin(chunk => {
      if (chunk.name) {
        return chunk.name;
      }
      const modules = Array.from(chunk.modulesIterable);
      if (modules.length > 1) {
        const hash = require("hash-sum");
        const joinedHash = hash(modules.map(m => m.id).join("_"));
        let len = nameLength;
        while (seen.has(joinedHash.substr(0, len))) len++;
        seen.add(joinedHash.substr(0, len));
        return `wwt-${joinedHash.substr(0, len)}`;
      } else {
        return modules[0].id;
      }
    }),


    new CopyWebpackPlugin([
      {
        from: path.resolve(__dirname, '../static'),
        to: config.build.assetsSubDirectory,
        ignore: ['.*']
      }
    ])
  ]
})

if (config.build.productionGzip) {
  const CompressionWebpackPlugin = require('compression-webpack-plugin')

  webpackConfig.plugins.push(
    new CompressionWebpackPlugin({
      asset: '[path].gz[query]',
      algorithm: 'gzip',
      test: new RegExp(
        '\\.(' +
        config.build.productionGzipExtensions.join('|') +
        ')$'
      ),
      threshold: 10240,
      minRatio: 0.8
    })
  )
}

if (config.build.bundleAnalyzerReport) {
  const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin
  webpackConfig.plugins.push(new BundleAnalyzerPlugin())
}

module.exports = webpackConfig

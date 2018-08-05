const path = require('path');
const webpack = require('webpack');
const HtmlPlugin = require('html-webpack-plugin');
const utils = require('./utils');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

const YAML = require('yamljs');
// const xOption = process.cwd();

// 编译前做的事
// 获取 yml 配置信息
// 获取所有页面
utils.gerRouterList();

/****************************************************
 * config entry
 ***************************************************/
const entry = {};

// ./src/index.ts
entry.app = [`${__dirname}/router-list.tsx`];


/****************************************************
 * config output
 ***************************************************/
const output = {};
output.publicPath = './';
output.path = path.join(process.cwd(), 'dist');
output.filename = `static/js/[name]-[hash:5].js`;


/****************************************************
 * config resolve
 ***************************************************/
const resolve = {
  extensions: [".ts", ".tsx",  ".less", ".js"],
  alias: {
    'src': path.resolve('src'),
    'assets': path.resolve('src/assets'),
    'entities': path.resolve('src/components'),
    'pages': path.resolve('src/pages'),
    'models': path.resolve('src/models'),
    'styles': path.resolve('src/styles'),
    'services': path.resolve('src/services'),
  }
};

/****************************************************
 * config module
 ***************************************************/
const stylePrivate = new ExtractTextPlugin(
  {
    filename: `static/styles/style-[hash:5].css`,
    allChunks: true,
  });
const moduleOptions = {
  rules: []
};

//typescript
//----------------
// ts
moduleOptions.rules.push({
  test: /\.(ts|tsx)$/,
  loader: 'ts-loader',
  options: {
    allowTsInNodeModules: true
  }
});

// tslint
moduleOptions.rules.push({
  test: /\.(ts|tsx)$/,
  enforce: 'pre',
  exclude: /node_modules/,
  loader: 'tslint-loader',
});

// css
moduleOptions.rules.push({
  test: /\.css$/,
  loader: stylePrivate.extract({
    fallback:"style-loader",
    use: utils.getCssLoader(),
    publicPath: '/'
  })
});
// less
moduleOptions.rules.push({
  test: /\.less$/,
  loader: stylePrivate.extract({
    fallback:"style-loader",
    use: utils.getLessLoader(),
    publicPath: '/'
  })
});
// image
moduleOptions.rules.push({
  test: /\.(png|jpe?g|gif|svg)(\?.*)?$/,
  loader: 'url-loader',
  query: {
    limit: 1000,
    name: `static/resources/[name]-[hash:5].[ext]`,
    publicPath: '/'
  }
});

// font
moduleOptions.rules.push({
  test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/,
  loader: 'url-loader',
  query: {
    limit: 1000,
    name: `static/resources/[name]-[hash:5].[ext]`,
    publicPath: '/'
  }
});

/****************************************************
 * config plugins
 ***************************************************/
const plugins = [stylePrivate];
plugins.push(new webpack.DefinePlugin(utils.getConfigDefinePlugin()));
plugins.push(new HtmlPlugin(utils.getConfigHtmlTemplate()));

/****************************************************
 * config target
 ***************************************************/

let target = 'web';
// if ('server' === env.BUILD_TYPE) {
//   target = 'node';
// }

const mode = 'development'; // process.env.NODE_ENV;

module.exports = {entry, mode, output, module: moduleOptions, resolve, plugins, target};
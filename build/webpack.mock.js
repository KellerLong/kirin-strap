const path = require('path');
const webpack = require('webpack');
const HtmlPlugin = require('html-webpack-plugin');
const utils = require('./utils');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

// const xOption = process.cwd();
const NODE_ENV = process.env.NODE_ENV;
const BUILD_WAY = process.env.BUILD_WAY;
// 编译前做的事
// 获取 yml 配置信息
// 获取所有页面
// utils.gerRouterList();

/****************************************************
 * config entry
 ***************************************************/
const entry = {};

// ./src/index.ts
entry.mock = [`${__dirname}/mock-entry.ts`];


/****************************************************
 * config output
 ***************************************************/
const output = {};
output.publicPath = './';
output.path = __dirname;
output.filename = `mock.js`;
output.libraryTarget = 'commonjs2';



/****************************************************
 * config module
 ***************************************************/
const moduleOptions = {
  rules: []
};

moduleOptions.rules.push({
  test: /\.(ts|tsx)$/,
  enforce: 'pre',
  loader: 'ts-loader',
});


const resolve = {
  extensions: [".ts", ".tsx",   ".js"],
  alias: {
    'mock': path.resolve('mock'),
  }
};

/****************************************************
 * config target
 ***************************************************/

let target = 'node';


const mode = 'development';

module.exports = {entry, mode, output, module: moduleOptions, resolve, target, watch: true, watchOptions: {
    aggregateTimeout: 300,
    poll: 1000
  }};
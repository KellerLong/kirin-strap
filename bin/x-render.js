#!/usr/bin/env node

/**
 * Module dependencies.
 */

const program = require('commander');
const webpackConfig = require('../build/webpack.config');
const utils = require('../build/utils');

program
  .version('0.0.1', '-v, --version')
  .option('build-client,  build-client [type]', 'build to static debug or dev or build')
  .option('init [dir],  build-client [type]', 'build to static debug or dev or build')
  .option('build-server, build-server [type]', 'build to server debug or dev or build')
  .option('--dev, buildDev [type]', 'build to server debug or dev or build')
  .option('--debug, buildDebug [type]', 'build to server debug or dev or build')
  .option('--prod, buildProd [type]', 'build to server debug or dev or build')
  .parse(process.argv);
// 初始化一个项目

if (program.buildClient) {
  // 编译客户端
  utils.build(webpackConfig);
}


if (program.buildServer) {
  // 编译服务端
}

if (program.init) {
  // 初始化一个项目
}

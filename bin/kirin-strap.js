#!/usr/bin/env node

/**
 * Module dependencies.
 */

const program = require('commander');

const utils = require('../build/utils');

program
  .version('0.0.1', '-v, --version')
  .option('build-client,  build-client [type]', 'build to static debug or dev or build')
  .option('init [dir],  build-client [type]', 'build to static debug or dev or build')
  .option('build-server, build-server [type]', 'build to server debug or dev or build')
  .option('--dev, dev [type]', 'build to server debug or dev or build')
  .option('--debug, debug [type]', 'build to server debug or dev or build')
  .option('--prod, prod [type]', 'build to server debug or dev or build')
  .parse(process.argv);
// 初始化一个项目

if (program.buildClient) {
  process.env.NODE_ENV = 'development';
  process.env.BUILD_WAY = 'development';

  if (program.pord) {
    process.env.BUILD_WAY = 'production';
    process.env.NODE_ENV = 'production';
  }
  if (program.debug) {
    process.env.BUILD_WAY = 'debug';
    process.env.NODE_ENV = 'development';
  }

  // 编译客户端
  const webpackConfig = require('../build/webpack.config');

  if (program.dev) {
    utils.dev(webpackConfig);
  } else {
    utils.build(webpackConfig);
  }
}


if (program.buildServer) {
  // 编译服务端
}

if (program.init) {
  // 初始化一个项目
}

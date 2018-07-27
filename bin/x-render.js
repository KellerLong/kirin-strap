#!/usr/bin/env node

/**
 * Module dependencies.
 */

var program = require('commander');

program
  .version('0.0.1', '-v, --version')
  .option('build-client,  build-client [type]', 'build to static debug or dev or build')
  .option('build-server, build-server [type]', 'build to server debug or dev or build')
  .option('--dev, buildDev [type]', 'build to server debug or dev or build')
  .option('--debug, buildDebug [type]', 'build to server debug or dev or build')
  .option('--prod, buildProd [type]', 'build to server debug or dev or build')
  .parse(process.argv);
// 初始化一个项目

// 编译项目
console.log(program);

if (program.buildClient) console.log('  - buildClient');
if (program.buildServer) console.log('  - buildServer');
if (program.bbqSauce) console.log('  - bbq');

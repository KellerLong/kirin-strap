const path = require('path');
const webpack = require('webpack');

/****************************************************
 * config entry
 ***************************************************/
const entry = {};

// ./src/index.ts
entry.app = [`./src/index.ts`];

/****************************************************
 * config output
 ***************************************************/
const output = {};
output.publicPath = './';
output.path = __dirname;
output.filename = `index.js`;
output.libraryTarget = 'commonjs2';



/****************************************************
 * config resolve
 ***************************************************/
const resolve = {
  extensions: [".ts", ".tsx", ".js"],
  alias: {
    'src': path.resolve('src'),
  }
};

/****************************************************
 * config module
 ***************************************************/
const moduleOptions = {
  rules: []
};

//typescript
//----------------
// ts
moduleOptions.rules.push({
  test: /\.(ts|tsx)$/,
  exclude: /node_modules/,
  loader: 'ts-loader',
  include: [path.resolve('src')]
});

// tslint
moduleOptions.rules.push({
  test: /\.(ts|tsx)$/,
  enforce: 'pre',
  exclude: /node_modules/,
  loader: 'tslint-loader',
  include: [path.resolve('src')],
});


/****************************************************
 * config plugins
 ***************************************************/
const plugins = [];
// plugins.push(new webpack.DefinePlugin()};

/****************************************************
 * config target
 ***************************************************/

const target = 'node';
const mode = process.env.NODE_ENV;

webpack({entry, mode, output, module: moduleOptions, resolve, plugins, target}, ( error, stats ) => {
  // error
  if( error ) throw error;
  // config of output style
  const outputConfig        = {};
  outputConfig.colors       = true;
  outputConfig.modules      = false;
  outputConfig.chunks       = false;
  outputConfig.chunkModules = false;
  // output stats
  process.stdout.write( `${stats.toString( outputConfig )}\n` );
  // exit node
  process.exit();
});
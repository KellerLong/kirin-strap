const path = require('path');
const webpack = require('webpack');

/****************************************************
 * config entry
 ***************************************************/
const entry = {};

// ./src/index.ts
entry.app = [`./src/x-render/index.ts`];

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

const webpackConfig = {entry, mode, output, module: moduleOptions, resolve, plugins, target};

const buildList = [
  {
    entry: './src/x-render/index.ts',
    output: 'index.js',
  },
  {
    entry: './src/util/index.ts',
    output: 'util.js',
  },
  {
    entry: './src/network/index.ts',
    output: 'network.js',
  },
  {
    entry: './src/model/index.ts',
    output: 'model.js',
  },
  {
    entry: './src/component/index.ts',
    output: 'component.js',
  },
];

let buildIndex = 0;
function build (buildOption) {
  buildIndex++;
  webpackConfig.entry.app = [buildOption.entry];
  webpackConfig.output.filename = buildOption.output;
  webpack(webpackConfig, ( error, stats ) => {
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
    if ( buildIndex === buildList.length ) { process.exit(); }

    build(buildList[buildIndex]);
  });
}

build(buildList[buildIndex]);
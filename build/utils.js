const webpack  = require("webpack");
const path = require("path");
const fs = require("fs");
const express              = require("express");
const WebpackDevMiddleware = require("webpack-dev-middleware");
const WebpackHotMiddleware = require("webpack-hot-middleware");
/**
 * some function of webpack use
 */
class Util {
  // 默认值配置

  constructor() {
    const YAML = require('yamljs');
    this.XRenderOption = YAML.load(path.resolve('config/x-render.yml'));
  }

  /**
   * build config
   * @param webpackConfig
   */
  build ( webpackConfig ) {
    // build
    webpack( webpackConfig, ( error, stats ) => {
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
  }

  dev(webpackConfig) {
    const env                   = process.env;
    // set compiler build
    const compiler              = webpack( webpackConfig );
    // create server of express
    const app                   = express();

    const devConfig             = {};
    devConfig.publicPath        = webpackConfig.output.publicPath;
    devConfig.stats             = 'minimal';
    devConfig.hot               = true;
    devConfig.quiet             = false;  //  向控制台显示任何内容
    devConfig.noInfo            = true;   //  显示无信息到控制台（仅警告和错误）
    //  切换到延迟模式
    //  这意味着没有观看，而是重新编译每个请求
    devConfig.lazy              = false;
    // create hot middleware and dev middleware
    const hotMiddleware         = WebpackHotMiddleware( compiler);
    const devMiddleware         = WebpackDevMiddleware( compiler, devConfig );

    // add event
    compiler.plugin("compilation", ( compilation ) => {
      compilation.plugin( "html-webpack-plugin-after-emit", ( data, cb ) => {
        hotMiddleware.publish({ action : "reload" });
        // cb();
      });
    });

    // http use dev and hot loading
    app.use( devMiddleware );
    app.use( hotMiddleware );

    // listen port
    app.listen( 8080, () => {
      console.log( `Listening on ${8080}` );
    });
  }

  /**
   *
   * @returns {{}}
   */
  getConfigHtmlTemplate () {
    const option        = {}; // html
    option.filename     = "index.html";
    option.template     = "index.html";
    return option;
  }

  /**
   *
   */
  getConfigDefinePlugin () {
    // const BUILD_TYPE        = process.env.BUILD_TYPE;
    const NODE_ENV          = process.env.NODE_ENV;
    const env               = {};

    env.NODE_ENV            = `"${NODE_ENV}"`;
    env.XRenderOption       =  JSON.stringify(this.XRenderOption);
    // env.BUILD_TYPE          = `"${BUILD_TYPE}"`;

    return { "process.env" : env };
  }

  /**
   *
   */
  //getConfigCommons () {
  //  const option            = {};
  //  option.name             = "common";
  //  option.filename         = `${process.env.DIRECTORY_OUTPUT_STATIC}/js/[name]-[hash:5].js`;
  //  return option;
  //}

  getConfigOptimize () {
    const option            = {};
    option.compress         = { warnings: false };
    option.sourceMap        = true;
    return option;
  }

  getConfigPWAManifest() {
    const option            = {};
    const env               = process.env;
    option.name = env.APP_NAME;
    option.short_name = env.APP_SHORT_NAME;
    option.description = env.APP_SHORT_DESCRIPTION;
    option.background_color = env.APP_BACKGROUND_COLOR;
    option.icons = [
      {
        src: path.resolve(env.APP_ICON),
        sizes: [96, 128, 192, 256, 384, 512] // multiple sizes
      },
      {
        src: path.resolve(env.APP_ICON),
        size: "1024x1024" // you can also use the specifications pattern
      }
    ];
    return option;
  }

  getCssLoader() {
    const env               = process.env;
    return [
      {
        loader: 'css-loader',
        options: {
          minimize: 'production' === env.NODE_ENV
        }
      }
    ];
  }

  getLessLoader() {
    const env               = process.env;
    //const cssLoader = [...this.getCssLoader()];
    //cssLoader.push({
    //  loader: 'less-loader'
    //  });
    return [
      {
        loader: 'css-loader',
        options: {
          modules: true,
          localIdentName: "[name]-[local]-[hash:5]",
          minimize: 'production' === env.NODE_ENV
        }
      },
      {
        loader: 'postcss-loader',
        options: {
          sourceMap: true,
          config: {
            path: '.postcssrc.js'
          }
        }
      },
      {
        loader: "less-loader"
      },
      {
        loader: "postcss-loader",
        options: {
          sourceMap: true,
          plugins: [
            require("stylelint")()
          ]
        }
      }
    ];
  }

  gerRouterList() {
    const cwd = process.cwd();
    // 获取所有page
    const allPages = this.getFile(path.join(cwd, 'src', 'pages'), 'pages');
    // 读取路由配置
    const pageRouter = this.getRouterConfig(allPages);
  }

  getRouterConfig(pageList) {
    let routerConfig = [];
    const cwd = process.cwd();
    pageList.map(pagePath => {
      const filePath = path.join(cwd, 'src', pagePath);
      // 读取文件
      const code = fs.readFileSync(filePath, {encoding: 'utf-8'});

      code.replace(/\@Route\((.*)\)/ig, (str, path) => {
        const models = [];
        code.replace(/\@Model\([\'|\"](.*)[\'|\"]\)/ig, (str, modelName) => {
          models.push(`import('models/${modelName}.ts')`)
        })
        routerConfig.push(` {
    path: ${path},
    component: () => import('${pagePath}'),
    models: [${models.join(',')}],
  }`);
      });

      fs.writeFileSync(path.join(__dirname, 'router-config.ts'), `export default [\n${routerConfig.join(',\n')}\n];\n`);
    });
  }

  getFile(pathFull, rootPath) {
    const allFiles = fs.readdirSync(pathFull);
    let retArray = [];
    allFiles.map( filePath => {
      const longPath = path.join(pathFull,filePath);
      const stat = fs.statSync(longPath);
      if (stat.isFile() && /\.tsx$/.test(filePath)) {
        retArray.push(`${rootPath}/${filePath}`);
      }
      if (stat.isDirectory()) {
        retArray = retArray.concat(this.getFile(longPath, `${rootPath}/${filePath}`));
      }
    });
    return retArray;
  }
}

module.exports = new Util();

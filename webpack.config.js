const path = require("path");
const VueLoaderPlugin = require("vue-loader/lib/plugin");
const HTMLPlugin = require("html-webpack-plugin");
const webpack = require("webpack");

const isDev = process.env.NODE_ENV === "development";

const config = {
  target: "web",
  entry: path.join(__dirname, "src/index.js"),
  output: {
    filename: "bundle.js",
    path: path.join(__dirname, "dist")
  },
  module: {
    rules: [
      {
        test: /\.vue$/,
        loader: "vue-loader"
      },
      {
        test: /\.jsx$/,
        loader: "babel-loader"
      },
      {
        test: /\.css$/,
        use: [
          "style-loader", 
          "css-loader"
        ]
      },
      {
        test: /\.styl(us)?$/,
        use: [
          "style-loader", 
          "css-loader",
          {
            loader:'postcss-loader',
            options:{
              sourceMap:true
            }
          },
          'stylus-loader'
        ]
      },
      {
        test: /\.(gif|jpg|jpeg|png|svg)/,
        use: [
          {
            loader: "url-loader",
            options: {
              limit: 1024,
              name: "[name]-jyk.[ext]"
            }
          }
        ]
      }
    ]
  },
  plugins: [
    new webpack.DefinePlugin({
      "process.env": {
        NODE_ENV: isDev ? '"development"' : '"production"'
      }
    }),
    new VueLoaderPlugin(),
    new HTMLPlugin()
  ]
};

if (isDev) {
  config.devtool = "#cheap-module-eval-source-map"; //帮助浏览器调试代码
  config.devServer = {
    port: 8000,
    host: "0.0.0.0",
    overlay: {
      errors: true
    },
    hot: true //只刷新局部组件  不刷新页面
    // historyFallback:{   //把一些错误页面统一映射到一个地址

    // }
    // open:true  //执行npm run dev 会自动打开浏览器
  };
  config.plugins.push(
    //启动hot:true需要的plugin
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoEmitOnErrorsPlugin()
  );
}

module.exports = config;

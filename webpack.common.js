const ExtractTextPlugin = require('extract-text-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');

function generateConfig(outputJs, outputHtml, plugins) {
  const extractCss = new ExtractTextPlugin('dist/bundle.css');
  const extractIndex = new ExtractTextPlugin(outputHtml);
  const htmlWebpackPlugin = new HtmlWebpackPlugin({
    filename: outputHtml,
    minify: {
      collapseWhitespace: true,
      removeComments: true,
      removeScriptTypeAttributes: true
    },
    template: './resources/html/index.html',
    scriptSource: outputJs,
    title: 'awesome-game-template'
  });
  const defaultPlugins = [
    extractCss,
    extractIndex,
    htmlWebpackPlugin
  ];

  return {
    entry: ['./src/index.js', './resources/css/index.css'],
    output: {
      filename: outputJs
    },
    devtool: 'source-map',
    module: {
      rules: [
        {
          test: /\.jsx?$/,
          loader: 'babel-loader',
          exclude: /node_modules/,
          options: {
            presets: ['env', 'react', 'flow']
          }
        },
        {
          test: /\.css$/,
          include: [
            path.resolve(__dirname, 'resources/css')
          ],
          use: extractCss.extract('css-loader')
        },
        {
          test: /\.txt$/,
          use: 'raw-loader'
        }
      ]
    },
    plugins: defaultPlugins.concat(plugins)
  };
}


module.exports = generateConfig;

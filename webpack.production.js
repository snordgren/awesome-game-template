const UglifyJSPlugin = require('uglifyjs-webpack-plugin');

const common = require('./webpack.common.js');

module.exports = common('./dist/bundle.min.js', './index.html', [new UglifyJSPlugin()]);

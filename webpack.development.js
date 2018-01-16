const common = require('./webpack.common.js');

module.exports = common('./dist/bundle.js', './debug.html', []);

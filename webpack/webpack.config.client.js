const webpack = require('webpack');
const merge = require('webpack-merge');
const common = require('./webpack.config.common');

const isDevMod = process.env.NODE_ENV === 'development';

module.exports = merge(common(), {
    name: 'client',
    target: 'web',

    entry: [
        isDevMod && 'webpack-hot-middleware/client',
        './src/index.tsx',
    ].filter(Boolean),

    plugins: [
        isDevMod && new webpack.HotModuleReplacementPlugin(),
    ].filter(Boolean),
});

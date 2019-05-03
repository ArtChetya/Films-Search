const webpack = require('webpack');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const OptimizeCSSAssetsPlugin = require("optimize-css-assets-webpack-plugin");
const path = require('path');

module.exports = () => {
    const mode = process.env.NODE_ENV;
    const isProduction = mode === 'production';

    let plugins = [
        new MiniCssExtractPlugin({
            filename: isProduction ? '[name].[hash].css' : '[name].css',
            chunkFilename: isProduction ? '[id].[hash].css' : '[id].css',
        })
    ];

    if (isProduction) {
        const prodPlugins = [
            new webpack.DefinePlugin({
                'process.env.NODE_ENV': JSON.stringify('production')
            }),
            new OptimizeCSSAssetsPlugin()
        ];

        plugins = [...plugins, ...prodPlugins];
    }

    return {
        module: {
            rules: [
                {
                    test: /\.(js|jsx)$/,
                    exclude: /(node_modules|bower_components)/,
                    loader: 'babel-loader'
                },
                {
                    test: /\.css$/,
                    use: [
                        isProduction ? MiniCssExtractPlugin.loader : 'style-loader',
                        'css-loader'
                    ]
                },
                {
                    test: /\.gif$/,
                    loader: 'url-loader'
                },
                {
                    test: /\.(ttf|woff|woff2|eot|svg)$/,
                    loader: 'file-loader'
                },
            ]
        },
        resolve: {
            extensions: ['*', '.js', '.jsx'],
            alias: {
                'react-dom': '@hot-loader/react-dom',
                components: path.resolve(__dirname, '../src/components'),
                features: path.resolve(__dirname, '../src/features/'),
                services: path.resolve(__dirname, '../src/services/'),
                utils: path.resolve(__dirname, '../src/utils/')
            }
        },
        output: {
            path:  path.resolve(__dirname, '../dist'),
            publicPath: '/',
            filename: 'bundle.js'
        },
        devtool: isProduction ? false : 'inline-source-map',
        mode,
        plugins,
    };
};
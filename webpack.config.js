const HtmlWebPackPlugin = require("html-webpack-plugin");

const plugins = [
    new HtmlWebPackPlugin({
        template: "./src/index.html",
        filename: "./index.html"
    })
];

module.exports = {
    entry: "./src/index.js",
    mode: "development",
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /(node_modules|bower_components)/,
                loader: "babel-loader"
            },
            {
                test: /\.css$/,
                use: ["style-loader", "css-loader"]
            },
            {
                test: /\.gif$/,
                loader: 'url-loader'
            },
            {
                test: /\.(ttf|eot|svg)$/,
                loader: 'file-loader'
            },
        ]
    },
    resolve: {
        extensions: ["*", ".js", ".jsx"]
    },
    output: {
        path: __dirname + '/dist',
        publicPath: "/",
        filename: "bundle.js"
    },
    devServer: {
        contentBase: './dist',
        port: 4200,
        historyApiFallback: true,
        hotOnly: true
    },
    plugins,
};
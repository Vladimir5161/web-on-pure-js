const path = require("path");
const HTMLPlugin = require("html-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");

module.exports = {
    node: {
        fs: 'empty'
    },
    entry: "./src/index.js",
    output: {
        filename: "bundle.[chunkhash].js",
        path: path.resolve(__dirname, "build"),
    },
    devServer: {
        port: 3000,
        publicPath: "/",
        historyApiFallback: true,
        proxy: {
            "/images": {
                target: "http://localhost:5001",
            },
            "/api": {
                target: "http://localhost:5001",
            },
        },
    },
    plugins: [
        new HTMLPlugin({
            template: "./public/index.html",
        }),
        new CleanWebpackPlugin()
    ],
    module: {
        rules: [
            {
                test: /\.css$/i,
                use: ["style-loader", "css-loader"],
            },
            {
                test: /\.m?js$/,
                exclude: /(node_modules|bower_components)/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env'],
                        plugins: ['@babel/plugin-proposal-class-properties']
                    }
                }
            }
        ]
    },
};

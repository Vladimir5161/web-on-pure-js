const path = require("path");
const HTMLPlugin = require("html-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const config = require("config");

module.exports = {
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
                target: config.get("apiURL"),
            },
            "/api": {
                target: config.get("apiURL"),
            },
        },
    },
    plugins: [
        new HTMLPlugin({
            template: "./public/index.html",
        }),
        new CleanWebpackPlugin(),
    ],
    module: {
        rules: [
            {
                test: /\.css$/i,
                use: ["style-loader", "css-loader"],
            },
        ]
    },
};

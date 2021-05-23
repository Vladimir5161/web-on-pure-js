const path = require("path");
const HTMLPlugin = require("html-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");

module.exports = {
    target: "node",
    entry: "./index.js",
    externals: [ 'fast-crc32c', 'request' ],
    output: {
        filename: "index.js",
        path: path.resolve(__dirname, "build"),
    },
    plugins: [
        new HTMLPlugin({
            template: "./index.html",
        }),
        new CleanWebpackPlugin(),
    ],
    devServer: {
        port: 5000,
        publicPath: "/",
        historyApiFallback: true,
    },
};

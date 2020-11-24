const path = require("path");
const HTMLPlugin = require("html-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");

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
            "/api": {
                target: "http://localhost:5000",
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
        ],
    },
};

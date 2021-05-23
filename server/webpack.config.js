const path = require("path");

module.exports = {
    target: "node",
    entry: "./index.js",
    output: {
        filename: "bundle.[chunkhash].js",
        path: path.resolve(__dirname, "build"),
    },
    devServer: {
        port: 5000,
        publicPath: "/",
        historyApiFallback: true,
    },
};

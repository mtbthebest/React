var webpack = require("webpack")
var path = require("path");

var DIST_DIR = path.resolve(__dirname, "dist");
var SRC_DIR = path.resolve(__dirname, "src");

var config = {
    mode: "development",
    entry: SRC_DIR + "/jsx/app/index.js",
    output: {
        path: DIST_DIR + "/jsx/app",
        filename: "bundle.js",
        publicPath: "/jsx/app/"
    },
    module: {
        rules:[
            {
                test: /\.js?/,
                include: SRC_DIR,
                loader: "babel-loader",
                query: {
                    presets: ["react", "stage-2"]
                }
            }
        ]
    }
};

module.exports = config;
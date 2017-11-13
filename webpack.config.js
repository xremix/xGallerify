module.exports = {
    entry: "./src/jquery.xgallerify.js",
    output: {
        path: __dirname,
        filename: "./dist/jquery.xgallerify.js"
    },
    module: {
        loaders: [
            // { test: /\.css$/, loader: "style!css" }
        ]
    }
};
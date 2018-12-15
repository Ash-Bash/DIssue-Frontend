const HtmlWebPackPlugin = require("html-webpack-plugin");

const htmlPlugin = new HtmlWebPackPlugin({
    template: __dirname + "/src/html/index.html",
    filename: "./index.html"
});

module.exports = {
    context: __dirname + "/src",
    entry:  "./js/app.js",
    output: {
        path: __dirname + "/dist",
        filename: "dissue.bundle.js"
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /(node_modules|bower_components)/,
                loader: ['babel-loader']
            }
        ]
    },
    plugins: [htmlPlugin]
};
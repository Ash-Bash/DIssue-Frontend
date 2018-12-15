const HtmlWebPackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const devMode = process.env.NODE_ENV !== 'production'

const htmlPlugin = new HtmlWebPackPlugin({
    template: __dirname + "/src/html/index.html",
    filename: "./index.html"
});

const miniCssPlugin = new MiniCssExtractPlugin({
    // Options similar to the same options in webpackOptions.output
    // both options are optional
    filename: "dissue.main.css",
    publicPath: "/dist"
});

module.exports = {
    context: __dirname + "/src",
    entry:  {
        main: ["./js/app.js", './scss/app.scss']
    },
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
            },
            {
                test: /\.(sa|sc|c)ss$/,
                use: [
                    MiniCssExtractPlugin.loader,
                    { loader: 'css-loader', options: { sourceMap: true, importLoaders: 1 } },
                    { loader: 'sass-loader', options: { sourceMap: true } },
                ],
              }
        ]
    },
    plugins: [htmlPlugin, miniCssPlugin],
    devServer: {  // configuration for webpack-dev-server
      contentBase: './src/html',  //source of static assets
      port: 8082, // port to run dev-server
  } 
};
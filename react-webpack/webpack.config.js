const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const { FileListPlugin } = require('./src/plugin.jsx');

const build = path.resolve(__dirname, "dist");

module.exports = (env) => ({
    mode: env.mode,
    devtool: env.mode === "development" ? "inline-source-map" : "",
    devServer: { port: 3001, open: true },
    entry: ["@babel/polyfill", "./src/index.jsx"],
    output: {
        filename: "main.js",
        path: path.resolve(__dirname, "dist"),
        filename: "[name].[hash].js"
    },
    devtool: "inline-source-map",
    resolve: {
        extensions: [".jsx", ".ts", ".js"],
    },
    plugins: [
        new HtmlWebpackPlugin({ template: './src/index.html' }),
        new MiniCssExtractPlugin(),
        new CleanWebpackPlugin(),
        new FileListPlugin({
            outputFile: '../superfluousFiles.jsx',
            exclude: /node_modules/,
        }),
    ],
    module: {
        rules: [
            {
                test: /\.css$/i,
                use: ['style-loader', 'css-loader'],
            },
            {
                test: /\.(png|jpg|gif|svg)$/i,
                use: ["file-loader"]
            },
            {
                test: /\.m?js$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader",
                    options: {
                        presets: ['@babel/preset-env']
                    }
                }
            },
            {
                test: /\.m?jsx$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader",
                    options: {
                        presets: ['@babel/preset-env', "@babel/preset-react"]
                    }
                }
            },

        ],
    },


});

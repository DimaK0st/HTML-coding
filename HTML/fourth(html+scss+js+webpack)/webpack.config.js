const path = require('path');
const miniCss = require('mini-css-extract-plugin');
const minify = require('optimize-css-assets-webpack-plugin');
const HtmlWebpackPlugin = require("html-webpack-plugin");

const CopyPlugin = require('copy-webpack-plugin');
const ImageminPlugin = require("imagemin-webpack");
const imageminGifsicle = require("imagemin-gifsicle");
const imageminJpegtran = require("imagemin-jpegtran");
const imageminOptipng = require("imagemin-optipng");
const imageminSvgo = require("imagemin-svgo");

module.exports = {
    mode: 'development',
    entry: './src/index.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'scripts.js',
        clean: true,
    },
    module: {
        rules: [
            {test: /.(s*)css$/, use: [miniCss.loader, 'css-loader', 'sass-loader',]},
            // {test: /\.(jpg|png|svg)$/, loader: 'file-loader', options: {name: '[path][name].[ext]', emitFile: false}},
            {test: /\.js$/, exclude: /node_modules/, use: ['babel-loader'],},
        ]
    },
    optimization: {
        minimizer: [
            new minify({})
        ],
    },
    plugins: [
        new miniCss({
            filename: 'style.css',
        }),
        new HtmlWebpackPlugin({
            title: 'My App',
            template: './src/index.html',
            scriptLoading: 'blocking',
        }),
        new CopyPlugin(
            {
                patterns: [
                    // {
                    //     from: 'src/fonts',
                    //     to: 'fonts',
                    // },
                    {
                        from: 'src/images',
                        to: 'images'
                    }
                ]
            }
        ),
        // new ImageminPlugin({
        //     bail: false,
        //     imageminOptions: {
        //         plugins: [
        //             imageminGifsicle({
        //                 interlaced: true
        //             }),
        //             imageminJpegtran({
        //                 progressive: true
        //             }),
        //             imageminOptipng({
        //                 optimizationLevel: 5
        //             }),
        //             imageminSvgo({
        //                 removeViewBox: true
        //             })
        //         ]
        //     }
        // }),
    ],
    watch: true,
};
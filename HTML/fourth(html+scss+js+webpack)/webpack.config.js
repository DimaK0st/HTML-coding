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
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const CssMinimizerPlugin = require("css-minimizer-webpack-plugin");
const ImageMinimizerPlugin = require("image-minimizer-webpack-plugin");
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
            {test: /.(s*)css$/, use: [MiniCssExtractPlugin.loader,  {
                    loader: 'css-loader',
                    options: { url: false, importLoaders: 1 }
                }, 'sass-loader',]},
            // {test: /\.(jpg|png|svg)$/, loader: 'file-loader', options: {name: '[path][name].[ext]', emitFile: false}},
            {test: /\.js$/, exclude: /node_modules/, use: ['babel-loader'],},
        ]
    },
    optimization: {
        minimizer: [
            new minify({}),
            new CssMinimizerPlugin(),
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
        new MiniCssExtractPlugin(),
        // new ImageMinimizerPlugin({
        //     minimizer: {
        //         implementation: ImageMinimizerPlugin.squooshMinify,
        //         options: {
        //             encodeOptions: {
        //                 mozjpeg: {
        //                     // That setting might be close to lossless, but it’s not guaranteed
        //                     // https://github.com/GoogleChromeLabs/squoosh/issues/85
        //                     quality: 100,
        //                 },
        //                 webp: {
        //                     lossless: 1,
        //                 },
        //                 avif: {
        //                     // https://github.com/GoogleChromeLabs/squoosh/blob/dev/codecs/avif/enc/README.md
        //                     cqLevel: 0,
        //                 },
        //             },
        //         },
        //     },
        // }),
    ],
    watch: true,
};
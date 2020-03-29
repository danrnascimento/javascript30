const path = require('path');
const TerserPlugin = require('terser-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const ExtractTextPlugin = require('extract-text-webpack-plugin');
const extractSass = new ExtractTextPlugin('app.bundle.css');

const terserConfig = new TerserPlugin();

let config = (env) => ({
    entry: path.resolve(__dirname, './days/index.tsx'),
    devtool: env === 'prod' ? false : 'inline-source-map',
    output: {
        path: path.resolve(__dirname, './dist'),
        filename: 'app.bundle.js',
    },
    module: {
        rules: [
            {
                test: /\.(jsx|tsx|ts|js)$/,
                use: ['ts-loader'],
                exclude: /node_modules/
            },
            {
                test: /\.(sass|scss|css)/,
                use: extractSass.extract({
                    fallback: 'style-loader',
                    use: [
                        {
                            loader: 'css-loader',
                            options: {
                                modules: {
                                    mode: 'local',
                                    localIdentName: (env === 'prod') ? '[hash:base64]' : '[local]',
                                },
                                sourceMap: !(env === 'prod'),
                                localsConvention: 'asIs'
                            },
                        },
                        'sass-loader'
                    ]
                }),
                exclude: /node_modules/,
            },
            {
                test: /\.(png|jpg|jpeg|gif|svg)$/,
                use: [{
                    loader: 'file-loader',
                    options: {
                        name: '[name].[ext]',
                        outputPath: 'images'
                    }
                }]
            }
        ]
    },
    devServer: {
        contentBase: path.join('./src/**/*'),
        historyApiFallback: true,
        compress: (env === 'prod'),
        port: 3000,
    },
    optimization: {
        minimizer: [ env === 'prod' ? terserConfig : function(){} ]
    },
    resolve: {
        extensions: ['.js', '.jsx', '.ts', '.tsx']
    },
    plugins: [
        new HtmlWebpackPlugin({
            minify: {
                collapseWhitespace: true,
                removeComments: true,
                removeRedundantAttributes: true,
                useShortDoctype: true
            },
            favicon: 'favicon.ico',
            template: './src/index.html'
        }),
        extractSass
    ]
});

module.exports = config;
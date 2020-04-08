const path = require('path');
const TerserPlugin = require('terser-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CopyPlugin = require('copy-webpack-plugin');

const terserConfig = new TerserPlugin();

let config = ({ production, day }) => {
    return {
        mode: production ? "production" : "development",
        entry: path.resolve(__dirname, `./days/day${day}/index.tsx`),
        devtool: production ? false : 'inline-source-map',
        output: {
            path: path.resolve(__dirname, `./dist/day${day}`),
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
                    use: [
                        {
                            loader: MiniCssExtractPlugin.loader,
                            options: {
                                publicPath: '/',
                            },
                        },
                        {
                            loader: 'css-loader',
                            options: {
                                modules: {
                                    mode: 'local',
                                    localIdentName: production ? '[hash:base64]' : '[local]',
                                },
                                sourceMap: !production,
                                localsConvention: 'camelCaseOnly',
                                esModule: true
                            },
                        },
                        'sass-loader'
                    ],
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
            contentBase: path.join(`./days/day${day}/**/*`),
            historyApiFallback: true,
            compress: !!production,
            port: 3000,
        },
        optimization: {
            minimizer: [ production ? terserConfig : function(){} ]
        },
        resolve: {
            extensions: [".js", ".ts", ".tsx"]
        },
        plugins: [
            new HtmlWebpackPlugin({
                minify: {
                    collapseWhitespace: true,
                    removeComments: true,
                    removeRedundantAttributes: true,
                    useShortDoctype: true
                },
                template: `./src/index.html`
            }),
            new MiniCssExtractPlugin({
                filename: '[name].css',
            }),
            new CopyPlugin([ { from: `days/day${day}/assets`, to: `assets` } ]),
        ]
    }
};

module.exports = config;
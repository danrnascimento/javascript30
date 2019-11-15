const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = (env) => {

    console.log(`>>>>`, env);

    return {
        entry: "./index.js",
        output: {
            filename: "bundle.js",
            path: path.resolve(__dirname, "dist")
        },
        module: {
            rules: [
                {
                    test: /\.(js)$/,
                    exclude: /node_modules/,
                    use: ["babel-loader"]
                },
                {
                    test: /\.(css)$/,
                    exclude: /node_modules/,
                    use: ['style-loader', 'css-loader']
                }
            ]
        },
        devServer: {
            contentBase: path.join(__dirname, 'dist'),
            compress: true,
            port: 9000
        },
        plugins: [
            new HtmlWebpackPlugin({
                template: "index.html",
                minify: false
            })
        ]
    }
}
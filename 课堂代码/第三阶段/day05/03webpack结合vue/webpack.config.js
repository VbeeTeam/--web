const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
// const { VueLoaderPlugin } = require("vue-loader");

module.exports = {
    entry: path.join(__dirname, "./src/main.js"),
    output: {
        path: path.join(__dirname, "dist"),
        filename: "build.js"
    },
    plugins: [
        // new VueLoaderPlugin(),
        new HtmlWebpackPlugin({
            template: "./src/index.html"
        })
    ],
    module: {
        rules: [{
                test: /\.css/,
                use: ["style-loader", "css-loader"]
            },
            {
                test: /\.less$/,
                use: [
                    'style-loader',
                    'css-loader',
                    'less-loader'
                ]
            },
            {
                test: /\.(scss)$/,
                use: [
                    'style-loader',
                    'css-loader',
                    'sass-loader'
                ]
            },
            {
                test: /\.(jpg|png|gif)$/,
                use: [{
                    loader: 'url-loader',
                    options: {
                        limit: 10 * 1024
                    }
                }]
            },
            {
                test: /\.html/,
                use: ["html-loader"] //自动输出路径
            },
            {
                test: /\.(ttf|woff|woff2)$/,
                type: 'asset/resource', //资源文件整合
                generator: { //产出
                    filename: 'font/[name].[ext]'
                }
            },
            {
                test: /\.vue$/,
                use: ["vue-loader"]
            }
        ]
    },
    target: ['web', 'es5'],
    mode: "production",
    devServer: {
        // 项目构建后路径
        contentBase: path.join(__dirname, 'dist'),
        // 启动gzip压缩
        compress: true,
        port: 8080,
        open: true
    },
    resolve: { //路径解析
        alias: { //设置被导入时包的路径
            "vue$": "vue/dist/vue.js"
        }
    }
}
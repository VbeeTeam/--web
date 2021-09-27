const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const VueLoaderPlugin = require("vue-loader/lib/plugin");
module.exports = {
    entry: path.resolve(__dirname, "./src/main.js"),
    output: {
        path: path.resolve(__dirname, "dist"),
        filename: "build.js"
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: "./src/index.html"
        }),
        new VueLoaderPlugin()
    ],
    devServer: {
        contentBase: path.resolve(__dirname, "dist"),
        compress: true,
        open: true,
        port: 8081
    },
    mode: "production",
    // 路径解析
    resolve: {
        alias: {  //设置导入包的路径
            "vue$": "vue/dist/vue.js"
        }
    },
    module: {
        rules: [
            {
                test: /\.vue/,
                use: ["vue-loader"]
            },
            {
                test: /\.css/,
                use: ["style-loader", "css-loader"]
            },
            {
                test: /\.scss/,
                use: ["style-loader", "css-loader", "sass-loader"]
            }
        ]
    }
}
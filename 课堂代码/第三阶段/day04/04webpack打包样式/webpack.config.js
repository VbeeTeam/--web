const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
module.exports = {
    entry: path.join(__dirname, "./src/main.js"),
    output: {
        path: path.join(__dirname, "./dist"),
        filename: "build.js"
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: "./src/index.html"
        })
    ],
    module: {
        rules: [
            {
                test: /\.css/,
                // style-loader:use数组中loader执行顺序：从右到左，从下到上，依次执行(先执行css-loader)
                // 创建style标签，将js中的样式资源插入进去，添加到head中生效
                // css-loader:将css文件变成commonjs模块加载到js中，里面内容是样式字符串
                use: ["style-loader", "css-loader"]
            }
        ]
    },
    mode: "production",
    devServer: {
       // 项目构建后路径
       contentBase: path.join(__dirname, 'dist'),
       // 启动gzip压缩
       compress: true,
       port: 8080,
       open: true
    }
}
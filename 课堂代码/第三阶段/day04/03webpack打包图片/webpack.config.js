const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
module.exports = {
    entry: path.join(__dirname, "./src/main.js"),
    output: {
        path: path.join(__dirname, "dist"),
        filename: "build.js"
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: "./src/index.html"
        })
    ],
    devServer: {
        // 项目构建后路径
        contentBase: path.join(__dirname, 'dist'),
        // 启动gzip压缩
        compress: true,
        port: 8080,
        open: true
    },
    module: {
        // 详细的loader配置
        // 不同文件必须配置不同loader处理 规则
        rules: [
            // 处理图片
            {
                test: /\.(jpg|png|gif)$/,
                // 使用一个url-loader
                // 需要下载 file-loader 资源拷贝 url-loader 被base64处理
                use: [{
                    loader: 'url-loader',
                    options: {
                        // 图片大小小于8kb，就会被base64处理
                        limit: 8 * 1024,
                        // 给图片重命名
                        // [hash:10]取图片的hash的前10位
                        // [ext]取文件原来扩展名
                        name: 'img/[name].[hash:10].[ext]'
                        // outputPath: "img"
                        //关闭url-loader的默认es6解析
                        // esModule: true
                    }
                }]
            }
           
        ]
    },
    mode: "production"
}
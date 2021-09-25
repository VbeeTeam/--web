/**
 * 这个配置文件就是一个js文件，
 * 通过node的模块化，向外暴露一个配置对象
 */
const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
module.exports = {
    // 入口配置，表示我们要使用webpack打包哪个文件
    entry: path.join(__dirname, "./src/main.js"),
    // 出口配置
    output: { //输出文件相关配置
        path: path.join(__dirname, 'dist'),
        // 打包之后输出的文件名
        filename: "build.js"
    },
    //  插件配置打包html
    // html-webpack-plugin
    // defer 属性规定是否对脚本执行进行延迟，直到页面加载为止。
    plugins: [
        new HtmlWebpackPlugin({
            template: "./src/index.html"
        })
    ],
    
    // 监听打包，还不够自动化
    // watch: true,

    // 使用webpack-dev-server这个工具，实现自动打包编辑的功能
    // 开发服务器，自动编辑、自动打包、自动打开浏览器
    // 特点：只会在内存中编辑打包，不会有任何输出
    // 1.安装 npm i webpack-dev-server -D 安装到开发本地环境
    // 2.安装完毕后，这个工具和webpack命令的用法一样
    // 3.执行命令：webpack-dev-server => webpack serve
    // 无法把它当做脚本命令在终端中直接运行，只有全局安装的才能执行，但是项目上线本地全局肯定访问不到
    // 可以在package.json中scripts中配置
    // 访问：http://localhost:8080
    devServer: { //@3的版本
        // 项目构建后路径
        contentBase: path.join(__dirname, 'dist'),
        // 启动gzip压缩
        compress: true,
        // 端口号
        port: 8080,
        // 自动打开浏览器
        open: true
    },
    // 打包模式 development 开发模式 production 生产模式
    mode: "production"
}
// 当我们输入webpack后，webpack做了以下几步：
// 1.首先，webpack发现，我们没有通过命令的方式给它指定入口和出口
// 2.然后就会自己去项目的根目录中去找一个叫“webpack.config.js”的配置文件
// 3.找到配置文件后，webpack会去解析执行这个配置文件，当解析执行完后就得到了配置文件中导出的对象
// 4.当webpack拿到配置对象后，就得到了指定的入口和出口,打包模式配置，进行打包构建
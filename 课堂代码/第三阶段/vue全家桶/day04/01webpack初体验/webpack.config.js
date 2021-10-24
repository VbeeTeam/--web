/**
 * 这个配置文件就是一个js文件，
 * 通过node的模块化，向外暴露一个配置对象
 */
const path = require("path")
module.exports = {
    // 入口配置，表示我们要使用webpack打包哪个文件
    entry: path.join(__dirname, "./src/main.js"),
    // 出口配置
    output: {//输出文件相关配置
        path: path.join(__dirname, 'dist'),
        // 打包之后输出的文件名
        filename: "build.js"
    },
    // 打包模式 development 开发模式 production 生产模式
    mode: "development",
}
// 当我们输入webpack后，webpack做了以下几步：
// 1.首先，webpack发现，我们没有通过命令的方式给它指定入口和出口
// 2.然后就会自己去项目的根目录中去找一个叫“webpack.config.js”的配置文件
// 3.找到配置文件后，webpack会去解析执行这个配置文件，当解析执行完后就得到了配置文件中导出的对象
// 4.当webpack拿到配置对象后，就得到了指定的入口和出口,打包模式配置，进行打包构建

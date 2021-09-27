
function greeter(person: string) {
    return "Hello, " + person;
}

let user = "Jane User";

document.body.innerHTML = greeter(user);
// tsc .\src\js\index.ts
// 转js语法
// 每次操作太麻烦 用ts-loader打包
// 安装ts 配置loader
// tsc --init 初始化ts包
// npm i @babel/preset-env @babel/preset-typescript -D
// 使用babel-loader打包
// 项目根目录配置babel.config.js
// module.exports = {
//     presets: [ //预设模块配置
//         ['@babel/preset-env'],
//         ['@babel/preset-typescript']
//     ]
// }
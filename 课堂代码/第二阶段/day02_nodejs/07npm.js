/**
 * 全局安装 -g  安装到nodejs环境下的node_modules目录下,全局安装的包一般用于命令行工具
 * 本地安装
 * npm常用的命令
 * 1.安装(如果没有指定版本默认是最新版本)
 * npm install -g 包名称 （全局安装）
 * npm install -g es-checker     es6支持度:es-checker
 * 
 * 2.npm install 包名称 （本地安装）安装在本地node_modules
 * 
 * 3.安装包指定版本
 * npm install -g 包名称@版本号
 * 
 * 卸载
 * 4.npm uninstall -g 包名称（全局卸载）
 * npm uninstall -g es-checker
 * 
 * 5.更新包(更新到最新版本)
 * npm update -g 包名
 * 
 * ========
 * 生成入口文件在讲
 * 
 * 6. --sava      向生产环境添加依赖安装到package.json的dependencies中
 * npm install art-template --save
 * 7. --sava-dev  向开发环境添加依赖安装到package.json的devDependencies中
 * npm install es-checker --save-dev
 * 
 */
# 01

## 初识Nodejs

- JavaScript是什么？ 

- JavaScript可以运行在哪里？ 

  - JavaScript一种在浏览器中解释运行的脚本语言，它的解释器被称为JavaScript引擎，为浏览器的一部分，是广泛用于

  客户端的脚本语言，最早是在HTML网页上使用，用来给HTML（HTML5）网页增加动态功能

| 浏览器  | 内核        |
| ------- | ----------- |
| IE      | Trident     |
| FireFox | Gecko       |
| Chrome  | WebKit\Bink |
| Safari  | WebKit      |
| Opera   | Presto      |
| Edge    | Chakra      |

## Node.js的诞生

- 作者Ryan Dahl 瑞恩·达尔
  + 2004 纽约 读数学博士 
  + 2006 退学到智利 转向开发 
  + 2009.5对外宣布node项目，年底js大会发表演讲 
  + 2010 加入Joyent云计算公司 
  + 2012 退居幕后

> 1.简单的说 Node.js 就是运行在服务端的 JavaScript。
>
> 2.Node.js 是一个基于Chrome JavaScript 运行时建立的一个平台。
>
> 3.Node.js是一个事件驱动I/O的服务端JavaScript环境（由C++编写），基于Google的V8引擎设计，V8引擎执行Javascript的速度非常快，性能非常好。



## Node.js可以用来做什么？

- 具有复杂逻辑的动态网站 
- WebSocket服务器 
- 命令行工具 
- 带有图形界面的本地应用程序 
- ......

## Node.js开发环境准备

1. 普通安装方式[官方网站](https://nodejs.org/zh-cn/)

2. 配置环境变量

   （1）node.js的msi包是一路next就可以了

   （2）安装完后，可以在命令行中输入node -v 来查看安装版本和是否安装成功，再输入npm-v查看npm模块是否正常

   （3）配置npm的全局模块（新建文件夹node_global、node_cache）

     npm config set prefix "D:\nodejs\node_global"  》模块配置位置
     npm config set cache "D:\nodejs\node_cache"   》缓存文件

   （4）配置环境变量

   进入环境变量对话框，在【系统变量】下新建【NODE_PATH】，输入D:\nodejs\node_global\node_modules

   将【用户变量】下的【Path】修改为 D:\nodejs\node_global

   (6) 配置完后，安装个module测试下，我们就安装最常用的express模块，打开cmd窗口输入命令，进行模块的全局安装

   npm install express -g      # -g是全局安装的意思
   
   3、安装淘宝npm（cnpm）
   
    1.安装cnpm
   
     (1)输入以下命令
   
   ```
   npm install -g cnpm --registry=https://registry.npm.taobao.org
   ```
   
     (2)输入cnpm -v输入是否正常。
   
   ```
   cnpm -v
   ```
   
   
   
   ### package.json字段分析
   
   - name：包的名称，必须是唯一的，由小写英文字母、数字和下划线组成，不能包含空格
   - description：包的简要说明
   - version：符合语义化版本识别规范的版本字符串
   - keywords：关键字数组，通常用于搜索
   - maintainers：维护者数组，每个元素要包含name、email（可选）、web（可选）字段
   - contributors：贡献者数组，格式与maintainers相同。包的作者应该是贡献者数组的第一- 个元素
   - bugs：提交bug的地址，可以是网站或者电子邮件地址
   - licenses：许可证数组，每个元素要包含type（许可证名称）和url（链接到许可证文本的- 地址）字段
   - repositories：仓库托管地址数组，每个元素要包含type（仓库类型，如git）、url（仓- 库的地址）和path（相对于仓库的路径，可选）字段
   - dependencies：生产环境包的依赖，一个关联数组，由包的名称和版本号组成
   - devDependencies：开发环境包的依赖，一个关联数组，由包的名称和版本号组成

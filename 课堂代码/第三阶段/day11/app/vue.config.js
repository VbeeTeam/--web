const data = require("./data/data.json");
const category = require("./data/category.json");
module.exports = {
        publicPath: "./", //vue-cli3.3+ 使用 打包的静态资源路径指向到当前路径
        devServer: {
            before(app) { //可以执行自定义的中间件 app参数：配置路由
                    app.get('/data', (req, res) => {
                        res.json(data)
                    }) 
                    app.get('/category', (req, res) => {
                        res.json(category)
                    })
                }
            }

        }
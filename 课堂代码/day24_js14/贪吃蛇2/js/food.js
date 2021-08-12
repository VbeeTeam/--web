/**
 * 食物对象
 */
//所有的js文件中书写的代码，都是全局作用域，变量名、函数名会冲突
//通过自调用函数，开启新的作用域，避免命名冲突的方式
(function () {
    //属性：x，y,width,height,color
    //记录上一次创建的食物，为删除做准备
    var elements = [];

    function Food(options) {
        options = options || {};
        this.x = options.x || 0;
        this.y = options.y || 0;
        this.width = options.width || 20;
        this.height = options.height || 20;
        this.color = options.color || "red";

    }
    //渲染方法
    Food.prototype.render = function (map) {
        //4.删除之前创建的食物
        removeFood();
        //随机位置
        this.x = Tools.getRandom(0, map.offsetWidth / this.width) * this.width;
        this.y = Tools.getRandom(0, map.offsetHeight / this.height) * this.height;

        //1.动态创建div，显示食物
        var divDom = document.createElement("div");
        map.appendChild(divDom);
        //3.把食物添加到数组
        elements.push(divDom);
        console.log(elements);
        //2.设置食物的样式
        divDom.style.position = "absolute";
        divDom.style.left = this.x + "px";
        divDom.style.top = this.y + "px";
        divDom.style.width = this.width + "px";
        divDom.style.height = this.height + "px";
        divDom.style.backgroundColor = this.color;
    }
    //删除食物的私有方法
    function removeFood() {
        console.log(elements);
        for (var i = elements.length - 1; i >= 0; i--) {
            //删除div
            elements[i].parentNode.removeChild(elements[i]);
            //删除数组中的元素
            elements.splice(i, 1);
        }
    }
    //将Food构造函数对象挂载到window顶级对象上，让外部可以访问到
    window.Food = Food;
})();
//测试
// var map = document.getElementById("map");
// var f = new Food();
// f.render(map);
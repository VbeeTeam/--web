/**
 * 蛇的对象
 */
//蛇对象的属性 宽度、高度、蛇的主体（蛇头、蛇的身体）、运动的方向（默认向右运动）
//存储创建的蛇
var elements = [];
(function () {
    function Snake(options) {
        options = options || {};
        // 蛇节 的大小
        this.width = options.width || 20;
        this.height = options.height || 20;
        // 蛇移动的方向
        this.direction = options.direction || 'right';
        // 蛇的身体(蛇节)  第一个元素是蛇头 记录位置、颜色
        this.body = [{
                x: 3,
                y: 2,
                color: 'red'
            },
            {
                x: 2,
                y: 2,
                color: 'blue'
            },
            {
                x: 1,
                y: 2,
                color: 'blue'
            }
        ];
    }
    //渲染蛇的样式
    Snake.prototype.render = function (map) {
        //删除之前的蛇节
        removeElement();
        // 把每一个蛇节渲染到地图上
        for (var i = 0; i < this.body.length; i++) {
            // 蛇节
            var object = this.body[i];
            // 创建蛇节
            var divDom = document.createElement('div');
            map.appendChild(divDom);
            //把创建的蛇节存在数组里
            elements.push(divDom);
            // 设置样式
            divDom.style.position = "absolute";
            divDom.style.width = this.width + 'px';
            divDom.style.height = this.height + 'px';
            divDom.style.left = object.x * this.width + 'px';
            divDom.style.top = object.y * this.height + 'px';
            divDom.style.backgroundColor = object.color;
        }
    }
    //控制蛇移动 
    Snake.prototype.move = function (food, map) {
        //1、控制蛇的身体移动（当前蛇节 到 上一个蛇节的位置）
        for (var i = this.body.length - 1; i > 0; i--) {
            this.body[i].x = this.body[i - 1].x;
            this.body[i].y = this.body[i - 1].y;
        }
        //2.控制蛇头移动,蛇头的方向
        var head = this.body[0];
        switch (this.direction) {
            case "right":
                head.x += 1;
                break;
            case "left":
                head.x -= 1;
                break;
            case "top":
                head.y -= 1;
                break;
            case "bottom":
                head.y += 1;
                break;
        }
        //判断蛇头是否和食物碰到了
        var headX = head.x * this.width;
        var headY = head.y * this.height;
        if(headX == food.x && headY == food.y){
            //让蛇增加一节
            //获取蛇的最后一节
            var last = this.body[this.body.length - 1];
            this.body.push({
                x: last.x,
                y: last.y,
                color: last.color
            });
            //让食物在随机生成一个
            food.render(map);
        }

    }
    //私有成员函数
    function removeElement(){
        for(var i = elements.length-1; i >=0; i--){
            //删除div
            elements[i].parentNode.removeChild(elements[i]);
            //删除数组中的元素
            elements.splice(i, 1);
        }
    }

    window.Snake = Snake;
})();
// 测试代码
// var map = document.getElementById('map');
// var snake = new Snake();
// snake.render(map);
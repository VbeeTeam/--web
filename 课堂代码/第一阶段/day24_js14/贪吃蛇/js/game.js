/**
 * 游戏对象
 */
// 使用自调用函数，创建一个新的局部作用域，防止命名冲突
(function () {
    var that; //记录游戏对象
    //游戏对象
    function Game(map) {
        this.food = new Food();
        this.snake = new Snake();
        this.map = map;
        that = this;
        //开始游戏
        this.start();
    }
    //开始游戏
    Game.prototype.start = function () {
        // 1 把蛇和食物对象，渲染到地图上
        this.food.render(this.map);
        this.snake.render(this.map);
        // 2 开始游戏的逻辑
        // 2.1让蛇动起来
        // 2.2通过键盘控制蛇移动的方向
        // 2.3当蛇碰到食物做相应的处理
        // 2.4当蛇碰到边界游戏结束
        // this.snake.move();
        // this.snake.render(this.map);
        // this.snake.move();
        // this.snake.render(this.map);
        runSnack();
        bindKey();
    }

    //私有的函数 蛇自运动
    function runSnack() {
        var myTimer = setInterval(function () {
            //让蛇走一格
            // 在定时器的function中this是指向window对象的
            // this.snake
            // 要获取游戏对象中的蛇属性
            this.snake.move(this.food, this.map);
            this.snake.render(this.map);
            // 当蛇碰到边界游戏结束 考虑蛇头的坐标
            var headX = this.snake.body[0].x;
            var headY = this.snake.body[0].y;
            var maxX = this.map.offsetWidth / this.snake.width;
            var maxY = this.map.offsetHeight / this.snake.width;
            if (headX < 0 || headX >= maxX) {
                clearInterval(myTimer);
                if(!alert("Game Over，是否重新开始游戏")){
                    window.location.reload();
                }
            }
            if (headY < 0 || headY >= maxY) {
                clearInterval(myTimer);
                if(!alert("Game Over，是否重新开始游戏")){
                    window.location.reload();
                }
            }
        }.bind(that), 200)
    }
    //键盘控制蛇的方向
    function bindKey() {
        document.onkeydown = function (event) {
            var e = event || window.event;
            console.log(e.keyCode);
            switch (e.keyCode) {
                case 37:
                    this.snake.direction = 'left';
                    break;
                case 38:
                    this.snake.direction = 'top';
                    break;
                case 39:
                    this.snake.direction = 'right';
                    break;
                case 40:
                    this.snake.direction = 'bottom';
                    break;
            }
        }.bind(that);
    }

    // 暴露构造函数给外部
    window.Game = Game;
})();
// 测试
// var map = document.getElementById('map');
// var game = new Game(map);
// game.start();
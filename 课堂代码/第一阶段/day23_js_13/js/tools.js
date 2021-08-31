var Tools = {
    //生成随机数 0 - 255之间
    // Math.random() * 256
    getRandom: function (min, max) {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }
}
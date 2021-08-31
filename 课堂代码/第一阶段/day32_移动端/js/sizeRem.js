
sizeWidth();

//监听屏幕窗口发生改变的事件
window.onresize = function(){
    sizeWidth();
}

function sizeWidth() {
    //获取当前手机屏幕宽度
    var phoneWidth = document.querySelector("html").offsetWidth;
    console.log(phoneWidth)

    //基础值 16
    var baseSz = 100;

    //设计稿宽度
    var pageWidth = 375;

    //根据像素计算rem公式  基础值*屏幕宽/设计稿宽
    var fz = baseSz * phoneWidth / pageWidth;

    //设置html根元素
    document.querySelector("html").style.fontSize = fz + "px";

}
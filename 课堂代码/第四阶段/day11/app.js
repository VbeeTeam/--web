/**
 * @file app.js
 * @author swan
 */

/* globals swan */

App({
    onLaunch(options) {
        // do something when launch
        console.log("小程序打开")

    },
    onShow(options) {
        // do something when show
        console.log("小程序显示")
    },
    onHide() {
        // do something when hide
        console.log("小程序隐藏")
    },
    onError: function () {
        console.log('小程序发生错误');
    },
    globalData: {
        baseurl: 'http://localhost'
    }
});

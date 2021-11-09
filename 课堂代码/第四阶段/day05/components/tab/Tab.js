// components/tab/Tab.js
Component({
    /**
     * 组件的属性列表
     * 用于接收父组件传递的数据
     */
    properties: {
        list: {
            type: Array,
            default: []
        }
    },

    /**
     * 组件的初始数据
     */
    data: {
        clickIndex: 0
    },

    /**
     * 组件的方法列表
     */
    methods: {
        clickTab: function(e){
            console.log("e:", e)
            this.setData({
                clickIndex: e.target.dataset.index
            })
            // 子组件通过triggerEvent给父组件传参
            
            this.triggerEvent("toFather", this.data.clickIndex)
        }
    }
})

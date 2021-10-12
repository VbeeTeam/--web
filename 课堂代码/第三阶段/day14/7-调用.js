import {
    apiModule
} from '@/api/api'; // 导入我们的api接口
// 调用api接口              
apiModule('/api/tModule/1', {}).then(res => {
    this.module = res
})
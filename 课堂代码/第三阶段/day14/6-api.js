/**   
 * api接口统一管理
 */
 import {
	get,
	post,
	deletes,
	put
} from './http'

// get
export const apiArticle = urlId => get(urlId, {}); //文章
export const apiTabs = p => get('/api/tTabs/show', p); //页签
//post
export const apiSpecialList = urlId => post(urlId, {}); //专题列表
export const apiGetuserInfo = p => post('/api/auth/getUserInfo', p); //获取用户信息
// deletes
export const insurancePolicyDelete = p => deletes("/api/insurancePolicy", p); //删除保单
// put
export const insurancePolicyChange = p => put("/api/insurancePolicy/appEdit",p); //修改保单
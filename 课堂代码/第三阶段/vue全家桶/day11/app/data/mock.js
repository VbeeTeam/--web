import Mock from 'mockjs' // 引入mockjs

import data from './data.json'
import category from './category.json'

Mock.mock('/data', 'get', data) 
Mock.mock('/category', 'get', category)
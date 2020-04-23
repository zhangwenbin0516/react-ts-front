/**
********************************************
* @Project File: index.ts
* @author: <zhangwenbin>
* @E-mail: <942623159@qq.com>
* @Create Date: 2020/4/21 23:17
********************************************
*/

import { createStore, combineReducers } from 'redux';

const reducer = (state, action) => {

}
//https://blog.csdn.net/u010377383/article/details/79022439
const rootRenderer = combineReducers({reducer});

export const store = createStore(rootRenderer);
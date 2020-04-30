/*
 * Filename: d:\workspaces\react-ts-front\src\redux\index.tsx
 * Path: d:\workspaces\react-ts-front
 * Created Date: Thursday, April 30th 2020, 2:39:22 pm
 * Author: zhangwenbin
 * 
 * Copyright (c) 2020 Your Company
 */
import { createStore, combineReducers } from 'redux';
import { ReducerUserInfo, ReducerDoMain } from './reducer/userInfo';
const reducer = combineReducers({
    ReducerUserInfo,
    ReducerDoMain
})
const store = createStore(reducer);
export default store;
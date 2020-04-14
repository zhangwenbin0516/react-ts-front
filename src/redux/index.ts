/*
 * File: index.ts
 * Project: react-ts-front
 * File Created: Tuesday, 31st March 2020 11:33:28 am
 * Author: <<zhangwenbin>> (<<942623159@qq.com>>)
 * -----
 * Last Modified: Tuesday, 31st March 2020 11:33:31 am
 * Modified By: <<zhangwenbin>> (<<942623159@qq.com>>>)
 * -----
 * Copyright 2017 - 2020 Your Company, Your Company
 */
import { connect } from "react-redux";
import { CreateData } from './state';
interface Action {
    type: string;
    data: object
}
const StoreData = (state: any = CreateData, action: Action) => {
    switch(action.type) {
        case 'upadteData':
            return {...state, ...action.data}
            break;
        case 'addData':
            return {...state, ...action.data}
            break;
        default:
            return state
    }
}

export const store: any = connect(StoreData);
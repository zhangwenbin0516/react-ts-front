/*
 * Filename: d:\workspaces\react-ts-front\src\redux\reducers\index.ts
 * Path: d:\workspaces\react-ts-front
 * Created Date: Wednesday, May 6th 2020, 4:44:05 pm
 * Author: zhangwenbin
 * 
 * Copyright (c) 2020 Your Company
 */

 import { DataAction } from '@redux/actions/';
 import { StoreState } from '@redux/types/';
 import { ADD_DATA, UPDATE_DATA, DELETE_DATA } from '@redux/constants/';

 export function data(state: StoreState, action: DataAction): StoreState {
     switch(action.type) {
         case ADD_DATA:
             return {...state, ...action.playdata}
        case UPDATE_DATA:
            return {...state, ...action.playdata}
        case DELETE_DATA:
            return {...state, ...action.playdata}
        default:
            return state;
     }
 }
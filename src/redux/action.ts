/**
********************************************
* @Project File: action.ts
* @author: <zhangwenbin>
* @E-mail: <942623159@qq.com>
* @Create Date: 2020/4/15 22:44
********************************************
*/
// 添加数据
export const ADD_DATA = 'ADD_DATA';
export type ADD_DATA = typeof ADD_DATA;

// 更新数据
export const UPDATE_DATA = 'UPDATE_DATA';
export type UPDATE_DATA = typeof UPDATE_DATA;

export interface AddData {
    type: ADD_DATA
}

export interface UpdateData {
    type: UPDATE_DATA
}

export type actions = AddData | UpdateData;

export function addData(): AddData {
    return {
        type: ADD_DATA
    }
}

export function updateData(): UpdateData {
    return {
        type: UPDATE_DATA
    }
}
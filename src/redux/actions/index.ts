/*
 * Filename: d:\workspaces\react-ts-front\src\redux\actions\index.ts
 * Path: d:\workspaces\react-ts-front
 * Created Date: Wednesday, May 6th 2020, 4:10:39 pm
 * Author: zhangwenbin
 * 
 * Copyright (c) 2020 Your Company
 */
import * as constants from '@redux/constants/';

export interface AddData {
    type: constants.ADD_DATA;
    playdata: constants.DATA_TYPE;
}

export interface UpdateData {
    type: constants.UPDATE_DATA;
    playdata: constants.DATA_TYPE;
}

export interface DeleteData {
    type: constants.DELETE_DATA;
    playdata: constants.DATA_TYPE;
}

export type DataAction = AddData | UpdateData | DeleteData;

export const addData = (): AddData => {
    return {
        type: constants.ADD_DATA,
        playdata: constants.DATA_TYPE
    }
}

export const updateData = () => {
    return {
        type: constants.UPDATE_DATA,
        playdata: constants.DATA_TYPE
    }
}

export const deleteData = () => {
    return {
        type: constants.DELETE_DATA,
        playdata: constants.DATA_TYPE
    }
}
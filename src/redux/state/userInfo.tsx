/*
 * Filename: d:\workspaces\react-ts-front\src\redux\state\userInfo.tsx
 * Path: d:\workspaces\react-ts-front
 * Created Date: Thursday, April 30th 2020, 3:56:56 pm
 * Author: zhangwenbin
 * 
 * Copyright (c) 2020 Your Company
 */
import { USERINFO_ADD, USERINFO_UPDATE, USERINFO_DELETE } from '@redux/actions/userInfo';

export interface ACTION_ADD {
    type: USERINFO_ADD,
    playdata: object
}

export interface ACTION_UPDATE {
    type: USERINFO_UPDATE,
    playdata: object
}

export interface ACTION_DELETE {
    type: USERINFO_DELETE,
    playdata: any
}

export type userInfo = ACTION_ADD | ACTION_UPDATE | ACTION_DELETE;
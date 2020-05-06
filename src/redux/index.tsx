/*
 * Filename: d:\workspaces\react-ts-front\src\redux\index.ts
 * Path: d:\workspaces\react-ts-front
 * Created Date: Wednesday, May 6th 2020, 5:22:37 pm
 * Author: zhangwenbin
 * 
 * Copyright (c) 2020 Your Company
 */

import { createStore } from 'redux';
import { data } from '@redux/reducers/';
import { DataAction } from '@redux/actions/';
import { StoreState } from '@redux/types/';
console.log(createStore)
export const store = createStore<StoreState, DataAction, any, any>(data);
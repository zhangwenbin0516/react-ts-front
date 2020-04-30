/*
 * Filename: d:\workspaces\react-ts-front\src\redux\index.tsx
 * Path: d:\workspaces\react-ts-front
 * Created Date: Thursday, April 30th 2020, 9:52:30 am
 * Author: zhangwenbin
 * 
 * Copyright (c) 2020 Your Company
 */
import { createStore } from 'redux';
import { StoreState } from '@redux/state';
import { reducer } from '@redux/reducer';
 export const store = createStore(reducer, {...StoreState});
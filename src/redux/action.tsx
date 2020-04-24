/*
* @FileName: action.tsx
* @Author: <zhangwenbin>
* @e-mail: <942623159@qq.com>
* @Date: 20-4-24 下午6:02
*/
export const ADDACTION = 'ADDACTION';
export const UPDATEACTION = 'UPDATEACTION';

export type ADDACTION = typeof ADDACTION;
export type UPDATEACTION = typeof UPDATEACTION;

export interface ADDAction {
    type: ADDACTION
}

export interface UPDATEAction {
    type: UPDATEACTION
}

export type storeAction = ADDAction | UPDATEAction;

export const addAction = (): ADDAction => ({
    type: ADDACTION
})

export const updateAction = (): UPDATEAction => ({
    type: UPDATEACTION
})
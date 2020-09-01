/*
 * Filename: d:\workspaces\react-ts-front\src\components\page.service.tsx
 * Path: d:\workspaces\react-ts-front
 * Created Date: Thursday, May 7th 2020, 10:18:43 am
 * Author: zhangwenbin
 *
 * Copyright (c) 2020 Your Company
 */
interface Menu {
    name: string,
    path: string,
    value: number|string
}
export const Menus: Array<Menu> = [
    {
        name: '首页',
        path: '/page/home',
        value: ''
    },
    {
        name: '关于我们',
        path: '/page/about',
        value: ''
    },
    {
        name: '新闻资讯',
        path: '/page/news',
        value: ''
    },
    {
        name: '我们的产品',
        path: '/page/product',
        value: ''
    },
    {
        name: '联系我们',
        path: '/page/contact',
        value: ''
    }
]

/*
 * Filename: d:\workspaces\react-ts-front\src\components\page.router.tsx
 * Path: d:\workspaces\react-ts-front
 * Created Date: Thursday, May 7th 2020, 10:18:32 am
 * Author: zhangwenbin
 *
 * Copyright (c) 2020 Your Company
 */
import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
interface Props {   //声明附近文件传值类型
    store: object
}
interface RouteConfig{  //声明路由数据类型
    name?: string,
    value?: string,
    show?: boolean,
    path: string,
    component: any,
}
const routerList:Array<RouteConfig> = [ //声明数组
    {
        name: '首页',
        value: 'home',
        show: true,
        path: '/page/home',
        component: () => import('@page/home/home.module')
    },
    {
        name: '关于我们',
        value: 'about',
        show: true,
        path: '/page/about',
        component: () => import('@page/about/about.module')
    },
    {
        name: '新闻资讯',
        value: 'news',
        show: true,
        path: '/page/news',
        component: () => import('@page/news/news.module')
    },
    {
        name: '我们的产品',
        value: 'product',
        show: true,
        path: '/page/product',
        component: () => import('@page/product/product.module')
    },
    {
        name: '联系我们',
        value: 'contact',
        show: true,
        path: '/page/contact',
        component: () => import('@page/contact/contact.module')
    }
]
class PageRouter extends React.PureComponent<Props, any> {
    constructor(public props: Props) {
        super(props)
    }
    public state:any = {}   //定义state为共有对象
    componentWillMount() {
        this.state.store = this.props.store;
    }
    public render() {
        const { store } = this.state;
        return(<Switch>
            {
                routerList.map((item, index) => {
                    return <Route store={ store } path={ item.path } key={ index } component={ item.component } />
                })
            }
            <Redirect to={routerList[routerList.length - 1].path} />
        </Switch>)
    }
}

export default PageRouter;

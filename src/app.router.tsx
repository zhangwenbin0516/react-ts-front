/*
 * Filename: d:\workspaces\react-ts-front\src\app.router.tsx
 * Path: d:\workspaces\react-ts-front
 * Created Date: Thursday, May 7th 2020, 9:56:20 am
 * Author: zhangwenbin
 * 
 * Copyright (c) 2020 Your Company
 */
import React from 'react';
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';
interface Props {   //声明附近文件传值类型
    store: object
}
interface RouteConfig{  //声明路由数据类型
    name: string,
    value: string,
    show: boolean,
    path: string,
    component: any,
}
const routerList:Array<RouteConfig> = [ //声明数组
    {
        name: '程序入口',
        value: 'page',
        show: true,
        path: '/page',
        component: require('@page/page.module').default
    }
]
class AppRouter extends React.PureComponent<Props, any> {
    constructor(public props: Props) {
        super(props)
    }
    public state:any = {}   //定义state为共有对象
    componentWillMount() {
        this.state.store = this.props.store;
    }
    public render() {
        const { store } = this.state;
        return(<Router>
            <Switch>
                {
                    routerList.map((item, index) => {
                        return <Route store={ store } path={ item.path } key={ index } component={ item.component } />
                    })
                }
                <Redirect to='/page' />
            </Switch>
        </Router>)
    }
}

export default AppRouter;
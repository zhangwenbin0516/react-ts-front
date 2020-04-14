/*
 * File: app.router.tsx
 * Project: react-ts-front
 * File Created: Tuesday, 7th April 2020 9:20:39 am
 * Author: <<zhangwenbin>> (<<942623159@qq.com>>)
 * -----
 * Last Modified: Tuesday, 7th April 2020 11:51:07 am
 * Modified By: <<zhangwenbin>> (<<942623159@qq.com>>>)
 * -----
 * Copyright 2017 - 2020 Your Company, Your Company
 */
import * as React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import PageModule  from './components/page.module';
const Routes: Array<any> = [
    {
        name: '首页',
        value: '',
        isShow: true,
        isPath: '',
        path: '/',
        component: PageModule
    }
]
interface AppProps {}
interface AppState {}
export class AppRouter extends React.Component<AppProps, AppState>{
    constructor(public props: AppProps) {
        super(props);
    }
    public render() {
        return(<Router>
            {
                Routes.map((item, index) => {
                    return <Route path={ item.path } component={item.component} key={index} />
                })
            }
        </Router>)
    }
}

export default AppRouter;
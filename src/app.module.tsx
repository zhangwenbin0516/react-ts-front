/*
 * File: index.ts
 * Project: question-test-front
 * File Created: Wednesday, 15th April 2020 10:38:59 am
 * Author: <<zhangwenbin>> (<<942623159@qq.com>>)
 * -----
 * Last Modified: Wednesday, 15th April 2020 10:39:06 am
 * Modified By: <<zhangwenbin>> (<<942623159@qq.com>>>)
 * -----
 * Copyright 2017 - 2020 Your Company, Your Company
 */
import React from 'react';
import ReactDOM from 'react-dom';
import { ConfigProvider } from 'antd';
import zhCN from 'antd/es/locale/zh_CN';
import { Provider } from 'react-redux';
import { createStore } from 'redux';

import { reducer } from '@redux/reducers/';
const store = createStore(reducer);

import AppRouter from '@/app.router';

interface Props {}
class AppModule extends React.PureComponent<Props, any> {
    protected doc: any = window;
    protected win: any = document;
    constructor(public props: Props) {
        super(props)
    }

    componentDidMount(): void {
        this.reSize();
        this.win.addEventListener('resize', this.reSize);
    }

    componentWillUnmount(): void {
        this.win = window;
        this.win.removeEventListener('resize', this.reSize);
    }

    protected reSize() {
        this.win = window;
        this.doc = document;
        let width: number = this.doc.documentElement.clientWidth;
        if (width < 1336) {
            width = 1336;
        }
        let num: number = width * 100 / 1920;
        this.doc.documentElement.style.fontSize = num + 'px';
    }

    public render() {
        return(<ConfigProvider locale={zhCN}>
            <Provider store={store}>
                <AppRouter store= { store } />
            </Provider>
        </ConfigProvider>)
    }
}

ReactDOM.render(<AppModule />, document.getElementById('root') as HTMLElement);

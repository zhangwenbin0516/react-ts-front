/*
 * File: app.router.ts
 * Project: react-ts-front
 * File Created: Wednesday, 1st April 2020 2:18:55 pm
 * Author: <<zhangwenbin>> (<<942623159@qq.com>>)
 * -----
 * Last Modified: Wednesday, 1st April 2020 2:18:57 pm
 * Modified By: <<zhangwenbin>> (<<942623159@qq.com>>>)
 * -----
 * Copyright 2017 - 2020 Your Company, Your Company
 */
import * as React from 'react';
import { BrowserRouter } from 'react-router-dom';

export class AppRouter extends React.Component<object, any> {
    constructor(props: object) {
        super(props);
    }
    render(): JSX.Element {
        return(<BrowserRouter></BrowserRouter>)
    }
}
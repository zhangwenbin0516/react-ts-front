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
import { Provider } from 'react-redux';

import {store} from '@redux/index';

interface Props {}
interface State {}
class AppModule extends React.Component<Props, State> {
    constructor(public props: Props) {
        super(props)
    }
    public render() {
        return(<Provider store={store}>
            <div></div>
        </Provider>)
    }
}

ReactDOM.render(<AppModule />, document.getElementById('root') as HTMLElement);
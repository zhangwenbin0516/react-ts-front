/*
********************************************
* @Project File: app.module.ts
* @author: <zhangwenbin>
* @E-mail: <942623159@qq.com>
* @Create Date: 2020/3/30 1:14
********************************************
*/
import * as React from "react";
import { render } from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { store } from './redux';
import { ConfigProvider } from 'antd';
import zh_CN from 'antd/es/locale/zh_CN';
interface IProps {}     // 声明props接口
interface IState {}   // 声明state接口
class App extends React.Component<IProps, IState>{
    constructor(props: object) {
        super(props);
    }
    render(): JSX.Element{
        return(<Provider store={store}>
            <ConfigProvider locale={zh_CN}>
                <BrowserRouter></BrowserRouter>
            </ConfigProvider>
        </Provider>)
    }
}

render(<App />, document.getElementById('root'));
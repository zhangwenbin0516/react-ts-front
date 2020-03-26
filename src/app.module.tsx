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
import { Provider } from 'react-redux';
import { store } from './redux';
interface IProps {}     // 声明props接口
interface IState {}     // 声明state接口
class App extends React.Component<IProps, IState>{
    constructor(props: object) {
        super(props);
    }
    render(): JSX.Element{
        return(<Provider store={store}>

        </Provider>)
    }
}

render(<App />, document.body || HTMLElement);
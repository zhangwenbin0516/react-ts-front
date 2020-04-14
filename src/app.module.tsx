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
// import { Provider } from 'react-redux';
// import { store } from './redux';
// import AppRouter from './app.router';
import { LocaleProvider } from 'antd';
import zh_CN from 'antd/es/locale/zh_CN';

interface IProps {}     // 声明props接口
interface IState {}   // 声明state接口
class App extends React.Component<IProps, IState>{
    constructor(public props: object) {
        super(props);
    }
    public render(): any{
        return( <LocaleProvider locale={zh_CN}>
            {/*<AppRouter />*/}
        </LocaleProvider>)
    }
}

render(<App />, document.getElementById('root') as HTMLElement);
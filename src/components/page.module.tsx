/**
********************************************
* @Project File: index.tsx
* @author: <zhangwenbin>
* @E-mail: <942623159@qq.com>
* @Create Date: 2020/4/15 22:43
********************************************
*/
import React from 'react';
interface Props {
    history?: any
    match?: any
    location?: any
    store?: any
}
import "./page.style.scss";
import HeaderModule from "@template/header/header.module";
import PageRouter from "@page/page.router";
class PageModule extends React.PureComponent<Props>{
    constructor(public props: Props) {
        super(props);
    }
    public state:any = {}
    componentWillMount() {


    }
    public render() {
        return(<div className="page">
            <HeaderModule { ...this.props } />
            <div className="page-master">
                <PageRouter { ...this.props } />
            </div>
        </div>)
    }
}

export default PageModule;

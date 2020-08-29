/**
********************************************
* @Project File: index.tsx
* @author: <zhangwenbin>
* @E-mail: <942623159@qq.com>
* @Create Date: 2020/4/15 22:43
********************************************
*/
import React from 'react';
interface Props {}
import "./home.style.scss";

import BannerComponent from "@template/banner/banner.component";

class HomeModule extends React.PureComponent<Props>{
    constructor(public props: Props) {
        super(props);
    }
    public state:any = {}
    componentWillMount() {

    }
    public render() {
        return(<div className="home">
            <div className="home-banner">
                <BannerComponent />
            </div>
        </div>)
    }
}

export default HomeModule;

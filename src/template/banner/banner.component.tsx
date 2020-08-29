/**
********************************************
* @Project File: index.tsx
* @author: <zhangwenbin>
* @E-mail: <942623159@qq.com>
* @Create Date: 2020/4/15 22:43
********************************************
*/
import React from 'react';
import "./banner.style.scss";
const banner: any = require('@/assets/images/dsf-banner.png').default;
class BannerComponent extends React.PureComponent<any>{
    constructor(public props: any) {
        super(props);
    }
    componentDidMount() {

    }
    public render() {
        return(<div className="banner">
            <div className="banner-list">
                <img className="banner-list-img" src={ banner } />
            </div>
        </div>)
    }
}

export default BannerComponent;

/**
********************************************
* @Project File: index.tsx
* @author: <zhangwenbin>
* @E-mail: <942623159@qq.com>
* @Create Date: 2020/4/15 22:43
********************************************
*/
import React from 'react';

class PageModule extends React.Component<any, any>{
    constructor(public props: any) {
        super(props);
    }
    componentWillMount() {
        console.log(this.props)
    }
    public render() {
        return(<div className="page-master"></div>)
    }
}

export default PageModule;
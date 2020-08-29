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
import "./news.style.scss";
import NewComponent from "@page/news/new.component";
import DetailComponent from "@page/news/detail.component";
class NewsModule extends React.PureComponent<Props>{
    constructor(public props: Props) {
        super(props);
    }
    public state:any = {}
    componentWillMount() {
    }
    public render() {
        return(<div className="news">
            <DetailComponent />
        </div>)
    }
}

export default NewsModule;

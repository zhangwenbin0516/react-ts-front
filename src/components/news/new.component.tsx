import React from 'react';
interface Props {}
import BannerComponent from "@template/banner/banner.component";
import { newsList } from './news.data';
class NewComponent extends React.PureComponent<Props>{
    constructor(public props: Props) {
        super(props);
    }
    public state:any = {}
    componentWillMount() {
    }
    public render() {
        return(<div className="news-master">
            <div className="news-banner">
                <BannerComponent />
            </div>
            <div className="news-content">
                <div className="news-content-lists">
                    {
                        newsList.map((item, index) => {
                            return <div className="news-content-list" key={index}>
                                <div className="img" style={{backgroundImage: `url(${ item.img })`}}></div>
                                <div className="title list ellipsis">{ item.title }</div>
                                <div className="time list">{ item.com }{ item.time }</div>
                                <div className="des list">{ item.des }</div>
                            </div>
                        })
                    }
                </div>
            </div>
        </div>)
    }
}

export default NewComponent;

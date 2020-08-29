import React from 'react';
interface Props {}
const BgImage: any = require('@/assets/images/dsf-banner.png').default;
class DetailComponent extends React.PureComponent<Props>{
    constructor(public props: Props) {
        super(props);
    }
    public state:any = {}
    componentWillMount() {
    }
    public render() {
        return(<div className="news-master">
            <div className="news-detail news-detail-title">
                <div className="news-detail-info">
                    牛羊肉冻品销售平台“冻师傅”完成数千万元Pre-A轮融资
                    <div className="news-detail-back">全部新闻</div>
                </div>
            </div>
            <div className="news-detail news-detail-content">
                <div className="news-detail-article">
                    <div className="news-detail-sider">
                        <div className="list" style={{fontSize: '.2rem'}}>2020</div>
                        <div className="list" style={{fontSize: '.3rem', marginTop: '.15rem'}}>08/20</div>
                        <div className="list" style={{fontSize: '.12rem', color: '#999', marginTop: '.4rem'}}>冻师傅头条</div>
                    </div>
                    <div className="img">
                        <img src={BgImage} />
                    </div>
                    <div className="p">
                        <p>一. 原则</p>
                        <p>我们一直致力于为用户提供绿色、健康的生态环境，努力打造一个企业、机构与个人用户之间交流和服务的优质平台，给予用户更多的选择和便利，进一步降低沟通和交易成本并创造更多的社会价值。</p>
                        <p>为了更好的实现这一目标，我们确定以下平台运营的基本原则，不仅作为平台使用者一切权责的基础，更期待您与我们携手共同维护平台运营秩序，规范自律，互融共进。</p>
                        <p>—— 建立良好的用户体验</p>
                        <p>• 开发运营含有丰富交流与互动元素的公众号；</p>
                        <p>• 为用户提供更多的选择（内容多样）和控制；</p>
                        <p>• 提供具有价值的、持续性的并与该帐号高度相关的内容。</p>
                    </div>
                </div>
            </div>
        </div>)
    }
}

export default DetailComponent;

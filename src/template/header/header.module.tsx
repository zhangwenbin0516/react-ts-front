/**
********************************************
* @Project File: index.tsx
* @author: <zhangwenbin>
* @E-mail: <942623159@qq.com>
* @Create Date: 2020/4/15 22:43
********************************************
*/
import React from 'react';
import { Link } from 'react-router-dom';
import "./header.style.scss";
import { Menus } from './header.data';
class HeaderModule extends React.PureComponent<any>{
    constructor(public props: any) {
        super(props);
    }
    public state:any = {
        pathName: '/page/home'
    }
    componentDidMount() {
        this.props.history.listen((location: any) => {
            this.setState({
                pathName: location.pathname
            })
        })
    }
    protected onPage() {
       this.props.history.push('/page/home');
    }
    public render() {
        const { pathName } = this.state;
        return(<div className="header">
            <div className="header-content">
                <div className="header-logo" onClick={ this.onPage.bind(this) }></div>
                <div className="header-menu">
                    {
                        Menus.map((item, index) => {
                            return <Link to={ item.path } key={ index }
                                         className={`menu${pathName.match(item.path) ? ' active' : ''}`}>{ item.name }</Link>
                        })
                    }
                </div>
            </div>
        </div>)
    }
}

export default HeaderModule;

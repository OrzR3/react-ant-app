import React, {Component} from 'react';
import {withRouter} from "react-router-dom";
import {Modal} from 'antd';

import moment from "moment"
import memoryUtils from '../../utils/memoryUtils'
import storageUtils from '../../utils/storageUtils';

import {reqWeather} from "../../api"
import menuList from '../../config/menuConfig';
import "./index.less"
import logo from "../../assets/images/moji.jpg"
import LinkButton from '../link-button';

class Header extends Component {

    state = {
        currentTime: moment(parseInt(Date.now())).format('YYYY年MM月DD日 HH:mm:ss'),
        temp: '',
        weather: '',
    };

    getTime = () => {
        this.intervalId = setInterval(() => {
            const currentTime = moment(parseInt(Date.now())).format('YYYY年MM月DD日 HH:mm:ss');
            this.setState({currentTime});
        });
    };

    getWeather = async () => {
        const {temp, weather} = await reqWeather("长沙");
        // 获取数据之后，更新状态
        this.setState({temp, weather});
    }

    getTitle = () => {
        // 得到当前请求路径
        const path = this.props.location.pathname;
        let title;
        menuList.forEach(item => {
            if (item.key === path) {
                title = item.title;
            } else if (item.children) {
                const cItem = item.children.find(cItem => cItem.key === path);
                if (cItem) {
                    title = cItem.title;
                }
            }
        })
        return title;
    }
    /*
    退出登录
    */
    logout = (e) => {
        e.preventDefault();
        const history = this.props.history;
        Modal.confirm({
            content: '确定退出吗？',
            onOk() {
                console.log('OK');
                storageUtils.removeUser();
                memoryUtils.user = {};
                history.replace('/login');
            }
        });
    }

    /* 第一次render()之后执行一次
    一般在此执行异步操作：发ajax请求/启动定时器 */
    componentDidMount() {
        //获取当前时间
        this.getTime();
        // 获取当前天气
        this.getWeather();
    }

    /*
     当前组件卸载之前调用

     */
    componentWillMount() {
        // 清除定时器
        clearInterval(this.intervalId);
    }

    render() {
        const {currentTime, temp, weather} = this.state;
        const username = memoryUtils.user.username;
        const title = this.getTitle();
        return (
            <div className="header">
                <div className="header-top">
                    <span>欢迎, {username}</span>
                    <LinkButton onClick={this.logout.bind(this)}>
                        退出
                    </LinkButton>
                </div>
                <div className="header-bottom">
                    <div className="header-bottom-left">{title}</div>
                    <div className="header-bottom-right">
                        <span>{currentTime}</span>
                        <img src={logo} alt="weather"/>
                        <span>{weather}</span>
                        <span></span>
                        <span>{temp}</span>
                    </div>
                </div>
            </div>
        );
    }
}

export default withRouter(Header)
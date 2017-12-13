import * as React from "react";
import "./style.scss";
import { IconComments } from "../../blog.plugins.common/icons";


export class Home extends React.Component {
    render() {
        return (
            <div id="home-content">
                <section className="home-bg">
                    <div className="intro-overlay">
                        <h5>Hello, World.</h5>
                        <h1>Welcome To My Blog</h1>
                        <p className="intro-position">
                            <span>技术博客</span>
                            <span>插件整理</span> 
                            <span>交流经验</span> 
                        </p>
                        <section id="section03" className="demo">
	                        <a href="#section04"><span></span></a>
                        </section>
                        <div className="menu">
                            <span className="menu-item">
                                <span className="icon-wrap">
                                    <IconComments type="blog" width = {35} height={35} />
                                </span>
                                <span className="tip">blog</span>
                            </span>
                            <span className="menu-item">
                                <span className="icon-wrap">
                                    <IconComments type="newest" width = {30} height={30} />
                                </span>
                                <span className="tip">最新发布</span>
                            </span>
                            <span className="menu-item">
                                <span className="icon-wrap">
                                    <IconComments type="recommend" width = {30} height={30} />
                                </span>
                                <span className="tip">博主推荐</span>
                            </span>
                            <span className="menu-item">
                                <span className="icon-wrap">
                                    <IconComments type="contact" width ={28} height={28} />
                                </span>
                                <span className="tip">联系我</span>
                             </span>
                        </div>
                    </div>
                </section>
            </div>
        )
    }
}
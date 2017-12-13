import * as React from "react";
import "./style.scss";
import {IconComments} from "../../blog.plugins.common/icons";

export class Home extends React.Component {
    render() {
        return (
            <div id="home-content">
                <section className="home-bg"> 
                </section>
                    <div className="intro-overlay">
                        <h5>Hello, World.</h5>
                        <h1>Welcome To My Blog</h1>
                        <p className="intro-position">
                            <span>技术博客</span>
                            <span>插件整理</span>
                            <span>交流经验</span>
                        </p>
                        <section id="next" className="demo">
                            <a href="#section04"></a>
                        </section>
                        <div className="menu">
                            <span className="menu-item">
                                <span className="icon-wrap">
                                    <IconComments type="blog" width={35} height={35}/>
                                </span>
                                <span className="tip">blog</span>
                            </span>
                            <span className="menu-item">
                                <span className="icon-wrap">
                                    <IconComments type="newest" width={30} height={30}/>
                                </span>
                                <span className="tip">最新发布</span>
                            </span>
                            <span className="menu-item">
                                <span className="icon-wrap">
                                    <IconComments type="recommend" width={30} height={30}/>
                                </span>
                                <span className="tip">博主推荐</span>
                            </span>
                            <span className="menu-item">
                                <span className="icon-wrap">
                                    <IconComments type="contact" width ={28} height={28}/>
                                </span>
                                <span className="tip">联系我</span>
                            </span>
                        </div>
                    </div>
               
                <section id="about">
                    <h1 className="arrow">A little<span>about</span> me</h1>
                    <p>I am enough of an artist to draw freely upon my imagination. The point is
                        that when I see a sunset or a
                        <a href="#">waterfall</a>
                        or something, for a split second it's so great, because for a little bit I'm out
                        of my brain, and it's got nothing to do with me. I'm not trying to figure it
                        out, you know what I mean? And I wonder if I can somehow find a way to maintain
                        that mind stillness.</p>
                </section>
            </div>
        )
    }
}
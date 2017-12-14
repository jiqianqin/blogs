import * as React from "react";
import {IconComments} from "../../../blog.plugins.common";
import {IProps} from "../constants/home";
import {hoc} from "../containers/home";
import "../styles/style.scss";

export class Home extends React.Component < IProps,
any > {
    banner() {
        return (
            <section className="intro-overlay swiper-slide">
                <h5>Hello, World.</h5>
                <h1>Welcome To My Blog</h1>
                <p className="intro-position">
                    <span>技术博客</span>
                    <span>插件整理</span>
                    <span>交流经验</span>
                </p>
                <div id="next">
                    <a onClick={() => {this.props .goNext() }}></a>
                </div>
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
            </section>
        )
    }
    
    render() {
        return (
            <div id="home-content" className="swiper-container">
                <section className="home-bg"></section>
                <div className="swiper-wrapper">
                    {this.banner()}
                    <section id="about" className="swiper-slide">
                        <h1 className="arrow">A little<span>
                                about
                            </span>
                            this Web</h1>
                        <p>该网站仅用于个人使用，不做商业用途，不负任何法律责任。在该网站中，主要记录了个人技术博客，以及转载了一些他人好的技术文档。同时，记录了一些个人感觉比较好的插件，以及自己封装的一些插件。</p>
                    </section>
                </div>
            </div>
        )
    }
}

export const HomeHOC = hoc(Home);
export default HomeHOC;
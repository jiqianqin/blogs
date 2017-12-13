import * as React from "react";
import "./style.scss";

export class Home extends React.Component {
    render() {
        return (
            <div id="home-content">
                <section className="home-bg">
                    <div className="intro-overlay">
                        <h5>Hello, World.</h5>
                        <h1>Welcome To My Blog.</h1>
                    </div>
                </section>
            </div>
        )
    }
}
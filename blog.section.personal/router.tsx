import * as React from 'react';
import {Route, Switch} from 'react-router-dom';
import { Counter} from "./couter";

// const counter = require("bundle-loader?lazy&name=counter!./couter/component/couter");

export  class RouterComponent extends React.Component < any, any > {
    render() {
        return (
            <Switch>
                <Route exact path="/personal/counter" component={Counter}/>
            </Switch>
        );
    }
}

export default RouterComponent;
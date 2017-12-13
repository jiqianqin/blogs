import * as React from 'react';
import {Route, Switch} from 'react-router-dom';
import { bundle } from '../blog.plugins.common/bundle';
import { RouterComponent } from '../blog.section.personal/router';
const Home = require("bundle-loader?lazy&name=home!./home");
const NotFound = require("bundle-loader?lazy&name=notFound!./notfound/notfound");
// const personalRouter = require("bundle-loader?lazy&name=personal!../blog.section.personal/router");

const getRouter = () => (
    <Switch>
        <Route exact path="/" component={bundle(Home)}/>
        <Route path="/personal" component={RouterComponent} />
        <Route component={bundle(NotFound)}/>
        
    </Switch>
);

export default getRouter;
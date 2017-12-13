import * as React from 'react';
import * as ReactDom from 'react-dom';
import {AppContainer} from 'react-hot-loader';
import {Provider} from 'react-redux';
import store from './redux/store';
import {BrowserRouter as Router} from 'react-router-dom';
// import App from './components/app/app';
import Home from "./home";

if (MOCK) {
    require('../blog.plugins.mock/mock');
}

renderWithHotReload(Home);

if (module.hot) {
    module.hot.accept('./router', () => {
        const NextApp = require('./router').default;
        renderWithHotReload(NextApp);
    });
}

function renderWithHotReload(RootElement) {
    ReactDom.render(
        <AppContainer>
            <Provider store={store}>
                <Router>
                    <RootElement/>
                </Router>
            </Provider>
        </AppContainer>,
        document.getElementById('app')
    )
}
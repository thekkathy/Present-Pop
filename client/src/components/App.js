import React from 'react';
import { Router, Route } from 'react-router-dom';
import history from '../history';

import Header from './Header';
import OpenPresent from './OpenPresent';
import Load from './Load';

class App extends React.Component {
    render() {
        return (
            <div>
                <Router history={history}>
                    <Header />
                    <Route path="/" exact component={OpenPresent} />
                    <Route path="/load" exact component={Load} />
                </Router>
            </div>
        );
    }
}

export default App;
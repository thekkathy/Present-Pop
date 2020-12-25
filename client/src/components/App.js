import React from 'react';
import { Router, Route } from 'react-router-dom';
import history from '../history';

import Header from './Header';
import OpenPresent from './OpenPresent';
import Load from './Load';
import Present from './Present';

class App extends React.Component {
    state = { redirect: false, id: '' };

    //randomly selects which present to display to the user
    selectPresent() {
        //selects a number between 0 - 99 inclusive
        const maxNum = 100;
        const selectedId = Math.floor(Math.random() * Math.floor(maxNum));
        this.setState({ id: selectedId });
    }

    render() {
        return (
            <div>
                <Router history={history}>
                    <Header />
                    <Route path="/" exact component={OpenPresent} />
                    <Route path="/load" exact component={Load}/>
                    <Route path="/present/:id" exact component={Present} />
                </Router>
            </div>
        );
    }
}

export default App;
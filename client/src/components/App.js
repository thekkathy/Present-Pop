import React from 'react';
import { Router, Route } from 'react-router-dom';
import history from '../history';
import "./CSS/OpenPresent.css"

import Header from './Header';
import OpenPresent from './OpenPresent';
import Load from './Load';
import Present from './Present';
import Instructions from './Instructions';

class App extends React.Component {

    render() {
        return (
            <div>
                <Router history={history}>
                    <Header />
                    <Route path="/" exact component={Instructions} />
                    <Route path="/openPresent" exact component={OpenPresent} />
                    <Route path="/load" exact component={Load}/>
                    <Route path="/present/:id" exact component={Present} />
                </Router>
                
                <div className="snowflakes"><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i></div>

                <div className="snowflakes" aria-hidden="true">
                    <div className="snowflake">
                    ❅
                    </div>
                    <div className="snowflake">
                    ❆
                    </div>
                    <div className="snowflake">
                    ❅
                    </div>
                    <div className="snowflake">
                    ❆
                    </div>
                    <div className="snowflake">
                    ❅
                    </div>
                    <div className="snowflake">
                    ❆
                    </div>
                    <div className="snowflake">
                    ❅
                    </div>
                    <div className="snowflake">
                    ❆
                    </div>
                    <div className="snowflake">
                    ❅
                    </div>
                    <div className="snowflake">
                    ❆
                    </div>
                    <div className="snowflake">
                    ❅
                    </div>
                    <div className="snowflake">
                    ❆
                    </div>
                    <div className="snowflake">
                    ❅
                    </div>
                    <div className="snowflake">
                    ❆
                    </div>
                    <div className="snowflake">
                    ❅
                    </div>
                    <div className="snowflake">
                    ❆
                    </div>
                    <div className="snowflake">
                    ❅
                    </div>
                    <div className="snowflake">
                    ❆
                    </div>
                    <div className="snowflake">
                    ❅
                    </div>
                    <div className="snowflake">
                    ❆
                    </div>
                </div>
            </div>
        );
    }
}

export default App;
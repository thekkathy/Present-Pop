import React from 'react';
import { Router, Route } from 'react-router-dom';
import history from '../history';
import "./CSS/OpenPresent.css"

import Header from './Header';
import OpenPresent from './OpenPresent';
import Load from './Load';
import Present from './Present';
// import Instructions from './Instructions';

import { connect } from 'react-redux';
import { setVisited, setMode } from '../actions';

class App extends React.Component {
    componentDidMount(){
        console.log(this.props.mode);
    }

    onToggle = () =>{
        this.props.setMode(!this.props.mode);
    }

    render() {
        return (
            <div>
                <Router history={history}>
                    <Header onToggle={this.onToggle}/>
                    <Route path="/" exact component={OpenPresent} />
                    <Route path="/load" exact component={Load} />
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

const mapStateToProps = (state) => {
    return ({ visited: state.visited.alreadyVisited, mode: state.mode.mode });
}

export default connect(mapStateToProps, { setVisited, setMode })(App);
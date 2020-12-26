import React from 'react';
import { connect } from 'react-redux';
import { setMode } from '../actions';
import ToggleMode from './ToggleMode';
import './CSS/Header.css';

class Header extends React.Component {
    state={toggleState: false};

    render(){
        return (
            <div className="navbar">
                <ToggleMode onToggle={this.setToggle} />
            </div>
        );
    }


    
}

const mapStateToProps = (state) => {
    return { mode: state.mode.mode };
}

export default connect(mapStateToProps, {setMode})(Header);
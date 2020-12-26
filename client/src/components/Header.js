import React from 'react';
//import {Link} from 'react-router-dom';
//import GoogleAuth from './GoogleAuth';
import ToggleMode from './ToggleMode';
import './CSS/Header.css';

const Header = () =>    {
    return(
        <div className="navbar">
            <ToggleMode />
        </div>
    )
}

export default Header;
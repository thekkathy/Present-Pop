import React, { useEffect } from 'react';
//import {Link} from 'react-router-dom';
//import GoogleAuth from './GoogleAuth';
import ToggleMode from './ToggleMode';
import './CSS/Header.css';

const Header = (props) => {
    useEffect(()=>{
        console.log(props);
    }, []);

    
    return (
        <div className="navbar">
            <ToggleMode onToggle={props.onToggle} />
        </div>
    )
}

export default Header;
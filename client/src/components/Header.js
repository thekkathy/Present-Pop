import React from 'react';
import {Link} from 'react-router-dom';

const Header = () =>    {
    return(
        <div className="navbar">
            <Link to="/" className="headerLink">
                Open present
            </Link>
            <Link to="/list" className="headerLink">
                Present List
            </Link>
        </div>
    )
}

export default Header;
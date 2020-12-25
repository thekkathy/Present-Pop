import React from 'react';
import {Link} from 'react-router-dom';

const Header = () =>    {
    return(
        <div className="navbar">
            <Link to="/">
                Open Present
            </Link>
        </div>
    )
}

export default Header;
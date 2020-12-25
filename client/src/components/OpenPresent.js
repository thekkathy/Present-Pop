import React from 'react';
import { Link } from 'react-router-dom';

import Gift from "../images/gift.png"
import './CSS/OpenPresent.css'

class OpenPresent extends React.Component {
    
    render() {
        return (
            <div className="openPresent">
                <h1 className="title">
                    Present Opener
                </h1>

                <h2 className="subtitle">
                    A drop of surprise 🙃
                </h2>

                <Link to="/load">
                    <img id="gift" src={Gift} alt="Gift box"></img>
                </Link>

                <h4 className="content">
                    Click on the gift box to open your present
                </h4>
            </div>
        );
    }
}

export default OpenPresent;
import React from 'react';
import { Link } from 'react-router-dom';

import Coal from '../images/coal.png';

class Present extends React.Component {
    render() {
        return (
            <div>
                <div className="subtitle">
                    You got...
                </div>

                <a href="https://en.wikipedia.org/wiki/Coal">
                    <img className="presentImage" src={Coal} alt="some coal" />
                </a>

                <div className="title">Coal</div>

                <div className="content">
                    A flammable black rock. Click on the image to educate yourself :)
                    <br />
                    You had a 40% chance of getting this.
                </div>

            </div>
        );
    }
}

export default Present;
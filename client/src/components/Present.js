import React from 'react';

import Coal from '../images/coal.png';

import './CSS/Present.css';

class Present extends React.Component {
    state = { image: '', message: '', href: '' };

    componentDidMount = () => {
        const id = this.props.match.params.id;
        console.log(id);
    }

    renderPresent(){
        const id = this.props.match.params.id;
    }

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
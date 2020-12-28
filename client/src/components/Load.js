import React from 'react';
import { Redirect } from 'react-router-dom';

import Gift from "../images/gift.png"
import { generateRandomNumber } from '../generateRandom';

import './CSS/Load.css';

class Load extends React.Component {

    state = { redirect: false };

    componentDidMount() {
        //when load page first loads up, wait on loading for 1.5 seconds
        //then change redirect to true
        this.timeout = setTimeout(() =>
            this.setState(
                { redirect: true }),
            1000
        );
    }

    //clear timer when done
    componentWillUnmount() {
        clearTimeout(this.timeout);
    }

    // //randomly selects which present to display to the user
    // selectPresent() {
    //     //selects a number between 0 - 99 inclusive
    //     const maxNum = 100;
    //     return Math.floor(Math.random() * Math.floor(maxNum));
    // }

    render() {
        return (
            this.state.redirect
                ? <Redirect to={`/present/${generateRandomNumber()}`} />
                :
                <div className="load">
                    <img id="loadImg" src={Gift} alt="gift pic" />
                    <br />
                        Opening present...
                    </div>

        )

    }
}

export default Load;
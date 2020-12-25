import React from 'react';
// import history from '../history';
import { Redirect } from 'react-router-dom';
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

    getRandomInt(max){
        return Math.floor(Math.random() * Math.floor(max));
    }

    selectPresent(){
        console.log(this.getRandomInt(10));
    }

    render() {
        return (
            this.state.redirect
                ? <Redirect to="/present" />
                : <div className="load"> Opening present... </div>
            )

    }
}

export default Load;
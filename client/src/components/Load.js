import React from 'react';
import history from '../history';
import './CSS/Load.css';

class Load extends React.Component {
    state = { redirect: false };

    componentDidMount(){
        //when load page first loads up, wait on loading for 1.5 seconds
        //then change redirect to true
        setTimeout(() => {
            this.setState({
                redirect: true
            })
        }, 1500);
    }
    
    renderRedirect(){
        //if redirect is true, then redirect user to present
        if(this.state.redirect){
            history.push("/present");
        }
    }

    render() {
        this.renderRedirect();

        return (
            <div className="load">
                Opening present...
            </div>
        );
    }
}

export default Load;
import React from 'react';
import { connect } from 'react-redux';
import { signIn, signOut } from '../actions';

import './CSS/GoogleAuth.css'

class GoogleAuth extends React.Component {

    componentDidMount() {

        //to access google libraries, we have to load the library we want w/ load function
        window.gapi.load('client:auth2', () => {
            window.gapi.client.init({
                clientId: '18373993603-olucimr7la85t2scklqtgf13ap5jjscp.apps.googleusercontent.com',
                scope: 'email'
            }).then(() => {
                this.auth = window.gapi.auth2.getAuthInstance();
                this.onAuthChange(this.auth.isSignedIn.get());
                this.auth.isSignedIn.listen(this.onAuthChange);
            });
        });
    }

    onAuthChange = (isSignedIn) => {
        if(isSignedIn){
            this.props.signIn(this.auth.currentUser.get().getId());
        }
        else{
            this.props.signOut();
        }
    }

    onSignInClick = () => {
        this.auth.signIn();
    };

    onSignOutClick = () => {
        this.auth.signOut();
    };

    renderAuthButton() {
        if (this.props.isSignedIn === null) {
            return null;
        }
        else if (this.props.isSignedIn) {
            return (
                <button onClick={this.onSignOutClick} className="signIn">
                    <i className="google" />
                    Sign Out
                </button>
            );
        }
        else {
            return (
                <button onClick={this.onSignInClick} className="signOut">
                    <i className="google" />
                    Sign In With Google
                </button>
            );
        }
    }

    render() {
        return (
            <div>{this.renderAuthButton()}</div>
        );
    };
};

const mapStateToProps = (state) => {
    return({ isSignedIn: state.auth.isSignedIn });
}

export default connect(mapStateToProps, { signIn, signOut })(GoogleAuth);
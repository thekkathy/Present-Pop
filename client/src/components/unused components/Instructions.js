import React from 'react';
import Modal from './Modal';
import history from '../../history';
import { Link } from 'react-router-dom';

class Instructions extends React.Component {

    //buttons that you can press
    renderActions() {

        return (
            <React.Fragment>
                <Link to="/openPresent" className="button">
                    Start Opening Presents
                </Link>
            </React.Fragment>
        );
    }

    render() {

        return (
            <Modal
                title="Instructions"
                content="My content"
                actions={this.renderActions()}
                onDismiss={() => history.push('/openPresent')}
            />
        );
    }
};

export default Instructions;
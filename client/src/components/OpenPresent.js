import React from 'react';
import { Link } from 'react-router-dom';
import ReactModal from 'react-modal';
import { CSSTransition } from 'react-transition-group';

import { connect } from 'react-redux';
import { setVisited } from '../actions';

import Gift from "../images/gift.png"
import { text as instructions }  from './instructionText';
import './CSS/OpenPresent.css'

ReactModal.setAppElement("#root");

class OpenPresent extends React.Component {

    state = { viewPopup: false };

    constructor() {
        super();
        this.state = {
            showModal: true
        }

        this.handleOpenModal = this.handleOpenModal.bind(this);
        this.handleCloseModal = this.handleCloseModal.bind(this);
    }

    componentDidMount() {
        console.log(`open present mount ${this.props.visited}`);
        if (this.props.visited) {
            this.setState({ viewPopup: false });
        }
        else {
            this.setState({ viewPopup: true });
        }
    }

    componentWillUnmount() {
        this.props.setVisited();
    }

    handleOpenModal() {
        this.setState({ showModal: true });
    }

    handleCloseModal() {
        this.setState({ showModal: false });
    }

    //{this.state.modalSeen ? <div>closed</div> : this.renderModal }
    render() {
        return (
            <div className="openPresent">
                {this.props.visited ?
                    null :
                    <div>
                        <CSSTransition
                            timeout={300}
                            classNames="dialog"
                            >
                            <ReactModal
                                closeTimeoutMS={500}
                                isOpen={this.state.showModal}
                                onAfterClose={this.afterCloseModal}
                                contentLabel="Instructions modal"
                                onRequestClose={this.handleCloseModal}
                                shouldCloseOnOverlayClick={true}
                                style={{
                                    overlay: {
                                    position: 'fixed',
                                    top: 0,
                                    left: 0,
                                    right: 0,
                                    bottom: 0,
                                    backgroundColor: 'rgba(200, 200, 200, 0.75)'
                                    },
                                    content: {
                                    position: 'absolute',
                                    top: '40px',
                                    left: '40px',
                                    right: '40px',
                                    bottom: '40px',
                                    background: '#FCF7F8',
                                    overflow: 'auto',
                                    WebkitOverflowScrolling: 'touch',
                                    borderRadius: '4px',
                                    outline: 'none',
                                    padding: '20px'
                                    }
                                }}
                            >
                                <h1 id="instructionTitle">Welcome to Present Pop!</h1>
                                <p id="instructions"> {instructions} </p>
                                <button id="goBack" onClick={this.handleCloseModal}>
                                    <span>
                                        🎁 Start Opening Presents 🎁
                                    </span>
                                </button>
                            </ReactModal>
                        </CSSTransition>
                    </div>
                }


                <h1 className="title" id="mainTitle">
                    Present
                    <div className="pop"> Pop</div>
                </h1>

                <h2 className="subtitle" id="mainSubtitle">
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

const mapStateToProps = (state) => {
    return ({ visited: state.visited.alreadyVisited });
}

export default connect(mapStateToProps, { setVisited })(OpenPresent);
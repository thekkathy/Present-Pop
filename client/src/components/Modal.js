import React from 'react';
import ReactDOM from 'react-dom';

import './CSS/Modal.css';

const Modal = (props) => {
    return ReactDOM.createPortal(
        <div
            className="modal"
            onClick={props.onDismiss}
        >
            <div
                onClick={(e) => e.stopPropagation()}
            >
                <div className="header">{props.title}</div>
                <div className="content">{props.content}</div>
                <div className="actions">{props.actions}</div>
            </div>
        </div>,
        document.querySelector('#modal')
    );
};

export default Modal;
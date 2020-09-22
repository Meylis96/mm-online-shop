import React from 'react';
import './Modal.scss';

const Modal = ({ handleClose, show, children}) => {
const showHideClassName = show ? "modal display-block" : "modal display-none";

return (
    <div className={showHideClassName}>
        <div className="container">
            <div className="modal__main">
                {children}
                <button className="modal__close" onClick={handleClose}>&times;</button>
            </div>
        </div>
    </div>
);
};

export default Modal;
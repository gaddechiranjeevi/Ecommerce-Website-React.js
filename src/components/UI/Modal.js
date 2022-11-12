import ReactDOM from 'react-dom'
import React from "react"
import classes from './Modal.module.css'


const ModalOverlay = (props) => {
  return (
    <div className={classes.modal}>
        <div className={classes.content}>{props.children}</div>
    </div>
  );
};

const Modal = (props) => {
  return ReactDOM.createPortal(
    <ModalOverlay onClose={props.onClose}>
      {props.children}
    </ModalOverlay>, 
    document.getElementById('overlay-root'))
};

export default Modal;
import { Fragment } from 'react';
import ReactDOM from 'react-dom';
import './Modal.style.scss';

const Backdrop = ({ onHideCart }) => {
  return <div className='backdrop' onClick={onHideCart} />;
};

const ModalOverlay = ({ children }) => {
  return (
    <div className='modal'>
      <div className='content'>{children}</div>
    </div>
  );
};

const portalElement = document.getElementById('overlays');

const Modal = ({ children, onHideCart }) => {
  return (
    <Fragment>
      {ReactDOM.createPortal(
        <Backdrop onHideCart={onHideCart} />,
        portalElement
      )}
      {ReactDOM.createPortal(
        <ModalOverlay>{children}</ModalOverlay>,
        portalElement
      )}
    </Fragment>
  );
};

export default Modal;

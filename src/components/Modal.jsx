import React, { useEffect, useRef } from 'react';
import { createPortal } from 'react-dom';

/**
 * Modal component that renders its children inside a new DOM element appended to the 'modal' root element.
 * @param {Object} props - The component props.
 * @param {React.ReactNode} props.children - The children to be rendered inside the modal.
 * @returns {React.ReactPortal} The modal component.
 */
const Modal = ({ children }) => {
  const modalRoot = useRef(document.getElementById('modal'));

  const elRef = useRef(document.createElement('div'));

  useEffect(() => {
    const { current: el } = elRef;
    const { current: modal } = modalRoot;

    modal.appendChild(el);

    return () => {
      modal.removeChild(el);
    };
  }, []);

  return createPortal(<div>{children}</div>, elRef.current);
};

export default Modal;

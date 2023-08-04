import { useEffect, useRef } from 'react';
import { createPortal } from 'react-dom';

/**
 * Modal component that renders its children inside a new DOM element appended to the 'modal-root' element.
 * @param {Object} props - The component props.
 * @param {React.ReactNode} props.children - The children to be rendered inside the modal.
 * @returns {React.ReactPortal} The modal component.
 */
const Modal = ({ children }) => {
  const modalRootRef = useRef(document.getElementById('modal'));
  const modalRef = useRef(document.createElement('div'));

  useEffect(() => {
    const modalRoot = modalRootRef.current;
    const modal = modalRef.current;

    modalRoot.appendChild(modal);

    return () => {
      modalRoot.removeChild(modal);
    };
  }, []);

  return createPortal(<div>{children}</div>, modalRef.current);
};

export default Modal;

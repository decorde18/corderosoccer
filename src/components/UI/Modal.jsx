import { useRef, useEffect } from 'react';
import { createPortal } from 'react-dom';

function Modal({ open, children, onClose, className = '' }) {
  const dialog = useRef();
  const cssClasses = `modal ${className}`;

  useEffect(() => {
    const modal = dialog.current;

    if (open) {
      modal.showModal();
    }
    return () => modal.close();
  }, [open]);

  //onClose is necessary if th ec key is pressed or oher reason it coses without changing the open
  return createPortal(
    <dialog className={cssClasses} ref={dialog} onClose={onClose}>
      {open ? children : null}
    </dialog>,
    document.getElementById('modal')
  );
}

export default Modal;

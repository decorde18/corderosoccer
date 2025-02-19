import { createPortal } from 'react-dom';
import { Toaster } from 'react-hot-toast';

const style = {
  fontSize: '16px',
  maxWidth: '500px',
  padding: '16px 24px',
  backgroundColor: 'var(--color-grey-0)',
  color: 'var(--color-grey-700)', // Fixed closing bracket
};
function Toast({ isOpen = false }) {
  return createPortal(
    <Toaster
      isOpen={isOpen}
      position="top-center"
      gutter={12}
      containerStyle={{ margin: '8px' }}
      toastOptions={{
        success: { duration: 3000 },
        error: { duration: 5000 },
        style,
      }}
    />,
    document.getElementById('toast')
  );
}

export default Toast;

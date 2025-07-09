import { FullscreenModal } from '../FullscreenModal';

interface DialogModalProps {
  open: boolean;
  onClose?: () => void;
  onOpen?: () => void;
  onBgClick?: () => void;
  onEsc?: () => void;
  children: React.ReactNode;
}

import styles from './DialogModal.module.scss';

export const DialogModal = ({ children, ...props }: DialogModalProps) => {
  return (
    <FullscreenModal {...props}>
      <div className={styles['dialog-modal__box']}>{children}</div>
    </FullscreenModal>
  );
};

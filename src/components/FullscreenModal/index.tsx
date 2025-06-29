import { useEffect, useRef } from 'react';
import styles from './FullscreenModal.module.css';
import { If } from '../If';
import { useDisableScroll } from '@/hooks/useDisableScroll';

type FullscreenModalProps = {
  open?: boolean;
  onClose?: () => void;
  onOpen?: () => void;
  children: React.ReactNode;
};

export const FullscreenModal = ({
  open = false,
  onOpen,
  onClose,
  children
}: FullscreenModalProps) => {
  const prevOpen = useRef(open);

  useDisableScroll(open);

  useEffect(() => {
    if (prevOpen.current !== open) {
      if (open && onOpen) onOpen();
      if (!open && onClose) onClose();
    }
    prevOpen.current = open;
  }, [open, onOpen, onClose]);

  return (
    <If condition={open}>
      <div className={styles['fullscreen-modal']}>
        <div className={styles['fullscreen-modal__content']}>{children}</div>
      </div>
    </If>
  );
};

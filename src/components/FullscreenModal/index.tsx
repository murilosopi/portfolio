import { useEffect, useRef } from 'react';
import styles from './FullscreenModal.module.css';
import { If } from '../If';
import { useDisableScroll } from '@/hooks/useDisableScroll';

type FullscreenModalProps = {
  open?: boolean;
  onClose?: () => void;
  onOpen?: () => void;
  onBgClick?: () => void;
  onEsc?: () => void;
  children: React.ReactNode;
};

export const FullscreenModal = ({
  open = false,
  onOpen,
  onClose,
  onBgClick,
  onEsc,
  children
}: FullscreenModalProps) => {
  const prevOpen = useRef(open);
  const modalBgRef = useRef<HTMLDivElement>(null);

  const handleBgClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (e.target === modalBgRef.current) {
      onBgClick?.();
    }
  };

  useDisableScroll(open);

  useEffect(() => {
    if (prevOpen.current !== open) {
      if (open && onOpen) onOpen();
      if (!open && onClose) onClose();
    }
    prevOpen.current = open;
  }, [open, onOpen, onClose]);

  useEffect(() => {
    if (!open) return;

    const handleKeyDown = ({ key }: KeyboardEvent) => {
      if (key === 'Escape') onEsc?.();
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [open, onEsc]);

  return (
    <If condition={open}>
      <div
        className={styles['fullscreen-modal']}
        onClick={handleBgClick}
        ref={modalBgRef}
      >
        <div className={styles['fullscreen-modal__content']}>{children}</div>
      </div>
    </If>
  );
};

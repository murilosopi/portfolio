'use client';

import { Button } from '@/components/Button';
import { DialogModal } from '@/components/DialogModal';
import { Icon } from '@/components/Icon';
import { If } from '@/components/If';
import { useEffect, useState } from 'react';

import styles from './EmailToggler.module.scss';
import { ColorVariant } from '@/constants/colors';
import { OptionalLanguage } from '@/types/language';
import { defaultLanguage } from '@/data/languages';
import { aboutMeContent } from '@/contents/aboutMe';

interface EmailTogglerProps extends OptionalLanguage {
  email: string;
}

export const EmailToggler = ({
  email,
  lang = defaultLanguage
}: EmailTogglerProps) => {
  const [dialogOpen, setDialogOpen] = useState(false);
  const [copied, setCopied] = useState(false);
  const [counter, setCounter] = useState(0);
  const [iconEmailFill, setIconEmailFill] = useState<ColorVariant>('light');

  const content = aboutMeContent[lang].emailDialog;

  const handleCopyClick = () => {
    if (copied) return;

    navigator.clipboard.writeText(email).then(() => {
      setCopied(true);

      setCounter(5);
    });
  };

  useEffect(() => {
    if (counter === 0) {
      setCopied(false);
    } else {
      const timeoutId = setTimeout(() => {
        setCounter((prev) => prev - 1);
      }, 1000);

      return () => clearTimeout(timeoutId);
    }
  }, [counter]);

  const closeModal = () => {
    setDialogOpen(false);
    setCopied(false);
    setCounter(0);
  };

  return (
    <>
      <Icon
        role=''
        tag='button'
        title='E-mail'
        type='envelope'
        size='xl'
        onClick={() => setDialogOpen(true)}
      />
      <DialogModal
        open={dialogOpen}
        onEsc={closeModal}
        onBgClick={closeModal}
      >
        <article className={styles['email-toggler__dialog']}>
          <p>
            {content.text?.beforeEmail}
            <a
              className={styles['email-toggler__link']}
              href={`mailto:${email}`}
              onMouseEnter={() => setIconEmailFill('primary')}
              onMouseLeave={() => setIconEmailFill('light')}
            >
              {email}{' '}
              <Icon
                size='sm'
                type='send'
                fill={iconEmailFill}
                hoverFill={'primary'}
              />
            </a>{' '}
            {content.text?.afterEmail}
            <br />
            <small>{content.subtext}</small>
          </p>

          <div className={styles['email-toggler__dialog-actions']}>
            <Button
              variant='light'
              onClick={closeModal}
            >
              {content.closeButton}
            </Button>
            <Button onClick={handleCopyClick}>
              <If
                condition={copied}
                render={
                  <>
                    {content.clipboardButton.copiedText} (
                    {counter > 0 ? counter : ''}){' '}
                    <Icon
                      type='check'
                      size='sm'
                      fill='light'
                      hoverFill='light'
                    />
                  </>
                }
                renderElse={
                  <>
                    {content.clipboardButton.text}{' '}
                    <Icon
                      type='clipboard'
                      size='sm'
                      fill='light'
                      hoverFill='light'
                    />
                  </>
                }
              />
            </Button>
          </div>
        </article>
      </DialogModal>
    </>
  );
};

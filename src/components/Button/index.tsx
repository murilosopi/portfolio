import classNames from 'classnames';
import React from 'react';

type ButtonProps = {
  variant?: ColorVariant;
} & React.ButtonHTMLAttributes<HTMLButtonElement>;

import styles from './Button.module.scss';
import { ColorVariant } from '@/constants/colors';

export const Button = ({
  children,
  variant = 'primary',
  className,
  ...props
}: ButtonProps) => {
  return (
    <button
      {...props}
      className={classNames(
        styles['button'],
        styles[`button--${variant}`],
        className
      )}
    >
      {children}
    </button>
  );
};

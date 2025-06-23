'use client';
import React, { useState } from 'react';
import { Icon, IconType } from '../Icon';
import { ColorVariant } from '@/constants/colors';
import { If } from '../If';

interface InfoCardProps {
  children: React.ReactNode;
  rightIcon?: IconType;
  leftIcon?: IconType;
  variant?: ColorVariant;
}

import styles from './InfoCard.module.css';

export const InfoCard = ({ leftIcon, rightIcon, children }: InfoCardProps) => {
  const [iconFill, setIconFill] = useState<ColorVariant>('primary');

  const handleMouseEnter = () => {
    setIconFill('light');
  };

  const handleMouseLeave = () => {
    setIconFill('primary');
  };

  return (
    <article
      className={styles['info-card']}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <If condition={!!leftIcon}>
        <div className={styles['info-card__icon-wrapper']}>
          <Icon
            className={styles['info-card__left-icon']}
            type={leftIcon as IconType}
            size='xxl'
            fill={iconFill}
            hoverFill={'light'}
          />
        </div>
      </If>

      <div>
        <div className={styles['info-card__content']}>{children}</div>
      </div>

      <If condition={!!rightIcon}>
        <div className={styles['info-card__icon-wrapper']}>
          <Icon
            className={styles['info-card__right-icon']}
            type={rightIcon as IconType}
            size='xxl'
            fill={iconFill}
            hoverFill={'light'}
          />
        </div>
      </If>
    </article>
  );
};

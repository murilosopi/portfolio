'use client';
import React, { useState } from 'react';
import { Icon, IconType } from '../Icon';
import { ColorVariants } from '@/constants/colors';
import { If } from '../If';

interface InfoCardProps {
  children: React.ReactNode;
  rightIcon?: IconType;
  leftIcon?: IconType;
  variant?: ColorVariants;
}

import styles from './InfoCard.module.css';

export const InfoCard = ({ leftIcon, rightIcon, children }: InfoCardProps) => {
  const hasLeftIcon = !!leftIcon;
  const hasRightIcon = !!rightIcon;

  const [iconFill, setIconFill] = useState(ColorVariants.Primary);

  const handleMouseEnter = () => {
    setIconFill(ColorVariants.Light);
  };

  const handleMouseLeave = () => {
    setIconFill(ColorVariants.Primary);
  };

  return (
    <article
      className={styles['info-card']}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <If condition={hasLeftIcon}>
        <div className={styles['info-card__icon-wrapper']}>
          <Icon
            className={styles['info-card__left-icon']}
            type={leftIcon as IconType}
            size='xxl'
            fill={iconFill}
            hoverFill={ColorVariants.Light}
          />
        </div>
      </If>

      <div className={styles['info-card__content']}>{children}</div>

      <If condition={hasRightIcon}>
        <div className={styles['info-card__icon-wrapper']}>
          <Icon
            className={styles['info-card__right-icon']}
            type={rightIcon as IconType}
            size='xxl'
            fill={iconFill}
            hoverFill={ColorVariants.Light}
          />
        </div>
      </If>
    </article>
  );
};

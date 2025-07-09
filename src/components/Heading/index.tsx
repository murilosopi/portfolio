import classNames from 'classnames';
import styles from './Heading.module.scss';
import React, { JSX } from 'react';
import { Icon, IconType } from '../Icon';
import { If } from '../If';

type HeadingProps = {
  as?: keyof JSX.IntrinsicElements;
  leftIcon?: IconType;
  rightIcon?: IconType;
  children: React.ReactNode;
  variant?: 'primary';
  className?: string;
};

export const Heading = ({
  children,
  as: Tag = 'h2',
  leftIcon,
  rightIcon,
  variant,
  className: classNameProp = '',
  ...props
}: HeadingProps) => {
  const className = classNames(styles.heading, {
    [styles[`heading--${variant}`]]: !!variant,
    [classNameProp]: !!classNameProp
  });

  return (
    <Tag
      className={className}
      {...props}
    >
      <If condition={!!leftIcon}>
        <Icon type={leftIcon as IconType} />
      </If>

      {children}

      <If condition={!!rightIcon}>
        <Icon type={rightIcon as IconType} />
      </If>
    </Tag>
  );
};

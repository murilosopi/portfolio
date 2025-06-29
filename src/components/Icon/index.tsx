import 'bootstrap-icons/font/bootstrap-icons.css';

import styles from './Icon.module.css';
import classNames from 'classnames';
import { ColorVariant } from '@/constants/colors';

export type IconType =
  | 'envelope'
  | 'github'
  | 'linkedin'
  | 'twitch'
  | 'briefcase'
  | 'mortarboard'
  | 'arrowRight'
  | 'x';

export type IconSize = 'sm' | 'md' | 'lg' | 'xl' | 'xxl';

const classNameMap: Record<IconType, string> = {
  envelope: 'bi bi-envelope',
  mortarboard: 'bi bi-mortarboard',
  briefcase: 'bi bi-briefcase',
  github: 'bi bi-github',
  linkedin: 'bi bi-linkedin',
  twitch: 'bi bi-twitch',
  arrowRight: 'bi bi-arrow-right',
  x: 'bi bi-x'
};

type IconProps = {
  type: IconType;
  size?: IconSize;
  fill?: ColorVariant;
  hoverFill?: ColorVariant;
  tag?: 'span' | 'i' | 'span' | 'button';
} & React.HTMLAttributes<HTMLElement>;

export const Icon = ({
  type,
  size = 'md',
  className: classNameProp,
  fill = 'light',
  hoverFill = 'primary',
  tag: Tag = 'span',
  ...props
}: IconProps) => {
  const className = classNames(
    styles.icon,
    classNameMap[type],
    classNameProp,
    styles[`icon--${size}`],
    styles[`icon--fill-${fill}`],
    styles[`icon--hover-fill-${hoverFill}`]
  );

  return (
    <Tag
      className={className}
      {...props}
    />
  );
};

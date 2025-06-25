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
  | 'arrowRight';

export type IconSize = 'sm' | 'md' | 'lg' | 'xl' | 'xxl';

const classNameMap: Record<IconType, string> = {
  envelope: 'bi bi-envelope',
  mortarboard: 'bi bi-mortarboard',
  briefcase: 'bi bi-briefcase',
  github: 'bi bi-github',
  linkedin: 'bi bi-linkedin',
  twitch: 'bi bi-twitch',
  arrowRight: 'bi bi-arrow-right'
};

type IconProps = {
  type: IconType;
  size?: IconSize;
  fill?: ColorVariant;
  hoverFill?: ColorVariant;
} & React.HTMLAttributes<HTMLElement>;

export const Icon = ({
  type,
  size = 'md',
  className: classNameProp,
  fill = 'light',
  hoverFill = 'primary',
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
    <span
      className={className}
      {...props}
    />
  );
};

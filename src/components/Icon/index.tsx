import 'bootstrap-icons/font/bootstrap-icons.css';

import styles from './Icon.module.css';
import classNames from 'classnames';
import { ColorVariants } from '@/constants/colors';

export type IconType =
  | 'envelope'
  | 'github'
  | 'linkedin'
  | 'twitch'
  | 'briefcase'
  | 'mortarboard';
export type IconSize = 'sm' | 'md' | 'lg' | 'xl' | 'xxl';

const classNameMap: Record<IconType, string> = {
  envelope: 'bi bi-envelope',
  mortarboard: 'bi bi-mortarboard',
  briefcase: 'bi bi-briefcase',
  github: 'bi bi-github',
  linkedin: 'bi bi-linkedin',
  twitch: 'bi bi-twitch'
};

type IconProps = {
  type: IconType;
  size?: IconSize;
  fill?: ColorVariants;
  hoverFill?: ColorVariants;
} & React.HTMLAttributes<HTMLElement>;

export const Icon = ({
  type,
  size = 'md',
  className: classNameProp,
  fill = ColorVariants.White,
  hoverFill = ColorVariants.Primary,
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

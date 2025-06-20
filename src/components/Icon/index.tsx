import 'bootstrap-icons/font/bootstrap-icons.css';

import styles from './Icon.module.css';
import classNames from 'classnames';

export type IconType = 'envelope' | 'github' | 'linkedin' | 'twitch';
export type IconSize = 'sm' | 'md' | 'lg' | 'xl' | 'xxl';

const classNameMap: Record<IconType, string> = {
  envelope: 'bi bi-envelope',
  github: 'bi bi-github',
  linkedin: 'bi bi-linkedin',
  twitch: 'bi bi-twitch'
};

type IconProps = {
  type: IconType;
  size?: IconSize;
} & React.HTMLAttributes<HTMLElement>;

export const Icon = ({
  type,
  size = 'md',
  className: classNameProp,
  ...props
}: IconProps) => {
  const className = classNames(
    styles.icon,
    classNameMap[type],
    classNameProp,
    styles[`icon--${size}`]
  );

  return (
    <span
      className={className}
      {...props}
    />
  );
};

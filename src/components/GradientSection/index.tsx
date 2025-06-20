import classNames from 'classnames';
import styles from './GradientSection.module.css';

export enum GradientVariants {
  ToDark = 'to-dark',
  FromDark = 'from-dark'
}

interface GradientSectionProps {
  children: React.ReactNode;
  variant?: GradientVariants;
}

export const GradientSection = ({
  children,
  variant = GradientVariants.FromDark
}: GradientSectionProps) => {
  return (
    <section
      className={classNames(
        styles['gradient-section'],
        styles[`gradient-section--${variant}`]
      )}
    >
      {children}
    </section>
  );
};

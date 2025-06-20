import classNames from 'classnames';
import styles from './GradientSection.module.css';
import { GradientVariants } from '@/constants/colors';

interface GradientSectionProps {
  children: React.ReactNode;
  variant?: GradientVariants;
}

export const GradientSection = ({
  children,
  variant = GradientVariants.DarkToPrimaryDarken
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

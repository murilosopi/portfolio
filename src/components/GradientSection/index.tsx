import classNames from 'classnames';
import styles from './GradientSection.module.scss';
import { ColorVariant } from '@/constants/colors';

interface GradientSectionProps {
  children: React.ReactNode;
  from: ColorVariant;
  to: ColorVariant;
}

export const GradientSection = ({
  children,
  from,
  to
}: GradientSectionProps) => {
  return (
    <section
      className={classNames(
        styles['gradient-section'],
        styles[`gradient-section--${from}-to-${to}`]
      )}
    >
      {children}
    </section>
  );
};

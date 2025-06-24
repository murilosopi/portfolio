import { InfoCard } from '@/components/InfoCard';
import { Experience } from '@/types/expirience';
import styles from './ExpiriencyCard.module.css';

interface ExpiriencyCardProps {
  experience: Experience;
  side?: 'left' | 'right';
}

export const ExpiriencyCard = ({
  experience,
  side = 'left'
}: ExpiriencyCardProps) => {
  const { type, description } = experience;

  const props = {
    [`${side}Icon`]: type === 'education' ? 'mortarboard' : 'briefcase'
  };

  return (
    <InfoCard
      className={styles['expirience-card']}
      {...props}
    >
      {description}
    </InfoCard>
  );
};

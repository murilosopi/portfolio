import { InfoCard } from '@/components/InfoCard';
import { Experience } from '@/types/experience';
import styles from './ExperienceCard.module.css';

interface ExperienceCardProps {
  experience: Experience;
  side?: 'left' | 'right';
}

export const ExperienceCard = ({
  experience,
  side = 'left'
}: ExperienceCardProps) => {
  const { type, description } = experience;

  const props = {
    [`${side}Icon`]: type === 'education' ? 'mortarboard' : 'briefcase'
  };

  return (
    <InfoCard
      className={styles['experience-card']}
      {...props}
    >
      {description}
    </InfoCard>
  );
};

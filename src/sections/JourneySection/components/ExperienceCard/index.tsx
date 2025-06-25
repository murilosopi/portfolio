import { InfoCard } from '@/components/InfoCard';
import { Experience } from '@/types/experience';
import styles from './ExperienceCard.module.css';
import { Button } from '@/components/Button';
import classNames from 'classnames';
import { Icon } from '@/components/Icon';

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
      className={classNames(
        styles['experience-card'],
        styles[`experience-card--${side}`]
      )}
      {...props}
    >
      <div className={styles['experience-card__content']}>
        <p className={styles['experience-card__description']}>{description}</p>

        <div className={styles['experience-card__actions']}>
          <Button
            variant='light'
            className={styles['experience-card__button']}
          >
            Details
            <Icon
              type='arrowRight'
              size='sm'
              fill='dark'
            />
          </Button>
        </div>
      </div>
    </InfoCard>
  );
};

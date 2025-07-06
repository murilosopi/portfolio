'use client';
import { InfoCard } from '@/components/InfoCard';
import { Experience } from '@/types/experience';
import styles from './ExperienceCard.module.css';
import { Button } from '@/components/Button';
import classNames from 'classnames';
import { Icon } from '@/components/Icon';
import { useState } from 'react';
import { ExperienceModal } from '../ExperienceModal';
import { OptionalLanguage } from '@/types/language';
import { defaultLanguage } from '@/data/languages';
import { experiencesActionsContent } from '@/dictionaries/experiences';

interface ExperienceCardProps extends OptionalLanguage {
  experience: Experience;
  side?: 'left' | 'right';
}

export const ExperienceCard = ({
  experience,
  side = 'left',
  lang = defaultLanguage
}: ExperienceCardProps) => {
  const { type, content } = experience;

  const iconSide = side === 'left' ? 'right' : 'left';

  const props = {
    [`${iconSide}Icon`]: type === 'education' ? 'mortarboard' : 'briefcase'
  };

  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

  const action = experiencesActionsContent[lang];

  return (
    <>
      <InfoCard
        className={classNames(
          styles['experience-card'],
          styles[`experience-card--${side}`]
        )}
        {...props}
      >
        <div className={styles['experience-card__content']}>
          <p className={styles['experience-card__description']}>
            {content.description}
          </p>

          <div className={styles['experience-card__actions']}>
            <Button
              variant='light'
              className={styles['experience-card__button']}
              onClick={() => setIsModalOpen(true)}
            >
              {action}
              <Icon
                type='arrowRight'
                size='sm'
                fill='dark'
              />
            </Button>
          </div>
        </div>
      </InfoCard>

      <ExperienceModal
        experience={experience}
        isModalOpen={isModalOpen}
        setIsModalOpen={setIsModalOpen}
        lang={lang}
      />
    </>
  );
};

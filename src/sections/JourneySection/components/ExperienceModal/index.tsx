import styles from './ExperienceModal.module.css';
import { Container } from '@/components/Container';
import { DialogModal } from '@/components/DialogModal';
import { Heading } from '@/components/Heading';
import { Icon } from '@/components/Icon';
import {
  EducationalExperience,
  Experience,
  WorkExperience
} from '@/types/experience';
import { EducationalDetails } from '../EducationalDetails';
import { OptionalLanguage } from '@/types/language';
import { defaultLanguage } from '@/data/languages';
import { WorkDetails } from '../WorkDetails';

interface ExperienceModalProps extends OptionalLanguage {
  isModalOpen: boolean;
  setIsModalOpen: React.Dispatch<React.SetStateAction<boolean>>;
  experience: Experience;
}

export const ExperienceModal = ({
  isModalOpen,
  setIsModalOpen,
  experience,
  lang = defaultLanguage
}: ExperienceModalProps) => {
  const renderDetails = () => {
    switch (experience.type) {
      case 'education':
        return (
          <EducationalDetails
            experience={experience as EducationalExperience}
            lang={lang}
          />
        );
      case 'work':
        return (
          <WorkDetails
            experience={experience as WorkExperience}
            lang={lang}
          />
        );
    }
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <DialogModal
      open={isModalOpen}
      onEsc={closeModal}
    >
      <Container>
        <article>
          <header className={styles['experience-modal__header']}>
            <Heading
              as='h3'
              variant='primary'
              className={styles['experience-modal__title']}
            >
              {experience.content.title}
            </Heading>
            <Icon
              tag='button'
              title='Close'
              fill='light'
              hoverFill='light'
              type='x'
              size='xl'
              onClick={closeModal}
            />
          </header>

          <div className={styles['experience-modal__details']}>
            {renderDetails()}
          </div>
        </article>
      </Container>
    </DialogModal>
  );
};

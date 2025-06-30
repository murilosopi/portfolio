import styles from './ExperienceModal.module.css';
import { Container } from '@/components/Container';
import { FullscreenModal } from '@/components/FullscreenModal';
import { Heading } from '@/components/Heading';
import { Icon } from '@/components/Icon';
import { EducationalExperience, Experience } from '@/types/experience';
import { EducationalDetails } from '../EducationalDetails';

interface ExperienceModalProps {
  isModalOpen: boolean;
  setIsModalOpen: React.Dispatch<React.SetStateAction<boolean>>;
  experience: Experience;
}

export const ExperienceModal = ({
  isModalOpen,
  setIsModalOpen,
  experience
}: ExperienceModalProps) => {
  const renderDetails = () => {
    switch (experience.type) {
      case 'education':
        return (
          <EducationalDetails
            experience={experience as EducationalExperience}
          />
        );
      case 'work':
        return <></>;
    }
  };

  return (
    <FullscreenModal open={isModalOpen}>
      <Container>
        <article>
          <header className={styles['experience-modal__header']}>
            <Heading
              as='h3'
              variant='primary'
              className={styles['experience-modal__title']}
            >
              {experience.title}
            </Heading>
            <Icon
              tag='button'
              title='Close'
              fill='light'
              hoverFill='light'
              type='x'
              size='xl'
              onClick={() => setIsModalOpen(false)}
            />
          </header>

          <div className={styles['experience-modal__details']}>
            {renderDetails()}
          </div>
        </article>
      </Container>
    </FullscreenModal>
  );
};

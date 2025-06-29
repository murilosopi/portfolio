import styles from './ExperienceModal.module.css';
import { Container } from '@/components/Container';
import { FullscreenModal } from '@/components/FullscreenModal';
import { Heading } from '@/components/Heading';
import { Icon } from '@/components/Icon';
import { Experience } from '@/types/experience';

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
  return (
    <FullscreenModal
      open={isModalOpen}
    >
      <Container>
        <header className={styles['experience-modal__header']}>
          <Heading>Experience #{experience.id}</Heading>
          <Icon
            tag='button'
            fill='light'
            hoverFill='light'
            type='x'
            size='xl'
            onClick={() => setIsModalOpen(false)}
          />
        </header>
        <p>{experience.description}</p>
      </Container>
    </FullscreenModal>
  );
};

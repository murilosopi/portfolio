import { Heading } from '@/components/Heading';
import styles from './EducationalDetails.module.css';
import { EducationalExperience } from '@/types/experience';
import { If } from '@/components/If';

export const EducationalDetails = ({
  experience
}: {
  experience: EducationalExperience;
}) => {
  return (
    <ul className={styles['educational-details']}>
      <li>
        <Heading
          as='h4'
          leftIcon={'lightbulb'}
        >
          Insights and Learnings
        </Heading>
        {experience.insightsAndLearnings}
      </li>
      <li>
        <Heading
          as='h4'
          leftIcon={'calendarRange'}
        >
          Period
        </Heading>
        From{' '}
        <strong>
          {experience.initialDate.toLocaleString('en', {
            dateStyle: 'long'
          })}
        </strong>{' '}
        until{' '}
        <strong>
          {experience.finalDate?.toLocaleString('en', {
            dateStyle: 'long'
          }) || 'now'}
        </strong>
      </li>

      <If condition={!!experience.institution}>
        <li>
          <Heading
            as='h4'
            leftIcon={'book'}
          >
            Institution
          </Heading>
          At <strong>{experience.institution}</strong>
        </li>
      </If>
    </ul>
  );
};

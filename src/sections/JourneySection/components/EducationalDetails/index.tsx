import { Heading } from '@/components/Heading';
import styles from './EducationalDetails.module.css';
import { EducationalExperience } from '@/types/experience';
import { If } from '@/components/If';
import { OptionalLanguage } from '@/types/language';
import { defaultLanguage } from '@/data/languages';
import { experiencesContent } from '@/contents/experiences';

export const EducationalDetails = ({
  experience,
  lang = defaultLanguage
}: {
  experience: EducationalExperience;
} & OptionalLanguage) => {
  const { initialDate, finalDate, content } = experience;

  const { insightsAndLearnings, period, institution } =
    experiencesContent[lang];

  const formattedInitialDate = initialDate.toLocaleDateString(lang, {
    dateStyle: 'long'
  });

  const formattedFinalDate = finalDate
    ? finalDate.toLocaleDateString(lang, { dateStyle: 'long' })
    : period.now;

  return (
    <ul className={styles['educational-details']}>
      <li>
        <Heading
          as='h4'
          leftIcon={'lightbulb'}
        >
          {insightsAndLearnings.title}
        </Heading>
        {content.insightsAndLearnings}
      </li>
      <li>
        <Heading
          as='h4'
          leftIcon={'calendarRange'}
        >
          {period.title}
        </Heading>
        {period.beforeInitialDate} <strong>{formattedInitialDate}</strong>
        {period.beforeFinalDate} <strong>{formattedFinalDate}</strong>
      </li>

      <If condition={!!content.institution}>
        <li>
          <Heading
            as='h4'
            leftIcon={'book'}
          >
            {institution.title}
          </Heading>
          <strong>{content.institution}</strong>
        </li>
      </If>
    </ul>
  );
};
